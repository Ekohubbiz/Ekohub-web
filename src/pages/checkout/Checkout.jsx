import React, { useEffect } from 'react';
import ImageGallery from 'react-image-gallery';

import MainLayout from '../../components/Landing/MainLayout';
import ProductImg from '../../assets/img/product.svg';
import Star from '../../assets/icons/star.svg';
import Avatar from '../../assets/img/avatar.svg';
import Ipad from '../../assets/img/ipad.png';
import Remote from '../../assets/img/remote.png';
import Dcart from '../../assets/img/dcart.jpeg';

import './styles.scss';
import { Link, useParams } from 'react-router-dom';
import { Card2 } from '../../components/shared/Cards';
import { Desktop, Mobile } from '../../layout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import { InputTextArea } from '../../components/shared/Inputs';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, setProduct } from '../../redux/reducers/productSlice';
import { getIsLoading } from '../../redux/reducers/loaderSlice';
import { fetchSingleProduct } from '../../redux/actions/products';
import { numberWithCommas } from '../../utils/helpers';

const Checkout = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProduct);
  const loading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
    return () => {
      dispatch(setProduct({}));
    };
  }, [id]);

  const productImages = (product?.product_media || []).map((image) => {
    return {
      original: image.url,
      thumbnail: image.url,
    };
  });

  return (
    <>
      <Desktop>
        <MainLayout loading={loading}>
          <div className="lg:px-4 md:px-8 px-2 mb-2">
            <div className="grid grid-cols-4 gap-4 pt-4">
              <div className="lg:col-span-4 col-span-4">
                <div className="bg-white rounded-lg drop-shadow-md p-4">
                  <div>
                    <span className="cursor-pointer px-2 bg-white rounded-full drop-shadow-lg">
                      {'<'}
                    </span>
                    <span className="px-4">Confirmation</span>
                  </div>
                  <div className="grid grid-cols-5 gap-4 py-4">
                    <div className="col-span-3">
                      {/* <img
                        src={ProductImg}
                        className="object-contain w-full rounded-lg"
                        alt="shop online at ekohub"
                      /> */}
                      <div className="">
                        <ImageGallery
                          items={productImages || []}
                          lazyLoad
                          thumbnailPosition="right"
                          showPlayButton={false}
                          onErrorImageURL={Dcart}
                        />
                      </div>

                      <div className="py-4">
                        <div className="flex">
                          <img src={Star} alt="shop online at ekohub" className="h-3" />
                          <span className="reviewtext pl-1">
                            5.0 (2 reviews)
                          </span>
                        </div>
                        <p className="text-xl">{product?.name}</p>
                        <div>
                          <span className="text-xs">{product?.address}</span>{' '}
                          {/* <span className="text-xs">SQM: 50</span> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="bg-gray-100 rounded-2xl p-4">
                        <p className="py-2">Add description</p>
                        <InputTextArea
                          name="description"
                          id=""
                          rows="9"
                          placeholder="Enter description"
                        />
                      </div>
                      <div className="bg-white rounded-lg drop-shadow-md my-4 bg-gray-100">
                        <div className="p-4">
                          <p className="text-sm text-slate-500 font-semibold py-2">
                            Total amount due
                          </p>
                          <div className="flex justify-between">
                            <p className="text-sm text-slate-500">
                              {numberWithCommas(product?.price || '')} x 1 unit
                            </p>
                            <p className="text-base text-slate-500 font-semibold">
                              ₦ {numberWithCommas(product?.price || '')}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <p className="text-sm text-slate-500 font-semibold">
                              Service fee
                            </p>
                            <p className="text-base text-slate-500 font-semibold">
                              ₦ 1,000
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <p className="text-sm text-slate-500 font-semibold">
                              Total
                            </p>
                            <p className="text-base text-slate-500 font-semibold">
                              ₦{' '}
                              {numberWithCommas(
                                parseInt(product?.price) + 1000 || '',
                              )}
                            </p>
                          </div>
                          <hr className="border-gray-500 my-4" />
                          <div className="flex justify-between py-1">
                            <p className="text-xs text-slate-500">
                              Payment method
                            </p>
                            <p className="text-xs text-red-500">
                              Add card {'>'}
                            </p>
                          </div>
                        </div>
                      </div>
                      <Link to={`#`}>
                        <p className="bg-red-700 text-white text-center rounded-2xl drop-shadow-md p-4 w-full">
                          Confirm and pay
                        </p>
                      </Link>
                      <div className="text-center py-8">
                        <span className="text-xs">
                          By clicking confirm and pay, I agree to the{' '}
                          <Link to="#" className="text-red-400">
                            terms of services
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="py-4">
                    <p className="py-4 text-base font-semibold">Reviews</p>
                    <div className="flex justify-between">
                      <div className="flex py-2">
                        <img src={Star} alt="shop online at ekohub" className="h-3" />
                        <span className="text-xs pl-1 font-thin">
                          5.0 ({(product.product_reviews || []).length} reviews)
                        </span>
                      </div>
                      <Link to="#">
                        <p className="text-sm text-red-500">View all</p>
                      </Link>
                    </div>
                    {/* based ads */}

                    {(product.product_reviews || []).length < 1 && (
                      <div>
                        <p className="py-4 text-base font-semibold text-center">
                          No reviews yet
                        </p>
                      </div>
                    )}
                    <div className="flex flex-nowrap overflow-x-auto">
                      {(product.product_reviews || [])
                        .slice(0, 5)
                        .map((review) => (
                          <div className="py-4 pr-4">
                            <div className="flex py-2 items-center">
                              <img
                                src={review?.user?.profile_pic_url || Avatar}
                                alt="shop online at ekohub"
                                className="h-10 pr-4"
                              />
                              <p className="text-base font-semibold">
                                {review?.user?.first_name}
                              </p>
                            </div>
                            <p className="text-xs text-slate-500">
                              {review?.comment}
                            </p>
                          </div>
                        ))}
                    </div>

                    {/* similar */}
                    <div className="py-4">
                      <p className="py-4 text-base font-semibold">Similar</p>
                      <div className="flex flex-nowrap">
                        <Card2
                          img={Remote}
                          title="Smart TV 32”"
                          price={3000}
                          location="City mall"
                          to="/product/ipad"
                        />
                        <Card2
                          img={Remote}
                          title="Smart TV 32”"
                          price={3000}
                          location="City mall"
                          to="/product/ipad"
                        />
                        <Card2
                          img={Ipad}
                          title="ipad pro 2015”"
                          price={5200}
                          location="City mall"
                          like
                          to="/product/ipad"
                        />
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
        <MobileLayout>
          <p className="text-center"> CHECKOUT PAGE</p>
        </MobileLayout>
      </Mobile>
    </>
  );
};
export default Checkout;
