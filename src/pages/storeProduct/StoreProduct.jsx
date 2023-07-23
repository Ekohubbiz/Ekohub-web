import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Sellingm from '../../assets/img/sellingm.png';
import Remote from '../../assets/img/remote.png';
import Dcart from '../../assets/img/dcart.jpeg';

import { paths } from '../../constants';
import './styles.scss';
import {
  Card2,
  Card2M,
  Card2Profile,
  Card4,
} from '../../components/shared/Cards';
import MainLayout from '../../components/Landing/MainLayout';
import { Desktop, Mobile } from '../../layout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from '../../redux/reducers/loaderSlice';
import {
  getFavourites,
  getStoreOwnerProducts,
  setOwnerStoreProducts,
} from '../../redux/reducers/productSlice';
import {
  editStoreProduct,
  fetchFavouriteProducts,
  fetchStoreProducts,
} from '../../redux/actions/products';
import { getCategories } from '../../redux/reducers/categorySlice';
import { getStoreOwner, getUserStore } from '../../redux/reducers/authSlice';
import { Dialog } from '@material-tailwind/react';
import Api from '../../api';
import SideDrawer from '../../components/mobile/SideDrawer/SideDrawer';
import Backdrop from '../../components/shared/Backdrop/Backdrop';

const StoreProduct = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const favourites = useSelector(getFavourites);
  const storeOwner = useSelector(getStoreOwner);
  const [isShown, setIsShown] = useState(false);
  const [subcategory, setSubcategory] = useState([]);
  const [catId, setCatId] = useState(null);
  const pageCount = 24;
  const [currentPage, setCurrentPage] = useState(1);
  const stores = useSelector(getUserStore);
  const storeProducts = useSelector(getStoreOwnerProducts);
  const [active, setActive] = useState('active');
  const [showModal, setShowModal] = useState(false);
  const [productTitle, setProductTitle] = useState({ name: '', id: '' });

  useEffect(() => {
    stores?.id && dispatch(fetchStoreProducts(stores?.id, { status: active }));

    return () => {
      // dispatch(setOwnerStoreProducts([]));
    };
  }, [stores?.id, active]);

  const unPublishProduct = async (id, store) => {
    try {
      const data = {
        id: id,
        status: 'inactive',
        store_id: store,
      };
      await dispatch(editStoreProduct(data));
      dispatch(fetchStoreProducts(stores?.id, { status: active }));
      showToast('Product updated successfully', 'success');
    } catch (error) {
      console.log(error);
    }
  };

  const publishProduct = async (id, store) => {
    try {
      const data = {
        id: id,
        status: 'active',
        store_id: store,
      };
      await dispatch(editStoreProduct(data));
      dispatch(fetchStoreProducts(stores?.id, { status: active }));
      showToast('Product updated successfully', 'success');
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await Api.products.deleteProduct(productTitle.id);
      setShowModal(false);
      showToast('Product removed successfully', 'success');
      dispatch(fetchStoreProducts(stores?.id, { status: active }));
    } catch (error) {
      console.log(error);
    }
  };

  //mobile
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  let backdropComponent;

  const handleSideDrawer = () => {
    setSideDrawerOpen((prev) => !prev);
  };

  if (sideDrawerOpen) {
    backdropComponent = <Backdrop click={() => setSideDrawerOpen(false)} />;
  }

  return (
    <>
      <Desktop>
        <MainLayout>
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
                    {storeOwner ? (
                      <div>
                        <div className="flex">
                          <p
                            className="text-sm p-3 mx-2 rounded-xl cursor-pointer"
                            style={{
                              color: active === 'active' ? '#fff' : '#374B58',
                              backgroundColor:
                                active === 'active' ? '#EB3352' : 'transparent',
                            }}
                            onClick={() => setActive('active')}
                          >
                            Active
                          </p>
                          <p
                            className="text-sm p-3 mx-2 rounded-xl cursor-pointer"
                            style={{
                              color: active === 'draft' ? '#fff' : '#374B58',
                              backgroundColor:
                                active === 'draft' ? '#EB3352' : 'transparent',
                            }}
                            onClick={() => setActive('draft')}
                          >
                            Draft
                          </p>
                          <p
                            className="text-sm p-3 mx-2 rounded-xl cursor-pointer"
                            style={{
                              color: active === 'inactive' ? '#fff' : '#374B58',
                              backgroundColor:
                                active === 'inactive'
                                  ? '#EB3352'
                                  : 'transparent',
                            }}
                            onClick={() => setActive('inactive')}
                          >
                            In active
                          </p>
                          <p
                            className="text-sm p-3 mx-2 rounded-xl cursor-pointer"
                            style={{
                              color: active === 'decline' ? '#fff' : '#374B58',
                              backgroundColor:
                                active === 'decline'
                                  ? '#EB3352'
                                  : 'transparent',
                            }}
                            onClick={() => setActive('decline')}
                          >
                            Decline
                          </p>
                        </div>

                        {active === 'active' && (
                          <div className="flex gap-1 flex-wrap justify-center">
                            {(storeProducts || []).map((product, index) => (
                              <Card2Profile
                                img={product.product_media[0]?.url || Dcart}
                                title={product.name}
                                price={product.price}
                                location={product.address}
                                to={`/product/${product.slug}`}
                                key={index}
                                edit={`/product/${product?.slug}`}
                                remove={() => {
                                  setProductTitle(product.name);
                                  setShowModal(true);
                                }}
                                status={
                                  product.status == 'active' ? true : false
                                }
                                unPublish={() =>
                                  unPublishProduct(product.id, product.store_id)
                                }
                              />
                            ))}
                            {storeProducts.length < 1 && (
                              <div className="my-8">
                                <p className="text-lg text-bold text-center">
                                  Currently no active product in this store
                                </p>
                              </div>
                            )}
                          </div>
                        )}

                        {active === 'draft' && (
                          <div className="flex gap-1 flex-wrap justify-center">
                            {storeProducts.length < 1 && (
                              <div className="my-8">
                                <p className="text-lg text-bold text-center">
                                  Currently no draft product in this store
                                </p>
                              </div>
                            )}
                            {(storeProducts || []).map((product, index) => (
                              <Card2Profile
                                img={product.product_media[0]?.url || Dcart}
                                title={product.name}
                                price={product.price}
                                location={product.address}
                                status={
                                  product.status == 'active' ? true : false
                                }
                                to={`/product/${product.slug}`}
                                key={index}
                                edit={`/edit/product/${product?.slug}`}
                                remove={() => console.log('remove')}
                                unPublish={() =>
                                  publishProduct(product.id, product.store_id)
                                }
                              />
                            ))}
                          </div>
                        )}

                        {active === 'inactive' && (
                          <div className="flex gap-1 flex-wrap justify-center">
                            {storeProducts.length < 1 && (
                              <div className="my-8">
                                <p className="text-lg text-bold text-center">
                                  Currently no in active product in this store
                                </p>
                              </div>
                            )}
                            {(storeProducts || []).map((product, index) => (
                              <Card2Profile
                                img={product.product_media[0]?.url || Dcart}
                                title={product.name}
                                price={product.price}
                                location={product.address}
                                status={
                                  product.status == 'active' ? true : false
                                }
                                to={`/product/${product.slug}`}
                                key={index}
                                edit={`/edit/product/${product?.slug}`}
                                remove={() => console.log('remove')}
                                unPublish={() =>
                                  publishProduct(product.id, product.store_id)
                                }
                              />
                            ))}
                          </div>
                        )}

                        {active === 'decline' && (
                          <div className="flex gap-1 flex-wrap justify-center">
                            {storeProducts.length < 1 && (
                              <div className="my-8">
                                <p className="text-lg text-bold text-center">
                                  Currently no declined product in this store
                                </p>
                              </div>
                            )}
                            {(storeProducts || []).map((product, index) => (
                              <Card2Profile
                                img={product.product_media[0]?.url || Dcart}
                                title={product.name}
                                price={product.price}
                                location={product.address}
                                status={
                                  product.status == 'active' ? true : false
                                }
                                to={`/product/${product.slug}`}
                                key={index}
                                edit={`/edit/product/${product?.slug}`}
                                remove={() => console.log('remove')}
                                unPublish={() =>
                                  publishProduct(product.id, product.store_id)
                                }
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex justify-center items-center p-4">
                        <div>
                          <p className="text-base my-8">
                            You are not a store owner
                          </p>
                          <Link
                            to={paths.SELLING_AUTH}
                            className="p-2 rounded-lg bg-red-400 text-white"
                          >
                            Open a store
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      </Desktop>
      <Mobile>
        <MobileLayout route sideDrawer={handleSideDrawer}>
          <div className="px-4 py-14">
            <SideDrawer
              clickCatIcon={() => setSideDrawerOpen(false)}
              show={sideDrawerOpen}
              data={categories}
            />
            {backdropComponent}
            <div className="p-4">
              {storeOwner ? (
                <div>
                  <div className="flex">
                    <p
                      className="text-sm p-2 mx-2 rounded-xl cursor-pointer"
                      style={{
                        color: active === 'active' ? '#fff' : '#374B58',
                        backgroundColor:
                          active === 'active' ? '#EB3352' : 'transparent',
                      }}
                      onClick={() => setActive('active')}
                    >
                      Active
                    </p>
                    <p
                      className="text-sm p-2 mx-2 rounded-xl cursor-pointer"
                      style={{
                        color: active === 'draft' ? '#fff' : '#374B58',
                        backgroundColor:
                          active === 'draft' ? '#EB3352' : 'transparent',
                      }}
                      onClick={() => setActive('draft')}
                    >
                      Draft
                    </p>
                    <p
                      className="text-sm p-2 mx-2 rounded-xl cursor-pointer"
                      style={{
                        color: active === 'inactive' ? '#fff' : '#374B58',
                        backgroundColor:
                          active === 'inactive' ? '#EB3352' : 'transparent',
                      }}
                      onClick={() => setActive('inactive')}
                    >
                      In active
                    </p>
                    <p
                      className="text-sm p-2 mx-2 rounded-xl cursor-pointer"
                      style={{
                        color: active === 'decline' ? '#fff' : '#374B58',
                        backgroundColor:
                          active === 'decline' ? '#EB3352' : 'transparent',
                      }}
                      onClick={() => setActive('decline')}
                    >
                      Decline
                    </p>
                  </div>

                  {active === 'active' && (
                    <div className="flex gap-1 flex-wrap justify-center">
                      {(storeProducts || []).map((product, index) => (
                        <Card2Profile
                          img={product.product_media[0]?.url || Dcart}
                          title={product.name}
                          price={product.price}
                          location={product.address}
                          to={`/product/${product.slug}`}
                          key={index}
                          edit={`/product/${product?.slug}`}
                          remove={() => {
                            setProductTitle({
                              name: product.name,
                              id: product.id,
                            });
                            setShowModal(true);
                          }}
                          status={product.status == 'active' ? true : false}
                          unPublish={() =>
                            unPublishProduct(product.id, product.store_id)
                          }
                        />
                      ))}
                      {storeProducts.length < 1 && (
                        <div className="my-8">
                          <p className="text-lg text-bold text-center">
                            Currently no active product in this store
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {active === 'draft' && (
                    <div className="flex gap-1 flex-wrap justify-center">
                      {storeProducts.length < 1 && (
                        <div className="my-8">
                          <p className="text-lg text-bold text-center">
                            Currently no draft product in this store
                          </p>
                        </div>
                      )}
                      {(storeProducts || []).map((product, index) => (
                        <Card2Profile
                          img={product.product_media[0]?.url || Dcart}
                          title={product.name}
                          price={product.price}
                          location={product.address}
                          status={product.status == 'active' ? true : false}
                          to={`/product/${product.slug}`}
                          key={index}
                          edit={`/edit/product/${product?.slug}`}
                          remove={() => {
                            setProductTitle({
                              name: product.name,
                              id: product.id,
                            });
                            setShowModal(true);
                          }}
                          unPublish={() =>
                            publishProduct(product.id, product.store_id)
                          }
                        />
                      ))}
                    </div>
                  )}

                  {active === 'inactive' && (
                    <div className="flex gap-1 flex-wrap justify-center">
                      {storeProducts.length < 1 && (
                        <div className="my-8">
                          <p className="text-lg text-bold text-center">
                            Currently no in active product in this store
                          </p>
                        </div>
                      )}
                      {(storeProducts || []).map((product, index) => (
                        <Card2Profile
                          img={product.product_media[0]?.url || Dcart}
                          title={product.name}
                          price={product.price}
                          location={product.address}
                          status={product.status == 'active' ? true : false}
                          to={`/product/${product.slug}`}
                          key={index}
                          edit={`/edit/product/${product?.slug}`}
                          remove={() => {
                            setProductTitle({
                              name: product.name,
                              id: product.id,
                            });
                            setShowModal(true);
                          }}
                          unPublish={() =>
                            publishProduct(product.id, product.store_id)
                          }
                        />
                      ))}
                    </div>
                  )}

                  {active === 'decline' && (
                    <div className="flex gap-1 flex-wrap justify-center">
                      {storeProducts.length < 1 && (
                        <div className="my-8">
                          <p className="text-lg text-bold text-center">
                            Currently no declined product in this store
                          </p>
                        </div>
                      )}
                      {(storeProducts || []).map((product, index) => (
                        <Card2Profile
                          img={product.product_media[0]?.url || Dcart}
                          title={product.name}
                          price={product.price}
                          location={product.address}
                          status={product.status == 'active' ? true : false}
                          to={`/product/${product.slug}`}
                          key={index}
                          edit={`/edit/product/${product?.slug}`}
                          remove={() => {
                            setProductTitle({
                              name: product.name,
                              id: product.id,
                            });
                            setShowModal(true);
                          }}
                          unPublish={() =>
                            publishProduct(product.id, product.store_id)
                          }
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center p-4 my-14">
                  <div>
                    <img src={Sellingm} className="rounded-xl" alt="img" />
                  </div>
                  <Link
                    to={paths.SELLING_AUTH}
                    className="p-4 rounded-lg border border-red-400 text-red-600 m-8 w-full text-center hover:bg-red-500 hover:text-white"
                  >
                    Set up my store
                  </Link>
                </div>
              )}
            </div>
          </div>
        </MobileLayout>
      </Mobile>
      <Dialog size="lg" open={showModal} handler={() => setShowModal(false)}>
        <div className="p-4 bg-white rounded-lg overflow-y-auto">
          <p className="text-lg font-bold text-red-500 text-center my-4">
            Are you sure you want to delete
          </p>
          <p className="text-xl font-bold text-center my-4">
            {productTitle.name}
          </p>
          <div className="flex justify-center gap-4">
            <button
              className="p-2 rounded-xl border border-gray-200"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              className="p-2 rounded-xl bg-red-500 text-white"
              onClick={deleteProduct}
            >
              Confirm
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default StoreProduct;
