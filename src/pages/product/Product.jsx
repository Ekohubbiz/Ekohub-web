import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import Moment from 'react-moment';
import { Dialog } from '@material-tailwind/react';
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import {
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
import BottomSheet from '../../components/BottomSheet/BottomSheet';

import ProductImg from '../../assets/img/product.svg';
import Star from '../../assets/icons/star.svg';
import Liked from '../../assets/icons/liked.png';
import Unliked from '../../assets/icons/unlike.png';
import Share from '../../assets/icons/share.svg';
import Avatar from '../../assets/img/avatar.png';
import Call from '../../assets/icons/call.svg';
import Text from '../../assets/icons/text.svg';
import Dcart from '../../assets/img/dcart.jpeg';
import Google from '../../assets/icons/google.svg';
import Facebook from '../../assets/icons/facebook.svg';

import { paths } from '../../constants';
import './styles.scss';
import { Card2 } from '../../components/shared/Cards';
import MainLayout from '../../components/Landing/MainLayout';
import { Desktop, Mobile } from '../../layout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavouriteProduct,
  fetchRecentlyViewedProduct,
  fetchSimilarProducts,
  fetchSingleProduct,
  removeFavouriteProduct,
  sendProductConversation,
} from '../../redux/actions/products';
import {
  getProduct,
  getRecentlyViewed,
  getSimilarProducts,
  setProduct,
  setSimilar,
} from '../../redux/reducers/productSlice';
import { getIsLoading, setLoading } from '../../redux/reducers/loaderSlice';
import {
  getDateDifference,
  isEmptyObject,
  numberWithCommas,
  showToast,
} from '../../utils/helpers';
import ChatApi from '../../services/firebaseInstance';
import { getCurrentUser } from '../../redux/reducers/authSlice';
import {
  Input1,
  InputSelect,
  InputTextArea,
} from '../../components/shared/Inputs';
import {
  getStoreReviews,
  setStoreReviews,
} from '../../redux/reducers/storeSlice';
import { fetchStoreReviews } from '../../redux/actions/stores';
import Auth from '../../middleware/storage';
import { Button1, Button2 } from '../../components/shared/Buttons';
import { colors } from '../../themes';
import SigninComponent from '../../components/signIn/SigninComponent';
import { Helmet } from 'react-helmet';
import Api from '../../api';
// import useQuery from "../../hooks/useQuery";

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getCurrentUser);
  const product = useSelector(getProduct);
  const similar = useSelector(getSimilarProducts);
  const loading = useSelector(getIsLoading);
  const reviews = useSelector(getStoreReviews);
  const recentlyViewed = useSelector(getRecentlyViewed);
  const [showNumber, setShowNumber] = useState(false);
  const [showModalChat, setShowModalChat] = React.useState(false);
  const [showModalAuth, setShowModalAuth] = React.useState(false);
  const [reportSheet, setReportSheet] = useState(false);
  const [report, setReport] = useState({
    product_id: product.id,
    reason: '',
    description: '',
  });
  const [chats, setChats] = useState([]);
  const [info, setInfo] = useState('details');
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const supportsShare = Boolean(navigator.share);
  const shareData = {
    title: 'Ekohub',
    text: 'Product details',
    url: window.location.href,
  };

  const fetchMessages = async () => {
    const groupId = `group_user${user?.id}_store${product?.store_id}`;
    console.log(groupId);
    await ChatApi.conversations.messages(groupId, setChats);
    console.log(chats);
  };

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
    return () => {
      dispatch(setProduct({}));
    };
  }, [id]);

  useEffect(() => {
    user?.id && dispatch(fetchRecentlyViewedProduct());
  }, [user]);

  useEffect(() => {
    product?.id && dispatch(fetchSimilarProducts(product?.id));
    product?.store?.id && dispatch(fetchStoreReviews(product?.store?.id));
    return () => {
      dispatch(setSimilar([]));
      dispatch(setStoreReviews([]));
      setChats([]);
    };
  }, [product?.id]);

  const productImages = (product?.product_media || []).map((image) => {
    return {
      original: image.url,
      thumbnail: image.url,
    };
  });

  const addFavourite = async (pid) => {
    await dispatch(addFavouriteProduct({ product_id: pid }));
    dispatch(fetchSingleProduct(product?.slug));
  };

  const removeFavourite = async (id) => {
    await dispatch(removeFavouriteProduct(id));
    dispatch(fetchSingleProduct(product?.slug));
  };

  const goToChat = (groupId) =>
    navigate(`/messages?chat_id=${groupId}`, {
      state: {
        groupId,
        item: {
          name: product?.name,
          price: product?.price,
          picture: product?.product_media[0].url,
          id: product?.id,
          slug: product?.slug,
        },
      },
    });

  const onClickChat = async () => {
    dispatch(setLoading(true));
    const users = [
      {
        id: user?.id,
        name: user?.first_name,
        picture: user?.profile_pic_url,
        phone: user?.phone,
        type: 'user',
      },
      {
        id: product?.store?.id,
        name: product?.store?.name,
        picture: product?.store?.cover_image_url,
        phone: product?.store?.phone,
        type: 'store',
      },
    ];
    ChatApi.conversations.create(
      [user?.id, product?.store?.id],
      users,
      goToChat,
    );
    dispatch(setLoading(false));
  };

  const onMessageSend = async (msg, type) => {
    const groupId = `group_user${user?.id}_store${product?.store_id}`;
    const userInfo = {
      id: user?.id,
      name: user?.first_name,
      picture: user?.profile_pic_url,
      phone: user?.phone,
      type: 'user',
    };
    await ChatApi.conversations.send(groupId, userInfo, msg, type);
    setValue('');
    await fetchMessages();
    const payload = {
      firebase_doc_id: groupId,
      sender_id: user?.id,
      store_is_sender: false,
      store_id: product?.store_id,
      message_content: msg,
      message_content_type: type,
      sender_details: userInfo,
    };
    await dispatch(sendProductConversation(payload));
  };

  const startChat = async () => {
    const users = [
      {
        id: user?.id,
        name: user?.first_name,
        picture: user?.profile_pic_url,
        phone: user?.phone,
      },
      {
        id: product?.store?.id,
        name: product?.store?.name,
        picture: product?.store?.cover_image_url,
        phone: product?.store?.phone,
      },
    ];
    ChatApi.conversations.create(
      [user?.id, product?.store?.id],
      users,
      openChat,
    );
    fetchMessages();
    setShowModalChat(true);
    inputRef?.current?.focus();
  };

  const startChatMobile = async () => {
    const users = [
      {
        id: user?.id,
        name: user?.first_name,
        picture: user?.profile_pic_url,
        phone: user?.phone,
      },
      {
        id: product?.store?.id,
        name: product?.store?.name,
        picture: product?.store?.cover_image_url,
        phone: product?.store?.phone,
      },
    ];
    ChatApi.conversations.create(
      [user?.id, product?.store?.id],
      users,
      openChat,
    );
    fetchMessages();
    navigate(`/messages`);
  };

  const openChat = async (groupId) => {
    console.log(groupId);
    const userInfo = {
      id: user?.id,
      name: user?.first_name,
      picture: user?.profile_pic_url,
      phone: user?.phone,
      type: 'user',
    };
    const item = {
      name: product?.name,
      price: product?.price,
      picture: product?.product_media[0].url,
      id: product?.id,
      slug: product?.slug,
    };
    await ChatApi.conversations.send(groupId, userInfo, item, 'product');
    setValue('');
    const payload = {
      firebase_doc_id: groupId,
      sender_id: user?.id,
      sender_details: userInfo,
      store_is_sender: false,
      store_id: product?.store_id,
      message_content: msg,
      message_content_type: 'product',
    };
    await dispatch(sendProductConversation(payload));
  };

  const reportIssue = async (e) => {
    e.preventDefault();
    try {
      const res = await Api.products.reportProduct(report);
      if (res.data.hasError) {
        setReportSheet(false);
        setReport({ product_id: product.id, reason: '', description: '' });
        showToast(res.data.errors.message, 'error');
        return;
      }
      setReport({ product_id: product.id, reason: '', description: '' });
      setReportSheet(false);
      showToast('Item reported', 'success');
    } catch (error) {
      setReportSheet(false);
      console.log(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>{product?.name || 'Ekohub'}</title>
        <meta
          name="description"
          content={
            product?.description ||
            'Your online market place to buy and sell anything anywhere.'
          }
        />
        <meta property="og:image" content={productImages[0]?.thumbnail || ''} />
      </Helmet>
      <Desktop>
        <Helmet>
          <title>{product?.name || 'Ekohub'}</title>
          <meta
            name="description"
            content={
              product?.description ||
              'Your online market place to buy and sell anything anywhere.'
            }
          />
          <meta
            property="og:image"
            content={productImages[0]?.thumbnail || ''}
          />
        </Helmet>
        <MainLayout loading={loading}>
          <div className="lg:px-4 md:px-1 px-2 mb-2">
            <div className="grid grid-cols-4 gap-4 pt-4">
              <div className="lg:col-span-4 col-span-4">
                <div className="bg-white rounded-lg drop-shadow-md p-4">
                  {/* breadcrumbs */}
                  <nav className="flex pb-2" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                      <li className="inline-flex items-center">
                        <Link
                          to={paths.HOME}
                          className=" rounded-lg bg-white drop-shadow-sm px-4 py-2 inline-flex items-center text-sm text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <svg
                            className="w-6 h-6 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>

                          <Link
                            to={`/category-product/${product?.category?.id}`}
                            state={{ categoryName: product?.category?.name }}
                            className=" rounded-lg bg-white drop-shadow-sm px-4 py-2 ml-1 text-sm text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                          >
                            {product?.category?.name.toLocaleUpperCase()}
                          </Link>
                        </div>
                      </li>
                      {product?.sub_category && (
                        <li>
                          <div className="flex items-center">
                            <svg
                              className="w-6 h-6 text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>

                            <Link
                              to={`/category-product/${product?.category?.id}`}
                              state={{ categoryName: product?.category?.name }}
                              className=" rounded-lg bg-white drop-shadow-sm px-4 py-2 ml-1 text-sm text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                            >
                              {product?.sub_category?.name}
                            </Link>
                          </div>
                        </li>
                      )}
                      <li aria-current="page">
                        <div className="flex items-center">
                          <svg
                            className="w-6 h-6 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="ml-1 text-sm text-gray-400 md:ml-2 dark:text-gray-500">
                            {product?.name}
                          </span>
                        </div>
                      </li>
                    </ol>
                  </nav>

                  {/* contents */}
                  <div className="my-2">
                    <p className="product-title my-2">{product?.name}</p>
                    <div className="flex">
                      <img src={Star} alt="" className="h-3" />
                      <span className="text-xs pl-1 font-thin">
                        5.0 ({reviews.length} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 py-4">
                    <div className="col-span-3">
                      {/* image container */}
                      <div className="flex justify-end">
                        {(product?.favourite_product || []).length > 0 ? (
                          <img
                            src={Liked}
                            className="cursor-pointer w-20 h-20"
                            alt=""
                            onClick={() => removeFavourite(product?.id)}
                          />
                        ) : (
                          <img
                            src={Unliked}
                            className="cursor-pointer w-20 h-20"
                            alt=""
                            onClick={() =>
                              Auth.isAuthenticated()
                                ? addFavourite(product.id)
                                : setShowModalAuth(true)
                            }
                          />
                        )}
                        {/* <div>
                          <img
                            src={Share}
                            className="cursor-pointer"
                            alt=""
                            onClick={() => showShareModal(true)}
                          />
                        </div> */}
                      </div>
                      <div className="">
                        <ImageGallery
                          items={productImages || []}
                          lazyLoad
                          thumbnailPosition="right"
                          showPlayButton={false}
                          onErrorImageURL={Dcart}
                        />
                      </div>
                      {/* details */}

                      {(product?.details || []).length > 0 && (
                        <div className="py-8">
                          <p className="py-4 text-base font-semibold">
                            Details
                          </p>
                          <div className="flex">
                            <div className="grow product-desc">
                              {(product?.details || []).map((detail, i) => (
                                <p key={i}>{detail.label}</p>
                              ))}
                            </div>
                            <div className="product-desc-info">
                              {(product?.details || []).map((detail, i) => (
                                <p key={i}>
                                  {detail.value === true ? 'Yes' : detail.value}
                                </p>
                              ))}
                            </div>
                            <div className="grow"></div>
                          </div>
                        </div>
                      )}

                      <hr />
                      {/* description */}
                      <div className="py-4">
                        <p className="py-4 text-base font-semibold">
                          Description
                        </p>
                        <div>
                          <p className="text-sm w-80">{product?.description}</p>
                        </div>
                      </div>
                      <hr />
                      {/* share */}
                      <div className="p-4">
                        <div className="my-1 flex gap-4">
                          <FacebookShareButton url={window.location.href}>
                            <FacebookIcon size={32} round={true} />
                          </FacebookShareButton>
                          <WhatsappShareButton url={window.location.href}>
                            <WhatsappIcon size={32} round={true} />
                          </WhatsappShareButton>
                          <TwitterShareButton url={window.location.href}>
                            <TwitterIcon size={32} round={true} />
                          </TwitterShareButton>
                        </div>
                      </div>
                      <hr />
                    </div>

                    <div className="col-span-1 ">
                      <div className="product-variant bg-white rounded-lg drop-shadow-md mb-8">
                        <div className="p-4">
                          <div className="py-1">
                            <span className="text-red-600 lg:text-lg md:text-md font-semibold">
                              ₦ {numberWithCommas(product?.price || '')}
                            </span>
                          </div>
                          <div className="py-1">
                            <span className="text-xs font-light">
                              {product?.address}
                            </span>{' '}
                            {/* <span className="text-xs font-light">SQM: 50</span> */}
                          </div>
                          {/* <div>
                            <p className="text-xs py-2 font-semibold">Colour</p>
                            <div className="flex">
                              <div className="p-1 bg-slate-100 flex flex-col justify-center items-center rounded-lg mr-2">
                                <div className="w-6 h-6 bg-black rounded-full"></div>
                                <p className="text-xs font-light">Black</p>
                              </div>
                              <div className="p-1 flex flex-col justify-center items-center rounded-lg mr-2">
                                <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                                <p className="text-xs font-light">Gold</p>
                              </div>
                              <div className="p-1 flex flex-col justify-center items-center rounded-lg mr-2">
                                <div className="w-6 h-6 bg-slate-500 rounded-full"></div>
                                <p className="text-xs font-light">Silver</p>
                              </div>
                              <div className="p-1 flex flex-col justify-center items-center rounded-lg">
                                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                                <p className="text-xs font-light">Blue</p>
                              </div>
                            </div>
                          </div> */}
                        </div>
                        {user?.id !== product?.store?.user_id && (
                          <>
                            <div className="call-merc p-4 flex cursor-pointer">
                              <img src={Call} alt="" className="w-4" />
                              <p
                                className="text-base font-bold ml-2"
                                onClick={() =>
                                  Auth.isAuthenticated()
                                    ? setShowNumber(true)
                                    : setShowModalAuth(true)
                                }
                              >
                                Call Seller
                              </p>
                              <a
                                href={`tel:${product?.store?.phone || ''}`}
                                className="cursor-pointer text-base font-bold ml-2"
                              >
                                {showNumber && (product?.store?.phone || '')}
                              </a>
                            </div>
                            {user?.id !== product?.store?.user_id && (
                              <div
                                onClick={() =>
                                  Auth.isAuthenticated()
                                    ? startChat()
                                    : setShowModalAuth(true)
                                }
                                className="chat-merc p-4 rounded-b-lg flex cursor-pointer"
                              >
                                <img src={Text} alt="" className="w-4" />
                                <p className="text-white text-base ml-2">
                                   Message
                                </p>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                      <div className="bg-white rounded-lg drop-shadow-md mb-4">
                        <div className="p-4">
                          <div className="flex py-1 items-center">
                            <img
                              src={product?.store?.cover_image_url || Avatar}
                              alt=""
                              className="w-14 h-14 mr-4 rounded-full"
                            />
                            <p className="text-base font-semibold">
                              {product?.store?.name}
                            </p>
                          </div>
                          <p className="text-xs text-slate-500 font-light">
                            Member since{' '}
                            <Moment
                              format="MMMM YYYY"
                              date={product?.store?.created_at}
                            />
                          </p>
                          <div className="flex py-2">
                            <img src={Star} alt="" className="h-3" />
                            <span className="text-xs pl-1 font-thin">
                              4.1 (250 reviews)
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 font-light py-2">
                            Response time:{' '}
                            <span className="text-xs text-gray-800">
                              {' '}
                              within an hour (90%)
                            </span>
                          </p>
                          <p className="text-xs text-slate-500 font-light py-2">
                            Bio:{' '}
                            <span className="text-xs text-gray-800">
                              {product?.store?.description}
                            </span>
                          </p>
                        </div>
                        {Auth.isAuthenticated() ? (
                          <Link
                            to={`/merchant/${product?.store?.slug}`}
                            state={{ pid: product?.store?.id }}
                          >
                            <div className="cursor-pointer p-4 flex justify-between items-center border-t">
                              <p className="text-xs text-slate-500">
                                Merchant’s Information
                              </p>
                              <p className="text-xs text-slate-500">{'>'}</p>
                            </div>
                          </Link>
                        ) : (
                          <div
                            onClick={() => setShowModalAuth(true)}
                            className="cursor-pointer p-4 flex justify-between items-center border-t"
                          >
                            <p className="text-xs text-slate-500">
                              Merchant’s Information
                            </p>
                            <p className="text-xs text-slate-500">{'>'}</p>
                          </div>
                        )}

                        {!isEmptyObject(user) &&
                          user?.id == product?.store?.user_id && (
                            <div className="my-2">
                              <Link to={`/edit/product/${product?.slug}`}>
                                <p className="text-sm text-center border bg-red-400 hover:bg-red-600 p-4 cursor-pointer text-white">
                                  Edit product
                                </p>
                              </Link>
                            </div>
                          )}
                      </div>
                      <div className="safe bg-white rounded-lg drop-shadow-md mb-4 p-2">
                        <p className="text-bold text-base text-center">
                          Safety tips
                        </p>
                        <ul className="p-4">
                          <li className="text-sm text-thin">
                            Don't pay in advance, including for delivery
                          </li>
                          <li className="text-sm text-thin">
                            Meet the seller at a safe public place
                          </li>
                          <li className="text-sm text-thin">
                            Inspect the item and ensure it's exactly what you
                            want
                          </li>
                          <li className="text-sm text-thin">
                            On delivery, check that the item delivered is what
                            was inspected
                          </li>
                          <li className="text-sm text-thin">
                            Only pay when you're satisfied
                          </li>
                        </ul>
                        {user?.id && (
                          <div className="my-2 flex justify-center">
                            <button
                              onClick={() => setReportSheet(true)}
                              className="text-sm text-center border border-red-300 hover:bg-red-400 hover:text-white p-1 px-2 cursor-pointer"
                            >
                              Report Abuse
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* based ads */}
                  <div className="py-4">
                    <p className="py-4 text-base font-semibold">Reviews</p>
                    {(reviews || []).length < 1 && (
                      <div>
                        <p className="py-4 text-base font-semibold text-center">
                          No reviews yet
                        </p>
                      </div>
                    )}
                    <div className="flex flex-nowrap gap-2 overflow-x-auto">
                      {(reviews || []).slice(0, 5).map((review) => (
                        <p>
                          <div className="py-4 pr-4">
                            <div className="flex py-2 items-center w-52">
                              <img
                                src={review?.user?.profile_pic_url || Avatar}
                                alt=""
                                className="w-10 h-10 rounded-3xl mr-4"
                              />
                              <div>
                                <p className="text-base font-semibold">
                                  {review?.user?.first_name}
                                </p>
                                <p className="text-xs text-slate-200">
                                  {review?.comment}
                                </p>
                                <p className="text-xs my-1 text-gray-400">
                                  <Moment
                                    format="MMMM YYYY"
                                    date={product?.store?.created_at}
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* similar */}
                  <div className="py-4 w-auto overflow-x-auto">
                    <p className="py-4 text-base font-semibold">Similar</p>

                    {(similar || []).length < 1 && (
                      <div>
                        <p className="py-4 text-base font-semibold text-center">
                          No similar product yet
                        </p>
                      </div>
                    )}

                    <div className="flex overflow-x-auto">
                      {(similar || []).slice(0, 5).map((product, index) => (
                        <p>
                          <Card2
                            img={product.product_media[0]?.url || Dcart}
                            title={product.name}
                            price={product.price}
                            location={product.address}
                            to={`/product/${product.slug}`}
                            key={index}
                            call={product?.store?.phone}
                            chat={() => navigate(`/product/${product.slug}`)}
                          />
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* recently viewed */}
                  {user?.id && (
                    <div className="py-4 w-auto overflow-x-auto">
                      <p className="py-4 text-base font-semibold">
                        Recently viewed
                      </p>
                      <div className="flex overflow-x-auto">
                        {(recentlyViewed || [])
                          .slice(0, 5)
                          .map((product, index) => (
                            <p>
                              <Card2
                                img={
                                  product.product.product_media[0]?.url || Dcart
                                }
                                title={product.product.name}
                                price={product.product.price}
                                location={product.product.address}
                                to={`/product/${product.product.slug}`}
                                key={index}
                                call={product.product?.store?.phone}
                                chat={() =>
                                  navigate(`/product/${product.product?.slug}`)
                                }
                              />
                            </p>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Dialog
            size="md"
            open={reportSheet}
            handler={() => setReportSheet(false)}
          >
            <div className="m-4">
              <p className="text-center my-2">{product.name}</p>
              <div>
                <form onSubmit={reportIssue}>
                  <InputSelect
                    id={`report`}
                    placeholder={`Report reason`}
                    required
                    data={[
                      {
                        id: 'This is illegal/Fraudulent',
                        label: 'This is illegal/Fraudulent',
                      },
                      { id: 'This ad is spam', label: 'This ad is spam' },
                      {
                        id: 'The price is wrong',
                        label: 'The price is wrong',
                      },
                      { id: 'It is sold', label: 'It is sold' },
                      {
                        id: 'User is unreachable',
                        label: 'User is Unreachable',
                      },
                      { id: 'Other', label: 'Other' },
                    ]}
                    value={report.reason}
                    onChange={(e) => {
                      setReport({
                        ...report,
                        reason: e.target.value,
                        product_id: product.id,
                      });
                    }}
                  />

                  <InputTextArea
                    name="description"
                    id=""
                    rows="4"
                    placeholder="Please describe your issue"
                    onChange={(e) =>
                      setReport({
                        ...report,
                        description: e.target.value,
                        product_id: product.id,
                      })
                    }
                    required
                    value={report.description}
                  />

                  <button
                    type="submit"
                    className="w-full my-2 text-sm text-center border border-red-400 hover:bg-red-400 hover:text-white p-4 rounded-md cursor-pointer"
                  >
                    Send report
                  </button>
                </form>
              </div>
            </div>
          </Dialog>
          <Dialog
            size="md"
            open={showModalAuth}
            handler={() => setShowModalAuth(false)}
          >
            <SigninComponent onSign={() => setShowModalAuth(false)} />
          </Dialog>
          <Dialog
            size="md"
            open={showModalChat}
            handler={() => setShowModalChat(false)}
          >
            <div className="p-4 overflow-y-auto">
              <div className="overflow-y-auto" style={{ height: '500px' }}>
                {(chats || []).map((msg, i) => {
                  return (
                    <div key={i}>
                      <div
                        className={
                          msg?.user?.id === user?.id
                            ? `flex justify-end`
                            : `flex justify-left`
                        }
                        key={i}
                      >
                        {msg.contentType === 'text' && (
                          <div>
                            <p
                              className={
                                msg?.user?.id === user?.id
                                  ? `text-xs border rounded-xl p-3 my-1 w-fit`
                                  : `text-white text-xs bg-red-700 text-sm border rounded-xl p-3 w-fit`
                              }
                            >
                              {msg.content}
                            </p>
                            <p
                              className={
                                msg?.user?.id === user?.id
                                  ? `text-right`
                                  : `text-left`
                              }
                              style={{ fontSize: '0.5em' }}
                            >
                              {getDateDifference(msg?.createdAt?.toDate())}
                            </p>
                          </div>
                        )}
                      </div>
                      {msg?.contentType === 'product' && (
                        <Link to={`/product/${msg?.content?.slug}`}>
                          <div className="flex justify-between items-center bg-white drop-shadow-lg rounded-lg my-2">
                            <div className="flex m-1 items-center">
                              <img
                                src={msg?.content?.picture}
                                alt=""
                                className="w-14 h-14 rounded-xl"
                              />
                              <div className="ml-4">
                                <p className="text-xs text-slate-400">
                                  {msg?.content?.name}
                                </p>
                                <p className="text-xs font-bold">
                                  {numberWithCommas(msg?.content?.price || 0)}
                                </p>
                              </div>
                            </div>
                            <p className="m-4 font-bold text-2xl">{'>'}</p>
                          </div>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="flex">
                <div className="grow">
                  <div className="flex">
                    <p
                      onClick={() => setValue('Is this still available?')}
                      className="text-xs bg-slate-200 rounded-2xl p-2 mx-2 cursor-pointer"
                    >
                      Is this still available?
                    </p>
                    <p
                      onClick={() => setValue('I am interested')}
                      className="text-xs bg-slate-200 rounded-2xl p-2 mx-2 cursor-pointer"
                    >
                      I am interested
                    </p>
                    <p
                      onClick={() => setValue('How much is the last price?')}
                      className="text-xs bg-slate-200 rounded-2xl p-2 mx-2 cursor-pointer"
                    >
                      How much is the last price?{' '}
                    </p>
                  </div>

                  <Input1
                    type="text"
                    placeholder="type a message"
                    name="business"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                  />

                  <button
                    onClick={() => onMessageSend(value, 'text')}
                    className="p-2 m-2 border bg-red-500 rounded-xl drop-shadow-md h-10 self-end"
                  >
                    <p className="text-xs text-white">send</p>
                  </button>
                </div>
              </div>
            </div>
          </Dialog>
        </MainLayout>
      </Desktop>
      <Mobile>
        <Helmet>
          <title>{product?.name || 'Ekohub'}</title>
          <meta
            name="description"
            content={
              product?.description ||
              'Your online market place to buy and sell anything anywhere.'
            }
          />
          <meta name="keywords" content={product?.name || 'Ekohub'} />
          <meta
            property="og:image"
            key="og:image"
            content={productImages[0]?.thumbnail || ''}
          />
        </Helmet>
        <MobileLayout nav={false}>
          <div className="">
            <ImageGallery
              items={productImages || []}
              lazyLoad
              showThumbnails={false}
              // thumbnailPosition="bottom"
              showPlayButton={false}
              onErrorImageURL={Dcart}
            />
          </div>
          <div className="flex absolute top-3 right-4 justify-end">
            {(product?.favourite_product || []).length > 0 ? (
              <img
                src={Liked}
                className="cursor-pointer w-20 h-20"
                alt=""
                onClick={() => removeFavourite(product?.id)}
              />
            ) : (
              <img
                src={Unliked}
                className="cursor-pointer w-20 h-20"
                alt=""
                onClick={() => addFavourite(product.id)}
              />
            )}
          </div>
          <section className="p-4 overflow-y-auto">
            <p className="product-title my-2">{product?.name}</p>
            <div className="py-1">
              <span className="text-red-600 text-lg font-semibold">
                ₦ {numberWithCommas(product?.price || '')}
              </span>{' '}
            </div>
            <div className="py-1">
              <span className="text-xs font-light">{product?.address}</span>{' '}
            </div>
            <hr className="my-2" />
            <div>
              <div className="flex justify-around align-center">
                <p
                  onClick={() => setInfo('details')}
                  style={{ color: info === 'details' ? '#000' : '#D2D9E3' }}
                  className="bg-gray-200 text-xs font-bold p-2 rounded-lg cursor-pointer"
                >
                  Details
                </p>
                <p
                  onClick={() => setInfo('description')}
                  style={{ color: info === 'description' ? '#000' : '#D2D9E3' }}
                  className="text-xs font-bold bg-gray-200 p-2 rounded-lg cursor-pointer"
                >
                  Description
                </p>
                <p
                  onClick={() => setInfo('review')}
                  style={{ color: info === 'review' ? '#000' : '#D2D9E3' }}
                  className="text-xs font-bold bg-gray-200 p-2 rounded-lg cursor-pointer"
                >
                  Review
                </p>
              </div>
              <div>
                {info === 'details' && (
                  <div className="flex flex-col justify-center align-center p-4 my-10">
                    {(product?.details || []).length > 0 && (
                      <div className="flex justify-between">
                        <div className="grow product-desc">
                          {(product?.details || []).map((detail, i) => (
                            <p key={i}>{detail.label}</p>
                          ))}
                        </div>
                        <div className="product-desc-info">
                          {(product?.details || []).map((detail, i) => (
                            <p key={i}>
                              {detail.value === true ? 'Yes' : detail.value}
                            </p>
                          ))}
                        </div>
                        {/* <div className="grow"></div> */}
                      </div>
                    )}
                  </div>
                )}
                {info === 'description' && (
                  <div className="my-20">
                    <p className="text-sm w-80">{product?.description}</p>
                  </div>
                )}
                {info === 'review' && (
                  <div className="my-10">
                    {(reviews || []).length < 1 && (
                      <div>
                        <p className="py-4 text-base font-semibold text-center">
                          No reviews yet
                        </p>
                      </div>
                    )}
                    <div className="flex flex-nowrap gap-2 overflow-x-auto">
                      {(reviews || []).slice(0, 5).map((review) => (
                        <p>
                          <div className="py-4 pr-4">
                            <div className="flex py-2 items-center w-52">
                              <img
                                src={review?.user?.profile_pic_url || Avatar}
                                alt=""
                                className="w-10 h-10 rounded-3xl mr-4"
                              />
                              <div>
                                <p className="text-base font-semibold">
                                  {review?.user?.first_name}
                                </p>
                                <p className="text-xs text-slate-200">
                                  {review?.comment}
                                </p>
                                <p className="text-xs my-1 text-gray-400">
                                  <Moment
                                    format="MMMM YYYY"
                                    date={product?.store?.created_at}
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {/* share */}
              <div className="p-4">
                <div className="my-1 flex gap-4">
                  <FacebookShareButton url={window.location.href}>
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>
                  <WhatsappShareButton url={window.location.href}>
                    <WhatsappIcon size={32} round={true} />
                  </WhatsappShareButton>
                  <TwitterShareButton url={window.location.href}>
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg drop-shadow-md mb-4">
                <div className="p-4">
                  <div className="flex py-1 items-center">
                    <img
                      src={product?.store?.cover_image_url || Avatar}
                      alt=""
                      className="w-14 h-14 mr-4 rounded-full"
                    />
                    <p className="text-base font-semibold">
                      {product?.store?.name}
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 font-light">
                    Member since{' '}
                    <Moment
                      format="MMMM YYYY"
                      date={product?.store?.created_at}
                    />
                  </p>
                  <div className="flex py-2">
                    <img src={Star} alt="" className="h-3" />
                    <span className="text-xs pl-1 font-thin">
                      4.1 (250 reviews)
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-light py-2">
                    Response time:{' '}
                    <span className="text-xs text-gray-800">
                      {' '}
                      within an hour (90%)
                    </span>
                  </p>
                  <p className="text-xs text-slate-500 font-light py-2">
                    Bio:{' '}
                    <span className="text-xs text-gray-800">
                      {product?.store?.description}
                    </span>
                  </p>
                </div>
                {Auth.isAuthenticated() ? (
                  <Link
                    to={`/merchant/${product?.store?.slug}`}
                    state={{ pid: product?.store?.id }}
                  >
                    <div className="cursor-pointer p-4 flex justify-between items-center border-t">
                      <p className="text-xs text-slate-500">
                        Merchant’s Information
                      </p>
                      <p className="text-xs text-slate-500">{'>'}</p>
                    </div>
                  </Link>
                ) : (
                  <div
                    onClick={() => setShowModalAuth(true)}
                    className="cursor-pointer p-4 flex justify-between items-center border-t"
                  >
                    <p className="text-xs text-slate-500">
                      Merchant’s Information
                    </p>
                    <p className="text-xs text-slate-500">{'>'}</p>
                  </div>
                )}

                {user?.id !== product?.store?.user_id && (
                  <div className="product-variant">
                    <div className="call-merc p-4 flex cursor-pointer">
                      <img src={Call} className="w-4 h-4" alt="" />
                      <p
                        className="text-sm ml-2"
                        onClick={() =>
                          Auth.isAuthenticated()
                            ? setShowNumber(true)
                            : navigate('/signin')
                        }
                      >
                        Call Seller
                      </p>
                      <a
                        href={`tel:${product?.store?.phone || ''}`}
                        className="cursor-pointer text-xs font-bold ml-2"
                      >
                        {showNumber && (product?.store?.phone || '')}
                      </a>
                    </div>
                  </div>
                )}
                {user?.id !== product?.store?.user_id && (
                  <div
                    onClick={() =>
                      Auth.isAuthenticated()
                        ? startChatMobile()
                        : navigate('/signin')
                    }
                    className="chat-merc p-4 rounded-b-lg flex cursor-pointer"
                  >
                    <img src={Text} alt="" className="w-4 h-4" />
                    <p to={paths.MESSAGES} className="text-white text-sm ml-2">
                      Message
                    </p>
                  </div>
                )}

                {!isEmptyObject(user) && user?.id == product?.store?.user_id && (
                  <div className="my-2">
                    <Link to={`/edit/product/${product?.slug}`}>
                      <p className="text-sm text-center border bg-red-400 hover:bg-red-600 p-4 cursor-pointer text-white">
                        Edit product
                      </p>
                    </Link>
                  </div>
                )}
              </div>

              <div className="safe bg-white rounded-lg drop-shadow-md mb-4 p-2">
                <p className="text-bold text-base text-center">Safety tips</p>
                <ul className="p-4">
                  <li className="text-sm text-thin">
                    Don't pay in advance, including for delivery
                  </li>
                  <li className="text-sm text-thin">
                    Meet the seller at a safe public place
                  </li>
                  <li className="text-sm text-thin">
                    Inspect the item and ensure it's exactly what you want
                  </li>
                  <li className="text-sm text-thin">
                    On delivery, check that the item delivered is what was
                    inspected
                  </li>
                  <li className="text-sm text-thin">
                    Only pay when you're satisfied
                  </li>
                </ul>
                {user?.id && (
                  <div className="my-2 flex justify-center">
                    <button
                      onClick={() => setReportSheet(true)}
                      className="text-sm text-center border border-red-400 hover:bg-red-400 hover:text-white p-1 px-2 cursor-pointer"
                    >
                      Report Abuse
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="py-4">
              <p className="py-4 text-base font-semibold">Similar</p>

              {(similar || []).length < 1 && (
                <div>
                  <p className="py-4 text-base font-semibold text-center">
                    No similar product yet
                  </p>
                </div>
              )}

              <div className="flex overflow-x-auto gap-2">
                {(similar || []).slice(0, 5).map((product, index) => (
                  <p>
                    <Card2
                      img={product.product_media[0]?.url || Dcart}
                      title={product.name}
                      price={product.price}
                      location={product.address}
                      to={`/product/${product.slug}`}
                      key={index}
                      call={product?.store?.phone}
                      chat={() => navigate(`/product/${product.slug}`)}
                    />
                  </p>
                ))}
              </div>

              {/* recently viewed */}
              {user?.id && (
                <div className="py-4 w-auto overflow-x-auto">
                  <p className="py-4 text-base font-semibold">
                    Recently viewed
                  </p>
                  <div className="flex overflow-x-auto gap-2">
                    {(recentlyViewed || [])
                      .slice(0, 5)
                      .map((product, index) => (
                        <p>
                          <Card2
                            img={product.product.product_media[0]?.url || Dcart}
                            title={product.product.name}
                            price={product.product.price}
                            location={product.product.address}
                            to={`/product/${product.product.slug}`}
                            key={index}
                            call={product.product?.store?.phone}
                            chat={() =>
                              navigate(`/product/${product.product.slug}`)
                            }
                          />
                        </p>
                      ))}
                  </div>
                </div>
              )}
            </div>
            <BottomSheet
              isOpen={reportSheet}
              onClose={() => dispatch(setReportSheet(false))}
              snapPoints={[600, 400, 100, 0]}
            >
              <div className="mx-4">
                <p className="text-center">{product.name}</p>
                <div>
                  <form onSubmit={reportIssue}>
                    <InputSelect
                      id={`report`}
                      placeholder={`Report reason`}
                      required
                      data={[
                        {
                          id: 'This is illegal/Fraudulent',
                          label: 'This is illegal/Fraudulent',
                        },
                        { id: 'This ad is spam', label: 'This ad is spam' },
                        {
                          id: 'The price is wrong',
                          label: 'The price is wrong',
                        },
                        { id: 'It is sold', label: 'It is sold' },
                        {
                          id: 'User is unreachable',
                          label: 'User is Unreachable',
                        },
                        { id: 'Other', label: 'Other' },
                      ]}
                      value={report.reason}
                      onChange={(e) => {
                        setReport({
                          ...report,
                          reason: e.target.value,
                          product_id: product.id,
                        });
                      }}
                    />

                    <InputTextArea
                      name="description"
                      id=""
                      rows="4"
                      placeholder="Please describe your issue"
                      onChange={(e) =>
                        setReport({
                          ...report,
                          description: e.target.value,
                          product_id: product.id,
                        })
                      }
                      required
                      value={report.description}
                    />

                    <button
                      type="submit"
                      className="w-full my-2 text-sm text-center border border-red-400 hover:bg-red-400 hover:text-white p-4 rounded-md cursor-pointer"
                    >
                      Send report
                    </button>
                  </form>
                </div>
              </div>
            </BottomSheet>
          </section>
        </MobileLayout>
      </Mobile>
    </>
  );
};
export default Product;
