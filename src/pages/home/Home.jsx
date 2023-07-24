import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import caro1 from '../../assets/img/caro1.png';
import caro2 from '../../assets/img/caro2.png';
import caro3 from '../../assets/img/caro3.png';
import caro4 from '../../assets/img/caro4.png';

import Dcart from '../../assets/img/dcart.jpeg';
import Car from '../../assets/img/car.png';
import House from '../../assets/img/house.png';
import './styles.scss';
import {
  Card1,
  Card3,
  Card3Mobile,
  Card4,
  CardDiscover,
  Card1Mobile,
} from '../../components/shared/Cards';
import MainLayout from '../../components/Landing/MainLayout';
import { Desktop, Mobile } from '../../layout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import { paths } from '../../constants';
import { Input2 } from '../../components/shared/Inputs';
import Backdrop from '../../components/shared/Backdrop/Backdrop';
import SideDrawer from '../../components/mobile/SideDrawer/SideDrawer';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/reducers/categorySlice';
import {
  getDiscoverProducts,
  getProducts,
  getRecentlyViewed,
} from '../../redux/reducers/productSlice';
import {
  fetchAllProducts,
  fetchDiscoverProducts,
  fetchRecentlyViewedProduct,
} from '../../redux/actions/products';
import {
  getIsLoading,
  getModal,
  setModalAuth,
  setSearchString,
} from '../../redux/reducers/loaderSlice';
import { truncate } from '../../utils/helpers';
import { getCurrentUser, getUserStore } from '../../redux/reducers/authSlice';
import { fetchAllStores } from '../../redux/actions/stores';
import { getStores } from '../../redux/reducers/storeSlice';
import Auth from '../../middleware/storage';
import SigninComponent from '../../components/signIn/SigninComponent';
import { Dialog } from '@material-tailwind/react';
import SkeletonItem from '../../components/SkeletonItem/SkeletonItem';
import Api from '../../api';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getCurrentUser);
  const userStore = useSelector(getUserStore);
  const categories = useSelector(getCategories);
  const products = useSelector(getProducts);
  const recentlyViewed = useSelector(getRecentlyViewed);
  const discoveries = useSelector(getDiscoverProducts);
  const stores = useSelector(getStores);
  const loading = useSelector(getIsLoading);
  const modal = useSelector(getModal);
  const [active, setActive] = useState('');
  const [filter, setFilter] = useState(null);
  const [searchString, setSearchStrings] = useState('');
  const [isShown, setIsShown] = useState(false);
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [subcategory, setSubcategory] = useState([]);
  const [catId, setCatId] = useState(null);
  const [populars, setPopulars] = useState([]);

  const searchRef = useRef();
  let backdropComponent;

  useEffect(() => {
    dispatch(fetchAllProducts({ paginate: 20 }));
    dispatch(fetchDiscoverProducts());
    dispatch(fetchAllStores());
    fetchPopulars();
  }, []);

  useEffect(() => {
    user?.id && dispatch(fetchRecentlyViewedProduct());
  }, [user]);

  const handleSearch = (e) => {
    setSearchStrings(e.target.value);
  };

  const handleSideDrawer = () => {
    setSideDrawerOpen((prev) => !prev);
  };

  if (sideDrawerOpen) {
    backdropComponent = <Backdrop click={() => setSideDrawerOpen(false)} />;
  }

  const fetchPopulars = async () => {
    const resProperty = await Api.products.all({
      category_id: 5,
      paginate: 10,
    });
    const resVehicles = await Api.products.all({
      category_id: 4,
      paginate: 10,
    });
    const resFashion = await Api.products.all({
      category_id: 7,
      paginate: 10,
    });
    const resElectronic = await Api.products.all({
      category_id: 13,
      paginate: 10,
    });
    const resMobilePhone = await Api.products.all({
      category_id: 6,
      paginate: 10,
    });

    Promise.all([
      resProperty,
      resVehicles,
      resFashion,
      resElectronic,
      resMobilePhone,
    ]).then((values) => {
      setPopulars(values);
    });
  };

  console.log(populars);
  return (
    <>
      <Desktop>
        <MainLayout loading={loading}>
          <div className="mb-2">
            <div className="grid grid-cols-5 gap-2 pt-4">
              <div className="hidden lg:block col-span-1">
                <div className="relative bg-main-card rounded-lg drop-shadow-sm categories sticky top-4 overflow-y-hidden">
                  {(categories || []).map((category, i) => (
                    <Card4
                      key={i}
                      title={category.name}
                      ads={category.product_count}
                      img={category.icon_url}
                      to={`/category-product/${category.id}`}
                      state={{ categoryName: category.name }}
                      onMouseEnter={() => {
                        setCatId({
                          id: category.id,
                          name: category.name,
                        });
                        setSubcategory(category.sub_categories);
                        setIsShown(true);
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="relative lg:col-span-4 md:col-span-5 sticky top-0 overflow-x-hidden">
                {/* {isShown && subcategory.length > 0 && (
                  <>
                    <div className="absolute top-0 left-0 bg-main-card rounded-lg drop-shadow-sm p-4 w-64 z-50">
                      {(subcategory || []).map((category, index) => (
                        <Card4
                          key={index}
                          title={category.name}
                          ads={category.product_count}
                          img={category.icon_url}
                          to={`/category-product/${catId.id}`}
                          state={{
                            categoryName: catId.name,
                            subCategoryName: category.name,
                            subCategoryId: category.id,
                          }}
                          onMouseEnter={() => {
                            setIsShown(true);
                          }}
                          onMouseLeave={() => {
                            setIsShown(false);
                          }}
                        />
                      ))}
                    </div>
                  </>
                )} */}
                <div className="relative rounded-lg drop-shadow-md">
                  <div className="p-5 bg-main-card rounded-lg drop-shadow-sm">
                      <Carousel autoPlay swipeable showThumbs={false}>
                        <div>
                          <img src={caro1} />
                        </div>
                        <div>
                          <img src={caro2} />
                        </div>
                        <div>
                          <img src={caro3} />
                        </div>
                        <div>
                          <img src={caro4} />
                        </div>
                      </Carousel>
                    {/* <div>
                      <div className="flex justify-between">
                        <p className="font-bold text-lg text-gray-700">
                          Popular 🔥
                        </p>
                        <Link to={`/search-product`}>
                          <p className="font-bold text-md text-gray-400 hover:text-red-600">
                            View all
                          </p>
                        </Link>
                      </div>
                      <div id="content" className="flex py-4 overflow-x-hidden">
                        {(categories || []).map((category, i) => (
                          <p
                            key={i}
                            onClick={() => {
                              setActive(category.name);
                              dispatch(
                                fetchAllProducts({
                                  category_id: category.id,
                                  paginate: 20,
                                }),
                              );
                              setFilter({ category_id: category.id });
                            }}
                            style={{
                              backgroundColor:
                                active === category.name
                                  ? '#F0B745'
                                  : 'transparent',
                            }}
                            id="picturePost"
                            className="cursor-pointer rounded-xl mr-4 py-2 px-4 text-xs text-gray-700 min-w-xs no-wrap"
                          >
                            {truncate(category.name, 15)}
                          </p>
                        ))}
                      </div>

                      

                      <div className="flex flex-wrap justify-center sticky top-0 overflow-y-auto">
                        {(products || []).slice(0, 10).map((product, index) => (
                          <Card1
                            img={product.product_media[0]?.url || Dcart}
                            title={product.name}
                            price={product.price}
                            location={product.address}
                            to={`/product/${product.slug}`}
                            key={index}
                            like={product?.favourite_product.length > 0}
                          />
                        ))}
                      </div>
                    </div> */}
                    <div>
                      {populars.length < 1 && (
                        <div className="flex overflow-x-hidden">
                          <SkeletonItem />
                          <SkeletonItem />
                          <SkeletonItem />
                          <SkeletonItem />
                          <SkeletonItem />
                          <SkeletonItem />
                        </div>
                      )}
                      {populars.length > 0 && (
                        <>
                          <div>
                            {populars[0]?.data?.data?.products.length > 0 && (
                              <div className="flex justify-between my-4">
                                <p className="font-bold text-lg text-gray-700">
                                  Popular in{' '}
                                  {populars[0]?.data?.data?.products[0]
                                    ?.category?.name || ''}
                                </p>
                                <Link
                                  to={`/category-product/${populars[0]?.data?.data?.products[0]?.category.id}`}
                                >
                                  <p className="font-bold text-md text-gray-400 hover:text-red-600">
                                    View all
                                  </p>
                                </Link>
                              </div>
                            )}
                            <div className="flex overflow-x-hidden">
                              {(populars[0]?.data?.data?.products || []).map(
                                (product, index) => {
                                  return (
                                    <Card1
                                      img={
                                        product.product_media[0]?.url || Dcart
                                      }
                                      title={product.name}
                                      price={product.price}
                                      location={product.address}
                                      to={`/product/${product.slug}`}
                                      key={index}
                                      like={
                                        product?.favourite_product.length > 0
                                      }
                                    />
                                  );
                                },
                              )}
                            </div>
                          </div>
                          <div>
                            {populars[1]?.data?.data?.products.length > 0 && (
                              <div className="flex justify-between my-4">
                                <p className="font-bold text-lg text-gray-700">
                                  Popular in{' '}
                                  {populars[1]?.data?.data?.products[0]
                                    ?.category?.name || ''}
                                </p>
                                <Link
                                  to={`/category-product/${populars[1]?.data?.data?.products[0]?.category.id}`}
                                >
                                  <p className="font-bold text-md text-gray-400 hover:text-red-600">
                                    View all
                                  </p>
                                </Link>
                              </div>
                            )}
                            <div className="flex overflow-x-hidden">
                              {(populars[1]?.data?.data?.products || []).map(
                                (product, index) => {
                                  return (
                                    <Card1
                                      img={
                                        product.product_media[0]?.url || Dcart
                                      }
                                      title={product.name}
                                      price={product.price}
                                      location={product.address}
                                      to={`/product/${product.slug}`}
                                      key={index}
                                      like={
                                        product?.favourite_product.length > 0
                                      }
                                    />
                                  );
                                },
                              )}
                            </div>
                          </div>
                          <div>
                            {populars[2]?.data?.data?.products.length > 0 && (
                              <div className="flex justify-between my-4">
                                <p className="font-bold text-lg text-gray-700">
                                  Popular in{' '}
                                  {populars[2]?.data?.data?.products[0]
                                    ?.category?.name || ''}
                                </p>
                                <Link
                                  to={`/category-product/${populars[2]?.data?.data?.products[0]?.category.id}`}
                                >
                                  <p className="font-bold text-md text-gray-400 hover:text-red-600">
                                    View all
                                  </p>
                                </Link>
                              </div>
                            )}
                            <div className="flex overflow-x-hidden">
                              {(populars[2]?.data?.data?.products || []).map(
                                (product, index) => {
                                  return (
                                    <Card1
                                      img={
                                        product.product_media[0]?.url || Dcart
                                      }
                                      title={product.name}
                                      price={product.price}
                                      location={product.address}
                                      to={`/product/${product.slug}`}
                                      key={index}
                                      like={
                                        product?.favourite_product.length > 0
                                      }
                                    />
                                  );
                                },
                              )}
                            </div>
                          </div>
                          <div>
                            {populars[3]?.data?.data?.products.length > 0 && (
                              <div className="flex justify-between my-4">
                                <p className="font-bold text-lg text-gray-700">
                                  Popular in{' '}
                                  {populars[3]?.data?.data?.products[0]
                                    ?.category?.name || ''}
                                </p>
                                <Link
                                  to={`/category-product/${populars[3]?.data?.data?.products[0]?.category.id}`}
                                >
                                  <p className="font-bold text-md text-gray-400 hover:text-red-600">
                                    View all
                                  </p>
                                </Link>
                              </div>
                            )}
                            <div className="flex overflow-x-hiidden">
                              {(populars[3]?.data?.data?.products || []).map(
                                (product, index) => {
                                  return (
                                    <Card1
                                      img={
                                        product.product_media[0]?.url || Dcart
                                      }
                                      title={product.name}
                                      price={product.price}
                                      location={product.address}
                                      to={`/product/${product.slug}`}
                                      key={index}
                                      like={
                                        product?.favourite_product.length > 0
                                      }
                                    />
                                  );
                                },
                              )}
                            </div>
                          </div>
                          <div>
                            {populars[4]?.data?.data?.products.length > 0 && (
                              <div className="flex justify-between my-4">
                                <p className="font-bold text-lg text-gray-700">
                                  Popular in{' '}
                                  {populars[4]?.data?.data?.products[0]
                                    ?.category?.name || ''}
                                </p>
                                <Link
                                  to={`/category-product/${populars[4]?.data?.data?.products[0]?.category.id}`}
                                >
                                  <p className="font-bold text-md text-gray-400 hover:text-red-600">
                                    View all
                                  </p>
                                </Link>
                              </div>
                            )}
                            <div className="flex overflow-x-hidden">
                              {(populars[4]?.data?.data?.products || []).map(
                                (product, index) => {
                                  return (
                                    <Card1
                                      img={
                                        product.product_media[0]?.url || Dcart
                                      }
                                      title={product.name}
                                      price={product.price}
                                      location={product.address}
                                      to={`/product/${product.slug}`}
                                      key={index}
                                      like={
                                        product?.favourite_product.length > 0
                                      }
                                    />
                                  );
                                },
                              )}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex justify-center py-8">
                      {(categories || [])
                        .filter((category) => category.name == 'Vehicles')
                        .map((id, i) => (
                          <Card3
                            to={`/category-product/${id.id}`}
                            img={Car}
                            title="Exclusive deals in"
                            item="Cars"
                            key={i}
                          />
                        ))}
                      {(categories || [])
                        .filter((category) => category.name == 'Property')
                        .map((id, i) => (
                          <Card3
                            to={`/category-product/${id.id}`}
                            img={House}
                            title="See best deals in"
                            item="Property"
                            key={i}
                          />
                        ))}
                    </div>
                    {user?.id && recentlyViewed.length > 0 && (
                      <div>
                        <div className="flex justify-between">
                          <p className="font-bold text-lg text-gray-700">
                            Recently viewed 🔥
                          </p>
                          <Link to={`/search-product`}>
                            <p className="font-bold text-md text-gray-400 hover:text-red-600">
                              View all
                            </p>
                          </Link>
                        </div>
                        <div className="flex flex-wrap justify-center sticky top-0 overflow-y-auto">
                          {(recentlyViewed || [])
                            .slice(0, 10)
                            .map((product, index) => (
                              <Card1
                                img={
                                  product.product.product_media[0]?.url || Dcart
                                }
                                title={product.product.name}
                                price={product.product.price}
                                location={product.product.address}
                                to={`/product/${product.product.slug}`}
                                key={index}
                                like={
                                  product.product?.favourite_product.length > 0
                                }
                              />
                            ))}
                        </div>
                      </div>
                    )}
                    <div>
                      <div className="flex justify-between my-4">
                        <p className="font-bold text-lg text-gray-700">
                          Merchants you will love
                        </p>
                        <Link to={paths.MERCHANTS}>
                          <p className="font-bold text-md text-gray-400 hover:text-red-600">
                            View all
                          </p>
                        </Link>
                      </div>
                      <div className="flex flex-nowrap overflow-x-hidden gap-2">
                        {(stores || []).slice(0, 8).map((store, index) =>
                          Auth.isAuthenticated() ? (
                            <Link
                              to={
                                store.id == userStore?.id
                                  ? `/profile`
                                  : `/merchant/${store?.slug}`
                              }
                              state={{ pid: store?.id, nav: 'product' }}
                              key={index}
                            >
                              <img
                                src={store?.cover_image_url || House}
                                alt=""
                                className="w-28 h-28 rounded-full"
                              />
                            </Link>
                          ) : (
                            <div
                              onClick={() => dispatch(setModalAuth(true))}
                              className="cursor-pointer"
                              key={index}
                            >
                              <img
                                src={store?.cover_image_url || House}
                                alt=""
                                className="w-28 h-28 rounded-full"
                              />
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="lg:flex lg:justify-between my-4">
                        <p className="font-bold text-lg text-gray-700">
                          Discover
                        </p>
                        <Link to={paths.DISCOVER}>
                          <p className="font-bold text-md text-gray-400 hover:text-red-600">
                            View all
                          </p>
                        </Link>
                      </div>
                      <div className="flex">
                        {(discoveries || [])
                          .slice(0, 10)
                          .map((discover, index) => (
                            <CardDiscover
                              key={index}
                              img={discover.cover_image_url || Dcart}
                              title={discover.title}
                              info={truncate(discover.description, 20)}
                              to={`/discover-product/${discover.id}`}
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      </Desktop>
      <Mobile>
        <MobileLayout sideDrawer={handleSideDrawer} searchDisplay={true}>
          {/* sidebar */}
          <div>
            <SideDrawer
              clickCatIcon={() => setSideDrawerOpen(false)}
              show={sideDrawerOpen}
              data={categories}
            />
            {backdropComponent}
          </div>

          <div className="overflow-y-hidden pt-28 pb-8 px-2">
            <div className="my-4 mt-14">
              <Carousel autoPlay swipeable showThumbs={false}>
                <img src={caro1} />
                <img src={caro2} />
                <img src={caro3} />
                <img src={caro4} />
              </Carousel>
            </div>
            <div className="p-2">
              {/* <div className="flex justify-between">
                <p className="font-bold text-lg text-gray-700">Popular 🔥</p>
                <Link
                  to={paths.SEARCH_PRODUCT}
                  className="text-base text-gray-400 hover:text-red-600"
                >
                  View all
                </Link>
              </div> */}
              {/* <div id="contentMobile" className="py-2 overflow-x-hidden">
                {(categories || []).map((category, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      setActive(category.name);
                      dispatch(
                        fetchAllProducts({
                          category_id: category.id,
                          paginate: 20,
                        }),
                      );
                      setFilter({ category_id: category.id });
                    }}
                    style={{
                      backgroundColor:
                        active === category.name ? '#F0B745' : 'transparent',
                    }}
                    id="picturePostMobile"
                    className="cursor-pointer rounded-xl py-1 px-4 text-xs text-center text-gray-700"
                  >
                    {truncate(category.name, 15)}
                  </p>
                ))}
              </div> */}

              {/* <div className="flex py-4 overflow-x-hidden">
                {(products || []).map((product, index) => (
                  <Card1Mobile
                    img={product.product_media[0]?.url || Dcart}
                    title={product.name}
                    price={product.price}
                    location={product.address}
                    to={`/product/${product.slug}`}
                    key={index}
                  />
                ))}
              </div> */}
            </div>

            {populars.length > 0 && (
              <div>
                <div>
                  {populars[0]?.data?.data?.products.length > 0 && (
                    <div className="flex justify-between">
                      <p className="font-bold text-base text-gray-700">
                        Popular in{' '}
                        {populars[0]?.data?.data?.products[0]?.category?.name ||
                          ''}
                      </p>
                      <Link
                        to={`/category-product/${populars[0]?.data?.data?.products[0]?.category.id}`}
                        className="text-base text-gray-400 hover:text-red-600"
                      >
                        <p>View all</p>
                      </Link>
                    </div>
                  )}
                  <div className="flex py-4 overflow-x-hidden">
                    {(populars[0]?.data?.data?.products || []).map(
                      (product, index) => {
                        return (
                          <Card1Mobile
                            img={product.product_media[0]?.url || Dcart}
                            title={product.name}
                            price={product.price}
                            location={product.address}
                            to={`/product/${product.slug}`}
                            key={index}
                          />
                        );
                      },
                    )}
                  </div>
                </div>
                <div>
                  {populars[1]?.data?.data?.products.length > 0 && (
                    <div className="flex justify-between">
                      <p className="font-bold text-base text-gray-700">
                        Popular in{' '}
                        {populars[1]?.data?.data?.products[0]?.category?.name ||
                          ''}
                      </p>
                      <Link
                        to={`/category-product/${populars[1]?.data?.data?.products[0]?.category.id}`}
                        className="text-base text-gray-400 hover:text-red-600"
                      >
                        <p>View all</p>
                      </Link>
                    </div>
                  )}
                  <div className="flex py-4 overflow-x-hidden">
                    {(populars[1]?.data?.data?.products || []).map(
                      (product, index) => {
                        return (
                          <Card1Mobile
                            img={product.product_media[0]?.url || Dcart}
                            title={product.name}
                            price={product.price}
                            location={product.address}
                            to={`/product/${product.slug}`}
                            key={index}
                          />
                        );
                      },
                    )}
                  </div>
                </div>
                <div>
                  {populars[2]?.data?.data?.products.length > 0 && (
                    <div className="flex justify-between">
                      <p className="font-bold text-base text-gray-700">
                        Popular in{' '}
                        {populars[2]?.data?.data?.products[0]?.category?.name ||
                          ''}
                      </p>
                      <Link
                        to={`/category-product/${populars[2]?.data?.data?.products[0]?.category.id}`}
                        className="text-base text-gray-400 hover:text-red-600"
                      >
                        <p>View all</p>
                      </Link>
                    </div>
                  )}
                  <div className="flex py-4 overflow-x-hidden">
                    {(populars[2]?.data?.data?.products || []).map(
                      (product, index) => {
                        return (
                          <Card1Mobile
                            img={product.product_media[0]?.url || Dcart}
                            title={product.name}
                            price={product.price}
                            location={product.address}
                            to={`/product/${product.slug}`}
                            key={index}
                          />
                        );
                      },
                    )}
                  </div>
                </div>
                <div>
                  {populars[3]?.data?.data?.products.length > 0 && (
                    <div className="flex justify-between">
                      <p className="font-bold text-base text-gray-700">
                        Popular in{' '}
                        {populars[3]?.data?.data?.products[0]?.category?.name ||
                          ''}
                      </p>
                      <Link
                        to={`/category-product/${populars[3]?.data?.data?.products[0]?.category.id}`}
                        className="text-base text-gray-400 hover:text-red-600"
                      >
                        <p>View all</p>
                      </Link>
                    </div>
                  )}
                  <div className="flex py-4 overflow-x-hidden">
                    {(populars[3]?.data?.data?.products || []).map(
                      (product, index) => {
                        return (
                          <Card1Mobile
                            img={product.product_media[0]?.url || Dcart}
                            title={product.name}
                            price={product.price}
                            location={product.address}
                            to={`/product/${product.slug}`}
                            key={index}
                          />
                        );
                      },
                    )}
                  </div>
                </div>
                <div>
                  {populars[4]?.data?.data?.products.length > 0 && (
                    <div className="flex justify-between">
                      <p className="font-bold text-base text-gray-700">
                        Popular in{' '}
                        {populars[4]?.data?.data?.products[0]?.category?.name ||
                          ''}
                      </p>
                      <Link
                        to={`/category-product/${populars[4]?.data?.data?.products[0]?.category.id}`}
                        className="text-base text-gray-400 hover:text-red-600"
                      >
                        <p>View all</p>
                      </Link>
                    </div>
                  )}
                  <div className="flex py-4 overflow-x-hidden">
                    {(populars[4]?.data?.data?.products || []).map(
                      (product, index) => {
                        return (
                          <Card1Mobile
                            img={product.product_media[0]?.url || Dcart}
                            title={product.name}
                            price={product.price}
                            location={product.address}
                            to={`/product/${product.slug}`}
                            key={index}
                          />
                        );
                      },
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="flex overflow-x-hidden my-4 gap-2 h-full">
              {(categories || [])
                .filter((category) => category.name == 'Vehicles')
                .map((id, i) => (
                  <Link
                    to={`/category-product/${id.id}`}
                    className="min-w-max"
                    key={i}
                  >
                    <Card3Mobile
                      img={Car}
                      title="Exclusive deals in"
                      item="Cars"
                    />
                  </Link>
                ))}
              {(categories || [])
                .filter((category) => category.name == 'Property')
                .map((id, i) => (
                  <Link
                    to={`/category-product/${id.id}`}
                    className="min-w-max"
                    key={i}
                  >
                    <Card3Mobile
                      img={House}
                      title="See best deals in"
                      item="Property"
                    />
                  </Link>
                ))}
            </div>

            {Auth.isAuthenticated && recentlyViewed.length > 0 && (
              <div className="p-2">
                <div className="flex justify-between">
                  <p className="font-bold text-lg text-gray-700">
                    Recently viewed{' '}
                  </p>
                </div>

                <div className="flex py-4 overflow-x-hidden">
                  {(recentlyViewed || []).map((product, index) => (
                    <Card1Mobile
                      img={product.product.product_media[0]?.url || Dcart}
                      title={product.product.name}
                      price={product.product.price}
                      location={product.product.address}
                      to={`/product/${product.product.slug}`}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="p-2">
              <div className="flex justify-between my-4">
                <p className="font-bold text-base text-gray-700">
                  Merchants you will love
                </p>
                <Link
                  to={paths.MERCHANTS}
                  className="text-base text-gray-400 hover:text-red-600"
                >
                  View all
                </Link>
              </div>
              <div className="flex gap-2 overflow-x-hidden">
                {(stores || []).slice(0, 6).map((store, index) => (
                  <Link
                    to={
                      store.id == userStore?.id
                        ? `/profile`
                        : `/merchant/${store?.slug}`
                    }
                    state={{ pid: store?.id, nav: 'product' }}
                    key={index}
                  >
                    <img
                      src={store?.cover_image_url || House}
                      alt=""
                      className="w-16 h-16 rounded-full"
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-2">
              <div className="flex justify-between">
                <p className="font-bold text-base text-gray-700">Discover 🔥</p>
                <Link to={paths.DISCOVER}>
                  <p className="text-base text-gray-400 hover:text-red-600">
                    View all
                  </p>
                </Link>
              </div>

              <div className="flex overflow-x-hidden">
                {(discoveries || []).slice(0, 5).map((discover, index) => (
                  <p key={index}>
                    <CardDiscover
                      img={discover.cover_image_url || Dcart}
                      title={discover.title}
                      to={`/discover-product/${discover.id}`}
                      info={truncate(discover.description, 20)}
                    />
                  </p>
                ))}
              </div>
            </div>
          </div>
        </MobileLayout>
      </Mobile>
      <Dialog
        size="md"
        open={modal}
        handler={() => dispatch(setModalAuth(false))}
      >
        <SigninComponent onSign={() => dispatch(setModalAuth(false))} />
      </Dialog>
    </>
  );
};
export default Home;
