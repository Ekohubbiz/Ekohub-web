import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Arrow from '../../assets/icons/arrow-right.svg';
import Avatar from '../../assets/img/avatar.png';
import Logo from '../../assets/img/Logo2.png';
import MainLayout from '../../components/Landing/MainLayout';
import { paths } from '../../constants';
import { Desktop, Mobile } from '../../layout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import Auth from '../../middleware/storage';
import {
  clearState,
  getCurrentUser,
  getStoreOwner,
  getUserStore,
} from '../../redux/reducers/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import Account from '../account/Account';
import Faq from '../account/Faq';
import ProductComponent from '../account/Product';
import Notifications from '../account/Notifications';
import UploadAds from '../account/UploadAd';
import Favourites from '../account/Favourites';
import Feedbacks from '../account/Feedbacks';
import StoreBlacklist from '../account/StoreBlacklist';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const stores = useSelector(getUserStore);
  const storeOwner = useSelector(getStoreOwner);
  const user = useSelector(getCurrentUser);
  const [active, setActive] = useState(null);
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  useState(() => {
    setActive(state?.nav || null);
  }, []);

  const logout = async () => {
    await dispatch(clearState());
    Auth.destroyToken();
    navigate(paths.HOME);
  };
  console.log(state);
  return (
    <>
      <Desktop>
        <MainLayout loading={loading}>
          <div className="bg-white">
            <div className="lg:px-12 lg:py-10 p-4">
              <div className="grid grid-cols-6 gap-8 pt-4">
                <div className="relative col-span-2 rounded-lg">
                  {/* profile card left */}
                  <div className="mb-4 rounded-lg drop-shadow-2xl bg-white">
                    <div className="p-4">
                      <div className="flex flex-nowrap items-center">
                        <img
                          src={user?.profile_pic_url || Avatar}
                          alt="shop online at ekohub"
                          className="w-14 h-14 mr-4 rounded-full"
                        />
                        <p className="text-base font-bold">
                          {user?.first_name}
                        </p>
                      </div>

                      <div className="mt-4">
                        <p className="text-2xl text-slate-700 pb-2">
                          {stores?.name}
                        </p>
                        <p className="text-xs text-slate-700 pb-2">
                          {stores?.address}
                        </p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <div
                        onClick={() => setActive('account')}
                        className="flex justify-between p-3 bg-white border cursor-pointer"
                        style={{
                          borderColor: active == 'account' ? '#EB3352' : '',
                        }}
                      >
                        <div className="flex">
                          <span className="px-4">Account</span>
                        </div>
                        <img src={Arrow} alt="shop online at ekohub" className="w-5" />
                      </div>
                      {storeOwner ? (
                        <div
                          onClick={() => setActive('product')}
                          className="flex justify-between p-3 bg-white border cursor-pointer"
                          style={{
                            borderColor: active == 'product' ? '#EB3352' : '',
                          }}
                        >
                          <div className="flex">
                            <span className="px-4">Product</span>
                          </div>
                          <img src={Arrow} alt="shop online at ekohub" className="w-5" />
                        </div>
                      ) : (
                        <Link to={paths.SELLING_AUTH}>
                          <div
                            onClick={() => setActive('product')}
                            className="flex justify-between p-3 bg-white border cursor-pointer"
                            style={{
                              borderColor: active == 'product' ? '#EB3352' : '',
                            }}
                          >
                            <div className="flex">
                              <span className="px-4">Start selling</span>
                            </div>
                            <img src={Arrow} alt="shop online at ekohub" className="w-5" />
                          </div>
                        </Link>
                      )}
                      {storeOwner && (
                        <div
                          onClick={() => setActive('uploadads')}
                          className="flex justify-between p-3 bg-white border cursor-pointer"
                          style={{
                            borderColor: active == 'uploadads' ? '#EB3352' : '',
                          }}
                        >
                          <div className="flex">
                            <span className="px-4">Upload Ads</span>
                          </div>
                          <img src={Arrow} alt="shop online at ekohub" className="w-5" />
                        </div>
                      )}
                      <div
                        onClick={() => setActive('favourites')}
                        className="flex justify-between p-3 bg-white border cursor-pointer"
                        style={{
                          borderColor: active == 'favourites' ? '#EB3352' : '',
                        }}
                      >
                        <div className="flex">
                          <span className="px-4">Favourites</span>
                        </div>
                        <img src={Arrow} alt="shop online at ekohub" className="w-5" />
                      </div>
                      <div
                        onClick={() => setActive('notification')}
                        className="flex justify-between p-3 bg-white border cursor-pointer"
                        style={{
                          borderColor:
                            active == 'notification' ? '#EB3352' : '',
                        }}
                      >
                        <div className="flex">
                          <span className="px-4">Notification</span>
                        </div>
                        <img src={Arrow} alt="shop online at ekohub" className="w-5" />
                      </div>
                      <div
                        onClick={() => setActive('blacklist')}
                        className="flex justify-between p-3 bg-white border cursor-pointer"
                        style={{
                          borderColor: active == 'blacklist' ? '#EB3352' : '',
                        }}
                      >
                        <div className="flex">
                          <span className="px-4">Store Blacklist</span>
                        </div>
                        <img src={Arrow} alt="shop online at ekohub" className="w-5" />
                      </div>
                      <div
                        onClick={() => setActive('faq')}
                        className="flex justify-between p-3 bg-white border cursor-pointer"
                        style={{
                          borderColor: active == 'faq' ? '#EB3352' : '',
                        }}
                      >
                        <div className="flex">
                          <span className="px-4">FAQ</span>
                        </div>
                        <img src={Arrow} alt="shop online at ekohub" className="w-5" />
                      </div>
                      <div
                        onClick={logout}
                        className="flex justify-between p-3 bg-white border rounded-b-lg cursor-pointer"
                      >
                        <div className="flex">
                          <span className="px-4 text-red-400">Log out</span>
                        </div>
                        <img src={Arrow} alt="shop online at ekohub" className="w-5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative col-span-4 lg:mb-44">
                  <div className="bg-white rounded-lg drop-shadow-2xl p-4 mb-4">
                    {active == 'account' && (
                      <Account stores={stores} user={user} />
                    )}
                    {active == 'faq' && <Faq />}
                    {active == 'product' && (
                      <ProductComponent action={state?.action} />
                    )}
                    {active == 'uploadads' && storeOwner && (
                      <UploadAds action={state?.action} />
                    )}
                    {active == 'notification' && <Notifications />}
                    {active == 'favourites' && <Favourites />}
                    {active == 'blacklist' && <StoreBlacklist />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      </Desktop>
      <Mobile>
        <MobileLayout nav={false}>
          <div className="">
            <div className="relative sticky top-0 z-50">
              <div className="flex justify-center">
                <img src={Logo} className="absolute top-4  h-7" alt="shop online at ekohub" />
              </div>
              <div className="pimg bg-red-500 w-full rounded-b-3xl flex flex-col justify-center items-start p-4 py-8 ">
                <div className="flex items-center pt-4">
                  <>
                    <img
                      src={Avatar}
                      alt="shop online at ekohub"
                      className="w-16 h-16 rounded-full"
                    />
                    <p className="text-base font-bold text-white ml-2">
                      {user?.first_name}
                    </p>
                  </>
                </div>
                <p className="text-lg text-white">{stores?.name}</p>
                <p className="text-sm text-white">{stores?.address}</p>
              </div>
              {active && (
                <span
                  className="cursor-pointer px-4 py-2 bg-white rounded-full drop-shadow-lg absolute -bottom-12 left-4"
                  onClick={() => {
                    setStep(0);
                    setActive(null);
                  }}
                >
                  {'x'}
                </span>
              )}
            </div>
            <div className="py-8 h-full px-2">
              {active == null && (
                <div className="mt-2">
                  <div
                    onClick={() => setActive('account')}
                    className="flex justify-between p-3 bg-white border cursor-pointer rounded-lg my-2"
                    style={{
                      borderColor: active == 'account' ? '#EB3352' : '',
                    }}
                  >
                    <div className="flex">
                      <span className="px-4">Account</span>
                    </div>
                    <img src={Arrow} alt="shop online at ekohub" className="w-5" />
                  </div>
                  {storeOwner ? (
                    <div
                      onClick={() => setActive('product')}
                      className="flex justify-between p-3 bg-white border cursor-pointer rounded-lg my-2"
                      style={{
                        borderColor: active == 'product' ? '#EB3352' : '',
                      }}
                    >
                      <div className="flex">
                        <span className="px-4">Product</span>
                      </div>
                      <img src={Arrow} alt="shop online at ekohub" className="w-5" />
                    </div>
                  ) : (
                    <Link to={paths.SELLING_AUTH}>
                      <div
                        className="flex justify-between p-3 bg-white border cursor-pointer rounded-lg my-2"
                        style={{
                          borderColor: active == 'product' ? '#EB3352' : '',
                        }}
                      >
                        <div className="flex">
                          <span className="px-4">Start selling</span>
                        </div>
                        <img src={Arrow} alt="shop online at ekohub" className="w-5" />
                      </div>
                    </Link>
                  )}
                  {storeOwner && (
                    <div
                      onClick={() => setActive('uploadads')}
                      className="flex justify-between p-3 bg-white border cursor-pointer"
                      style={{
                        borderColor: active == 'uploadads' ? '#EB3352' : '',
                      }}
                    >
                      <div className="flex">
                        <span className="px-4">Upload Ads</span>
                      </div>
                      <img src={Arrow} alt="shop online at ekohub" className="w-5" />
                    </div>
                  )}
                  {storeOwner && (
                    <div
                      onClick={() => setActive('feedbacks')}
                      className="flex justify-between p-3 bg-white border cursor-pointer my-2"
                      style={{
                        borderColor: active == 'feedbacks' ? '#EB3352' : '',
                      }}
                    >
                      <div className="flex">
                        <span className="px-4">Feedbacks</span>
                      </div>
                      <img src={Arrow} alt="shop online at ekohub" className="w-5" />
                    </div>
                  )}
                  <div
                    onClick={() => setActive('favourites')}
                    className="flex justify-between p-3 bg-white border cursor-pointer my-2"
                    style={{
                      borderColor: active == 'favourites' ? '#EB3352' : '',
                    }}
                  >
                    <div className="flex">
                      <span className="px-4">Favourites</span>
                    </div>
                    <img src={Arrow} alt="shop online at ekohub" className="w-5" />
                  </div>
                  <div
                    onClick={() => setActive('notification')}
                    className="flex justify-between p-3 bg-white border cursor-pointer rounded-lg my-2"
                    style={{
                      borderColor: active == 'notification' ? '#EB3352' : '',
                    }}
                  >
                    <div className="flex">
                      <span className="px-4">Notification</span>
                    </div>
                    <img src={Arrow} alt="shop online at ekohub" className="w-5" />
                  </div>
                  <div
                    onClick={() => setActive('faq')}
                    className="flex justify-between p-3 bg-white border cursor-pointer rounded-lg my-2"
                    style={{
                      borderColor: active == 'faq' ? '#EB3352' : '',
                    }}
                  >
                    <div className="flex">
                      <span className="px-4">FAQ</span>
                    </div>
                    <img src={Arrow} alt="shop online at ekohub" className="w-5" />
                  </div>
                  <div
                    onClick={() => setActive('blacklist')}
                    className="flex justify-between p-3 bg-white border cursor-pointer rounded-lg my-2"
                    style={{
                      borderColor: active == 'blacklist' ? '#EB3352' : '',
                    }}
                  >
                    <div className="flex">
                      <span className="px-4">Store Blacklist</span>
                    </div>
                    <img src={Arrow} alt="shop online at ekohub" className="w-5" />
                  </div>
                  <div
                    onClick={logout}
                    className="flex justify-between p-3 bg-white border rounded-b-lg cursor-pointer rounded-lg my-2"
                  >
                    <div className="flex">
                      <span className="px-4 text-red-400">Log out</span>
                    </div>
                    <img src={Arrow} alt="shop online at ekohub" className="w-5" />
                  </div>
                </div>
              )}
              <div className="my-8">
                {active == 'account' && <Account stores={stores} user={user} />}
                {active == 'faq' && <Faq />}
                {active == 'uploadads' && storeOwner && (
                  <UploadAds action={state?.action} />
                )}
                {active == 'feedbacks' && storeOwner && (
                  <Feedbacks store={stores} />
                )}
                {active == 'product' && storeOwner && <ProductComponent />}
                {active == 'notification' && <Notifications />}
                {active == 'blacklist' && <StoreBlacklist />}
                {active == 'favourites' && <Favourites />}
              </div>
            </div>
          </div>
        </MobileLayout>
      </Mobile>
    </>
  );
};
export default Profile;
