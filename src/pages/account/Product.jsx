import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import {
  Input1,
  InputSelect,
  InputTextArea,
} from '../../components/shared/Inputs';
import Avatar from '../../assets/img/avatar.png';
import Dcart from '../../assets/img/dcart.jpeg';
import {
  Card1,
  Card2,
  Card2M,
  Card2Profile,
} from '../../components/shared/Cards';
import { Button1 } from '../../components/shared/Buttons';
import { colors } from '../../themes';
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
import {
  editStoreProduct,
  fetchSingleProduct,
  fetchStoreProducts,
} from '../../redux/actions/products';
import {
  getStoreOwnerProducts,
  setOwnerStoreProducts,
} from '../../redux/reducers/productSlice';
import './styles.scss';
import { showToast } from '../../utils/helpers';
import { Dialog } from '@material-tailwind/react';
import Api from '../../api';

const ProductComponent = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stores = useSelector(getUserStore);
  const storeProducts = useSelector(getStoreOwnerProducts);
  const [active, setActive] = useState('active');
  const [showModal, setShowModal] = useState(false);
  const [productTitle, setProductTitle] = useState('');
  const [pid, setPid] = useState('');
  const [storeId, setStoreId] = useState('');
  const [showUnpublish, setShowUnpublish] = useState(false);

  useEffect(() => {
    stores?.id && dispatch(fetchStoreProducts(stores?.id, { status: active }));

    return () => {
      dispatch(setOwnerStoreProducts([]));
    };
  }, [stores?.id, active]);

  const unPublishProduct = async (id, store) => {
    try {
      const data = {
        id: id,
        status: 'inactive',
        store_id: store,
      };
      dispatch(editStoreProduct(data));
      dispatch(fetchStoreProducts(stores?.id, { status: active }));
      setShowUnpublish(false);
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
  const deleteProduct = async () => {
    try {
      await Api.products.deleteProduct(pid);
      // showToast('Product removed successfully', 'success');
      dispatch(fetchStoreProducts(stores?.id, { status: active }));
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = async (id) => {
    await dispatch(fetchSingleProduct(id));
    navigate(`/edit/product/${id}`);
  };

  return (
    <>
      <div className="py-4">
        <>
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
                backgroundColor: active === 'draft' ? '#EB3352' : 'transparent',
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
                  active === 'inactive' ? '#EB3352' : 'transparent',
              }}
              onClick={() => setActive('inactive')}
            >
              In active
            </p>
            <p
              className="text-sm p-3 mx-2 rounded-xl cursor-pointer"
              style={{
                color: active === 'banned' ? '#fff' : '#374B58',
                backgroundColor:
                  active === 'banned' ? '#EB3352' : 'transparent',
              }}
              onClick={() => setActive('banned')}
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
                  edit={() => editProduct(product?.slug)}
                  remove={() => {
                    setProductTitle(product.name);
                    setPid(product.id);
                    setShowModal(true);
                  }}
                  status={product.status == 'active' ? true : false}
                  unPublish={() => {
                    setProductTitle(product.name);
                    setPid(product.id);
                    setStoreId(product.store_id);
                    setShowUnpublish(true);
                  }}
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
                  edit={() => editProduct(product?.slug)}
                  remove={() => {
                    setProductTitle(product.name);
                    setPid(product.id);
                    setShowModal(true);
                  }}
                  unPublish={() => publishProduct(product.id, product.store_id)}
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
                  edit={() => editProduct(product?.slug)}
                  remove={() => {
                    setProductTitle(product.name);
                    setPid(product.id);
                    setShowModal(true);
                  }}
                  unPublish={() => publishProduct(product.id, product.store_id)}
                />
              ))}
            </div>
          )}
          {active === 'banned' && (
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
                  edit={() => editProduct(product?.slug)}
                  remove={() => {
                    setProductTitle(product.name);
                    setPid(product.id);
                    setShowModal(true);
                  }}
                  unPublish={() => publishProduct(product.id, product.store_id)}
                />
              ))}
            </div>
          )}
        </>
        <Dialog size="lg" open={showModal} handler={() => setShowModal(false)}>
          <div className="p-2 bg-white rounded-lg overflow-y-auto">
            <p className="text-lg font-bold text-red-500 text-center my-4">
              Are you sure you want to delete
            </p>
            <p className="text-xl font-bold text-center my-4">{productTitle}</p>
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
        <Dialog
          size="lg"
          open={showUnpublish}
          handler={() => setShowUnpublish(false)}
        >
          <div className="p-2 bg-white rounded-lg overflow-y-auto">
            <p className="text-lg font-bold text-red-500 text-center my-4">
              You are about to unpublish
            </p>
            <p className="text-xl font-bold text-center my-4">{productTitle}</p>
            <div className="flex justify-center gap-4">
              <button
                className="p-2 rounded-xl border border-gray-200"
                onClick={() => setShowUnpublish(false)}
              >
                Cancel
              </button>
              <button
                className="p-2 rounded-xl bg-red-500 text-white"
                onClick={() => unPublishProduct(pid, storeId)}
              >
                Confirm
              </button>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
};
export default ProductComponent;
