import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input1, InputSelect } from '../../components/shared/Inputs';
import Logo2 from '../../assets/icons/logo2.svg';
import BgSell from '../../assets/img/bgsell.svg';
import Avatar from '../../assets/img/avatar.png';
import { Button1 } from '../../components/shared/Buttons';
import MainLayout from '../../components/Landing/MainLayout';
import { colors } from '../../themes';
import { paths } from '../../constants';
import { Desktop, Mobile } from '../../layout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser, getStoreOwner } from '../../redux/reducers/authSlice';
import { getBusinessCategories } from '../../redux/reducers/categorySlice';
import { fetchAllBusinessCategories } from '../../redux/actions/categories';
import { getCurrency } from '../../redux/reducers/currencySlice';
import { uploadImagesMultiple } from '../../redux/actions/images';
import { createUserStore } from '../../redux/actions/stores';
import { showToast } from '../../utils/helpers';

function SellingAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getCurrentUser);
  const userHasStore = useSelector(getStoreOwner);
  const businessCategories = useSelector(getBusinessCategories);
  const currencies = useSelector(getCurrency);
  const [tabs, setTab] = useState(0);
  const [active, setActive] = useState('');
  const [form, setForm] = useState({});
  const [file, setFile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    console.log(userHasStore);
    if (userHasStore) {
      navigate(paths.PROFILE);
      showToast('You have an active store', 'error');
    }
  }, [userHasStore]);

  useEffect(() => {
    dispatch(fetchAllBusinessCategories());
  }, []);

  function uploadFile(e) {
    setSelectedImage(e.target.files[0]);
  }

  const submitFormStore = async (e) => {
    e.preventDefault();
    if (selectedImage == null) {
      showToast('Please upload an image for your store', 'error');
      return;
    }
    try {
      setLoading(true);
      const fd = new FormData();
      fd.append('media', selectedImage, 'media');
      const res = await dispatch(uploadImagesMultiple(fd));
      const data = {
        ...form,
        cover_image_url: res[0],
        // document_image_url: res[1],
        // user_selfie_url: res[2],
      };
      await dispatch(createUserStore(data));
      setLoading(false);
      navigate(paths.PROFILE, { state: { nav: 'uploadads' } });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Desktop>
        <MainLayout>
          <div className="bg-white">
            <div className="lg:px-12 lg:py-10 p-4">
              <div className="grid grid-cols-5 gap-8 pt-4">
                <div className="relative col-span-3 rounded-2xl">
                  <div className="absolute top-4 right-2 w-full h-full flex flex-col justify-center items-center">
                    <i mg src={Logo2} className="" alt="shop online at ekohub" />
                    <p className="text-white font-bold text-5xl">
                      Buy and sell
                    </p>
                    <p className="text-red-600 text-5xl font-bold">
                      everything
                    </p>
                  </div>
                  <img
                    src={BgSell}
                    className="object-contain w-full rounded-2xl"
                    alt="shop online at ekohub"
                  />
                </div>

                <div className="relative col-span-2">
                  <div className="bg-white rounded-3xl drop-shadow-md py-4 px-8 mb-4">
                    <p className="text-3xl text-slate-700 font-bold pb-4 mt-8">
                      Store set up
                    </p>
                    <p className="text-slate-700 pb-4 text-xs">
                      Hi {user?.first_name}, you can start earning more. Set up
                      a store and start selling to other buyers.
                    </p>
                    <div>
                      <form onSubmit={submitFormStore}>
                        <div>
                          <p className="font-bold my-4">Add Photos</p>
                          <p className="text-xs my-4 text-gray-400">
                            Add a photo to give your store an identity
                          </p>

                          <div className="my-4 flex items-center gap-4 overflow-y-auto">
                            {selectedImage ? (
                              <div className="flex justify-center">
                                <img
                                  src={
                                    (selectedImage &&
                                      URL.createObjectURL(selectedImage)) ||
                                    Avatar
                                  }
                                  alt="shop online at ekohub"
                                  className="w-24 h-24 rounded-lg"
                                />
                                <p
                                  onClick={() => setSelectedImage(null)}
                                  className="px-2 text-white bg-red-500 mx-2 rounded-full place-self-start cursor-pointer"
                                >
                                  x
                                </p>
                              </div>
                            ) : (
                              <label className="p-4 flex flex-col items-center bg-gray-200 my-4 rounded-xl w-24 cursor-pointer">
                                <input
                                  type="file"
                                  aria-describedby="file_input_help"
                                  id="file_input"
                                  accept="image/png, image/jpeg"
                                  name="media_urls"
                                  onChange={uploadFile}
                                  hidden
                                />
                                <i
                                  className="fa fa-camera fa-lg text-gray-400 p-2"
                                  aria-hidden="true"
                                ></i>
                                <p className="text-xs p-2 text-gray-400">ADD</p>
                              </label>
                            )}
                          </div>
                        </div>
                        <Input1
                          type="text"
                          placeholder="Business name"
                          name="business"
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          required
                        />
                        <Input1
                          type="text"
                          placeholder="Location"
                          name="address"
                          onChange={(e) =>
                            setForm({ ...form, address: e.target.value })
                          }
                          required
                        />
                        <Input1
                          type="number"
                          placeholder="Phone number"
                          name="phone"
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          required
                        />
                        <InputSelect
                          id="currency"
                          placeholder="Choose Currency"
                          required
                          data={currencies}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              currency_id: e.target.value,
                            })
                          }
                        />
                        <InputSelect
                          id="businessCategory"
                          placeholder="Choose Business category"
                          required
                          data={businessCategories}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              business_category_id: e.target.value,
                            })
                          }
                        />
                        <Input1
                          type="text"
                          placeholder="About your business"
                          name="about"
                          onChange={(e) =>
                            setForm({ ...form, description: e.target.value })
                          }
                        />
                        <div className="py-12">
                          <Button1
                            disabled={loading}
                            title={
                              loading
                                ? 'Setting up my store...'
                                : 'Set up my store'
                            }
                            type="submit"
                            btnstyle={{ backgroundColor: colors.red }}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      </Desktop>
      <Mobile>
        <MobileLayout logoView>
          <div className="relative py-14 mx-4">
            <div className="bg-white rounded-3xl drop-shadow-md py-4 px-8 mb-4">
              <p className="text-3xl text-slate-700 font-bold pb-4 mt-8">
                Store set up
              </p>
              <p className="text-slate-700 pb-4 text-xs">
                Hi {user?.first_name}, you can start earning more. Set up a
                store and start selling to other buyers.
              </p>
              <div>
                <form onSubmit={submitFormStore}>
                  <div>
                    <p className="font-bold my-4">Add Photos</p>
                    <p className="text-xs my-4 text-gray-400">
                      Add a photo to give your store an identity
                    </p>

                    <div className="my-4 flex items-center gap-4 overflow-y-auto">
                      {selectedImage ? (
                        <div className="flex justify-center">
                          <img
                            src={
                              (selectedImage &&
                                URL.createObjectURL(selectedImage)) ||
                              Avatar
                            }
                            alt="shop online at ekohub"
                            className="w-24 h-24 rounded-lg"
                          />
                          <p
                            onClick={() => setSelectedImage(null)}
                            className="px-2 text-white bg-red-500 mx-2 rounded-full place-self-start cursor-pointer"
                          >
                            x
                          </p>
                        </div>
                      ) : (
                        <label className="p-4 flex flex-col items-center bg-gray-200 my-4 rounded-xl w-24 cursor-pointer">
                          <input
                            type="file"
                            aria-describedby="file_input_help"
                            id="file_input"
                            accept="image/png, image/jpeg"
                            name="media_urls"
                            onChange={uploadFile}
                            hidden
                          />
                          <i
                            className="fa fa-camera fa-lg text-gray-400 p-2"
                            aria-hidden="true"
                          ></i>
                          <p className="text-xs p-2 text-gray-400">ADD</p>
                        </label>
                      )}
                    </div>
                  </div>
                  <Input1
                    type="text"
                    placeholder="Business name"
                    name="business"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                  <Input1
                    type="text"
                    placeholder="Location"
                    name="address"
                    onChange={(e) =>
                      setForm({ ...form, address: e.target.value })
                    }
                    required
                  />
                  <InputSelect
                    id="currency"
                    placeholder="Choose Currency"
                    required
                    data={currencies}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        currency_id: e.target.value,
                      })
                    }
                  />
                  <InputSelect
                    id="businessCategory"
                    placeholder="Choose Business category"
                    required
                    data={businessCategories}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        business_category_id: e.target.value,
                      })
                    }
                  />
                  <Input1
                    type="text"
                    placeholder="About your business"
                    name="about"
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                  />
                  <div className="py-12">
                    <Button1
                      disabled={loading}
                      title={
                        loading ? 'Setting up my store...' : 'Set up my store'
                      }
                      type="submit"
                      btnstyle={{ backgroundColor: colors.red }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </MobileLayout>
      </Mobile>
    </>
  );
}
export default SellingAuth;
