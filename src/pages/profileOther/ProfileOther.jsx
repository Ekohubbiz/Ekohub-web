import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Avatar from '../../assets/img/avatar.png';
import Logo from '../../assets/img/Logo2.png';

import Dcart from '../../assets/img/dcart.jpeg';
import {
  Card1,
  Card2,
  Card2M,
  CardDefault2,
} from '../../components/shared/Cards';
import { Button1, Button2 } from '../../components/shared/Buttons';
import MainLayout from '../../components/Landing/MainLayout';
import { colors } from '../../themes';
import { paths } from '../../constants';
import { Desktop, Mobile } from '../../layout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import { useDispatch, useSelector } from 'react-redux';
import {
  createStoreProduct,
  fetchAllOwnerStoreProducts,
  fetchMerchantProducts,
  fetchStoreProducts,
} from '../../redux/actions/products';
import {
  getMerchantProduct,
  getStoreOwnerProducts,
  setMerchantProducts,
  setOwnerStoreProducts,
} from '../../redux/reducers/productSlice';
import { getIsLoading } from '../../redux/reducers/loaderSlice';
import {
  getSingleStores,
  setSingleStores,
} from '../../redux/reducers/storeSlice';
import { viewStore } from '../../redux/actions/stores';
import { Dialog } from '@material-tailwind/react';
import Api from '../../api';
import { showToast } from '../../utils/helpers';
import BottomSheet from '../../components/BottomSheet/BottomSheet';

const ProfileOther = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const stores = useSelector(getSingleStores);
  const [active, setActive] = useState('all');
  const merchantProduct = useSelector(getMerchantProduct);
  const loading = useSelector(getIsLoading);
  const [blockStoreModal, setBlockStoreModal] = useState(false);

  useEffect(() => {
    dispatch(viewStore(id));
    dispatch(fetchMerchantProducts({ store_id: state?.pid }));

    return () => {
      dispatch(setMerchantProducts([]));
      dispatch(setSingleStores({}));
    };
  }, [id]);

  const blockHandler = async () => {
    try {
      const res = await Api.stores.blockStore({ store_id: stores.id });
      if (res.data.hasError) {
        setBlockStoreModal(false);
        showToast(res.data.errors.message, 'error');
      } else {
        setBlockStoreModal(false);
        showToast(stores.name + ' has been blocked', 'success');
        navigate(paths.MERCHANTS);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Desktop>
        <MainLayout loading={loading}>
          <div className="bg-white">
            <div className="lg:px-12 lg:py-10 p-4">
              <div className="grid grid-cols-6 gap-8 pt-4">
                <div className="relative col-span-2 rounded-lg">
                  {/* profile card left */}
                  <div className="bg-white rounded-3xl drop-shadow-md p-4 mb-4">
                    <div className="flex flex-nowrap items-center">
                      <img
                        src={stores?.cover_image_url || Avatar}
                        alt=""
                        className="w-14 h-14 rounded-full mr-4"
                      />
                      <p className="text-base font-bold">{stores?.name}</p>
                    </div>

                    <div className="mt-4">
                      <p className="text-2xl text-slate-700 pb-2">
                        {stores?.name}
                      </p>
                      <p className="text-xs text-slate-700 pb-2">
                        {stores?.address}
                      </p>
                      <p className="text-xs text-slate-700 pb-2">
                        {stores?.phone}
                      </p>
                    </div>
                    <div className="my-4">
                      <button
                        onClick={() => setBlockStoreModal(true)}
                        className="bg-red-500 rounded-lg px-2 py-1 text-white text-sm"
                      >
                        block
                      </button>
                    </div>
                  </div>
                </div>

                <div className="relative col-span-4 lg:mb-44">
                  <div
                    className="bg-white rounded-3xl drop-shadow-md p-4 mb-4"
                    style={{ backgroundColor: 'rgb(249,249,251,0.3)' }}
                  >
                    <div className="flex">
                      <p
                        className="text-sm p-3 mx-2 rounded-xl cursor-pointer"
                        style={{
                          color: active === 'all' ? '#fff' : '#374B58',
                          backgroundColor:
                            active === 'all' ? '#EB3352' : 'transparent',
                        }}
                        onClick={() => setActive('all')}
                      >
                        All items
                      </p>
                    </div>
                    <div className="py-4">
                      {active === 'all' && (
                        <div className="flex gap-1 flex-wrap justify-center">
                          {(merchantProduct || []).map((product, index) => (
                            <Card2
                              img={product.product_media[0]?.url || Dcart}
                              title={product.name}
                              price={product.price}
                              location={product.address}
                              to={`/product/${product.slug}`}
                              key={index}
                              call={product?.store?.phone}
                            />
                          ))}
                          {merchantProduct.length < 1 && (
                            <div className="my-8">
                              <p className="text-lg text-bold text-center">
                                Currently No Product in this store
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Dialog
            size="sm"
            open={blockStoreModal}
            handler={() => setBlockStoreModal(false)}
          >
            <div className="m-8">
              <p className="text-center text-lg font-bold">
                Block {stores?.name} ?
              </p>
              <p className="text-center text-sm">
                Adverts from this store will no longer appear in your feeds
              </p>
              <p className="text-center text-sm">Do you wish to continue?</p>

              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setBlockStoreModal(false)}
                  className="bg-gray-400 rounded-lg p-2 text-white text-sm mx-4"
                >
                  No
                </button>
                <button
                  onClick={blockHandler}
                  className="bg-red-400 rounded-lg p-2 text-white text-sm mx-4"
                >
                  Yes
                </button>
              </div>
            </div>
          </Dialog>
        </MainLayout>
      </Desktop>
      <Mobile>
        <MobileLayout nav={false}>
          <div className="">
            <div className="sticky top-0 z-50">
              <div className="flex justify-center">
                <img src={Logo} className="absolute top-4  h-6" alt="" />
              </div>
              <div className="pimg bg-red-500 w-full rounded-b-3xl flex flex-col justify-center items-start p-4 py-4">
                <div className="flex justify-between items-center my-2 pt-8 w-full">
                  <div className="flex items-center">
                    <img
                      src={stores?.cover_image_url || Avatar}
                      alt=""
                      className="w-16 h-16 rounded-full mr-2"
                    />
                    <p className="text-md font-bold text-white">
                      {stores?.name}
                    </p>
                  </div>
                  <button
                    onClick={() => setBlockStoreModal(true)}
                    className="bg-red-500 rounded-lg px-2 py-1 text-white text-xs"
                  >
                    block
                  </button>
                </div>
                <p className="text-md text-white">{stores?.name}</p>
                <p className="text-sm text-white">{stores?.address}</p>
                <p className="text-sm text-white">{stores?.phone}</p>
              </div>
              <div className="flex py-2 w-full base-color">
                <p
                  className="text-sm p-3 mx-2 rounded-xl cursor-pointer"
                  style={{
                    color: active === 'all' ? '#fff' : '#374B58',
                    backgroundColor:
                      active === 'all' ? '#EB3352' : 'transparent',
                  }}
                  onClick={() => setActive('all')}
                >
                  All items
                </p>
              </div>
            </div>
            <div className="overflow-y-auto justify-center px-4 pb-8">
              {(merchantProduct || []).map((product, index) => (
                <Card2M
                  img={product.product_media[0]?.url || Dcart}
                  title={product.name}
                  price={product.price}
                  location={product.address}
                  to={`/product/${product.slug}`}
                  key={index}
                  call={product?.store?.phone}
                />
              ))}
              {merchantProduct.length < 1 && (
                <div className="my-8">
                  <p className="text-lg text-bold text-center">
                    Currently No Product in this store
                  </p>
                </div>
              )}
            </div>
          </div>
          <BottomSheet
            isOpen={blockStoreModal}
            onClose={() => setBlockStoreModal(false)}
            snapPoints={[600, 400, 100, 0]}
          >
            <div className="mx-4">
              <p className="text-center text-lg font-bold">
                Block {stores?.name} ?
              </p>
              <p className="text-center text-sm">
                Adverts from this store will no longer appear in your feeds
              </p>
              <p className="text-center text-sm">Do you wish to continue?</p>

              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setBlockStoreModal(false)}
                  className="bg-gray-400 rounded-lg p-2 text-white text-sm mx-4"
                >
                  No
                </button>
                <button
                  onClick={blockHandler}
                  className="bg-red-400 rounded-lg p-2 text-white text-sm mx-4"
                >
                  Yes
                </button>
              </div>
            </div>
          </BottomSheet>
        </MobileLayout>
      </Mobile>
    </>
  );
};
export default ProfileOther;
