import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Dcart from '../../assets/img/dcart.jpeg';
import Search from '../../assets/icons/search.svg';

import './styles.scss';
import { Card4 } from '../../components/shared/Cards';
import MainLayout from '../../components/Landing/MainLayout';
import { Desktop, Mobile } from '../../layout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from '../../redux/reducers/loaderSlice';
import { getCategories } from '../../redux/reducers/categorySlice';
import { getSearchStores, getStores } from '../../redux/reducers/storeSlice';
import { fetchAllStores, fetchSearchStores } from '../../redux/actions/stores';
import Moment from 'react-moment';
import { truncate } from '../../utils/helpers';
import { Input2 } from '../../components/shared/Inputs';
import useDebounce from '../../hooks/useDebounce';
import { Dialog } from '@material-tailwind/react';
import SigninComponent from '../../components/signIn/SigninComponent';
import Auth from '../../middleware/storage';
import { getUserStore } from '../../redux/reducers/authSlice';

const Merchants = () => {
  const dispatch = useDispatch();
  const stores = useSelector(getStores);
  const categories = useSelector(getCategories);
  const searchStores = useSelector(getSearchStores);
  const loading = useSelector(getIsLoading);
  const [isShown, setIsShown] = useState(false);
  const [subcategory, setSubcategory] = useState([]);
  const [catId, setCatId] = useState(null);
  const [searchString, setSearchStrings] = useState('');
  const debouncedValue = useDebounce(searchString, 2000);
  const [showModalAuth, setShowModalAuth] = React.useState(false);
  const userStore = useSelector(getUserStore);

  useEffect(() => {
    dispatch(fetchAllStores());
  }, []);

  useEffect(() => {
    dispatch(fetchSearchStores({ search: searchString }));
  }, [debouncedValue]);

  const handleSearch = (e) => {
    setSearchStrings(e.target.value);
  };

  return (
    <>
      <Desktop>
        <MainLayout loading={loading}>
          <div className="lg:px-4 md:px-8 px-2 mb-8">
            <div className="grid grid-cols-5 gap-4 pt-4">
              <div className="hidden lg:block col-span-1">
                <div className="bg-white rounded-lg drop-shadow-sm">
                  {(categories || []).map((category) => (
                    <Card4
                      key={category.name}
                      title={category.name.toLocaleUpperCase()}
                      ads={category.ads}
                      img={category.icon_url}
                      to={`/category-product/${category.id}`}
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

              <div className="lg:col-span-4 col-span-4 mb-8">
                <div className="bg-white rounded-lg drop-shadow-sm">
                  {isShown && subcategory.length > 0 && (
                    <>
                      <div className="absolute top-0 left-0 bg-white rounded-lg drop-shadow-sm p-4 w-64 z-50">
                        {(subcategory || []).map((category, index) => (
                          <Card4
                            key={index}
                            title={category.name.toLocaleUpperCase()}
                            ads={category.ads}
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
                  )}
                  <div className="p-4">
                    <p className="font-bold text-lg text-gray-700 ml-2">
                      Merchants
                    </p>
                    {(stores || []).length < 1 ? (
                      <div>
                        <p className="py-8 text-base font-semibold text-center">
                          No Merchants yet
                        </p>
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <Input2
                          icon={Search}
                          placeholder="Search for merchants"
                          type="text"
                          onChange={handleSearch}
                          data-dropdown-toggle="dropdown-search"
                        />
                      </div>
                    )}

                    <div className="lg:flex lg:flex-wrap my-4">
                      {searchStores.length > 0
                        ? (searchStores || []).map((store, index) =>
                            Auth.isAuthenticated() ? (
                              <Link
                                to={
                                  store.id == userStore.id
                                    ? `/profile`
                                    : `/merchant/${store?.slug}`
                                }
                                state={{ pid: store?.id, nav: 'product' }}
                              >
                                <div className="bg-white rounded-2xl m-2 p-2 drop-shadow-md">
                                  <img
                                    key={index}
                                    src={store?.cover_image_url || Dcart}
                                    alt="shop online at ekohub"
                                    className="w-36 h-36 rounded-full"
                                  />
                                  <div className="my-2">
                                    <p className="text-base font-bold ">
                                      {store?.name}
                                    </p>
                                    <p className="text-sm text-gray-400">
                                      {truncate(store?.address, 15)}
                                    </p>
                                    <p className="text-xs text-gray-400 font-light">
                                      Member since{' '}
                                      <Moment
                                        format="MMMM YYYY"
                                        date={store?.created_at}
                                      />
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            ) : (
                              <div
                                onClick={() => setShowModalAuth(true)}
                                className="bg-white rounded-2xl m-2 p-2 drop-shadow-md"
                              >
                                <img
                                  key={index}
                                  src={store?.cover_image_url || Dcart}
                                  alt="shop online at ekohub"
                                  className="w-36 h-36 rounded-full"
                                />
                                <div className="my-2">
                                  <p className="text-base font-bold ">
                                    {store?.name}
                                  </p>
                                  <p className="text-sm text-gray-400">
                                    {truncate(store?.address, 15)}
                                  </p>
                                  <p className="text-xs text-gray-400 font-light">
                                    Member since{' '}
                                    <Moment
                                      format="MMMM YYYY"
                                      date={store?.created_at}
                                    />
                                  </p>
                                </div>
                              </div>
                            ),
                          )
                        : (stores || []).map((store, index) =>
                            Auth.isAuthenticated() ? (
                              <Link
                                to={
                                  store.id == userStore.id
                                    ? `/profile`
                                    : `/merchant/${store?.slug}`
                                }
                                state={{ pid: store?.id, nav: 'product' }}
                              >
                                <div className="bg-white rounded-2xl m-2 p-2 drop-shadow-md">
                                  <img
                                    key={index}
                                    src={store?.cover_image_url || Dcart}
                                    alt="shop online at ekohub"
                                    className="w-36 h-36 rounded-full"
                                  />
                                  <div className="my-2">
                                    <p className="text-base font-bold ">
                                      {store?.name}
                                    </p>
                                    <p className="text-sm text-gray-400">
                                      {truncate(store?.address, 15)}
                                    </p>
                                    <p className="text-xs text-gray-400 font-light">
                                      Member since{' '}
                                      <Moment
                                        format="MMMM YYYY"
                                        date={store?.created_at}
                                      />
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            ) : (
                              <div
                                onClick={() => setShowModalAuth(true)}
                                className="bg-white rounded-2xl m-2 p-2 drop-shadow-md"
                              >
                                <img
                                  key={index}
                                  src={store?.cover_image_url || Dcart}
                                  alt="shop online at ekohub"
                                  className="w-36 h-36 rounded-full"
                                />
                                <div className="my-2">
                                  <p className="text-base font-bold ">
                                    {store?.name}
                                  </p>
                                  <p className="text-sm text-gray-400">
                                    {truncate(store?.address, 15)}
                                  </p>
                                  <p className="text-xs text-gray-400 font-light">
                                    Member since{' '}
                                    <Moment
                                      format="MMMM YYYY"
                                      date={store?.created_at}
                                    />
                                  </p>
                                </div>
                              </div>
                            ),
                          )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      </Desktop>
      <Mobile>
        <MobileLayout route="Merchants">
          <div className="mx-2 py-14 overflow-y-auto">
            <div className="my-4">
              {(stores || []).length < 1 ? (
                <div>
                  <p className="py-8 text-base font-semibold text-center">
                    No Merchants yet
                  </p>
                </div>
              ) : (
                <div className="flex justify-center">
                  <Input2
                    icon={Search}
                    placeholder="Search for merchants"
                    type="text"
                    onChange={handleSearch}
                    data-dropdown-toggle="dropdown-search"
                  />
                </div>
              )}
            </div>

            {searchStores.length > 0
              ? (searchStores || []).map((store, index) =>
                  Auth.isAuthenticated() ? (
                    <Link
                      to={
                        store.id == userStore.id
                          ? `/profile`
                          : `/merchant/${store?.slug}`
                      }
                      state={{ pid: store?.id, nav: 'product' }}
                      key={index}
                    >
                      <div className="bg-white rounded-2xl m-2 p-2 drop-shadow-sm flex">
                        <img
                          src={store?.cover_image_url || Dcart}
                          alt="shop online at ekohub"
                          className="w-24 h-24 rounded-full mr-4"
                        />
                        <div className="my-2">
                          <p className="text-base font-bold ">{store?.name}</p>
                          <p className="text-sm text-gray-400">
                            {truncate(store?.address, 15)}
                          </p>
                          <p className="text-xs text-gray-400 font-light">
                            Member since{' '}
                            <Moment
                              format="MMMM YYYY"
                              date={store?.created_at}
                            />
                          </p>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="bg-white rounded-2xl m-2 p-2 drop-shadow-sm flex">
                      <img
                        src={store?.cover_image_url || Dcart}
                        alt="shop online at ekohub"
                        className="w-24 h-24 rounded-full mr-4"
                      />
                      <div className="my-2">
                        <p className="text-base font-bold ">{store?.name}</p>
                        <p className="text-sm text-gray-400">
                          {truncate(store?.address, 15)}
                        </p>
                        <p className="text-xs text-gray-400 font-light">
                          Member since{' '}
                          <Moment format="MMMM YYYY" date={store?.created_at} />
                        </p>
                      </div>
                    </div>
                  ),
                )
              : (stores || []).map((store, index) => (
                  <Link
                    to={
                      store.id == userStore.id
                        ? `/profile`
                        : `/merchant/${store?.slug}`
                    }
                    state={{ pid: store?.id, nav: 'product' }}
                    key={index}
                  >
                    <div className="bg-white rounded-2xl m-2 p-2 drop-shadow-sm flex">
                      <img
                        src={store?.cover_image_url || Dcart}
                        alt="shop online at ekohub"
                        className="w-24 h-24 rounded-full mr-4"
                      />
                      <div className="my-2">
                        <p className="text-base font-bold ">{store?.name}</p>
                        <p className="text-sm text-gray-400">
                          {truncate(store?.address, 15)}
                        </p>
                        <p className="text-xs text-gray-400 font-light">
                          Member since{' '}
                          <Moment format="MMMM YYYY" date={store?.created_at} />
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
        </MobileLayout>
      </Mobile>
      <Dialog
        size="md"
        open={showModalAuth}
        handler={() => setShowModalAuth(false)}
      >
        <SigninComponent onSign={() => setShowModalAuth(false)} />
      </Dialog>
    </>
  );
};
export default Merchants;
