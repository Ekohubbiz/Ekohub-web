import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Select from 'react-select';
import {
  Input1,
  Input2,
  InputSelect,
  InputTextArea,
} from '../../components/shared/Inputs';
import Avatar from '../../assets/img/avatar.png';
import Dcart from '../../assets/img/dcart.jpeg';
import { Button1 } from '../../components/shared/Buttons';
import MainLayout from '../../components/Landing/MainLayout';
import { colors } from '../../themes';
import { paths } from '../../constants';
import { Desktop, Mobile } from '../../layout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import { getCurrentUser, getUserStore } from '../../redux/reducers/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrency } from '../../redux/reducers/currencySlice';
import {
  getCategories,
  getCategoryFields,
  getSubCategory,
  setCategoryFields,
} from '../../redux/reducers/categorySlice';
import {
  fetchCategoryFields,
  fetchSubCategory,
} from '../../redux/actions/categories';
import {
  uploadImagesMultiple,
  uploadImagesSingle,
} from '../../redux/actions/images';
import {
  editStoreProduct,
  fetchSingleProduct,
} from '../../redux/actions/products';
import { getProduct, setProduct } from '../../redux/reducers/productSlice';
import { showToast } from '../../utils/helpers';

const EditProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const currencies = useSelector(getCurrency);
  const categories = useSelector(getCategories);
  const subCategories = useSelector(getSubCategory);
  const categoryFields = useSelector(getCategoryFields);
  const product = useSelector(getProduct);
  const stores = useSelector(getUserStore);
  const user = useSelector(getCurrentUser);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [step, setStep] = useState(0);
  const [file, setFile] = useState([]);
  const [allFields, setAllFields] = useState([...categoryFields]);
  const [details, setDetails] = useState([]);
  const [medias, setMedias] = useState([]);

  const [form, setForm] = useState({
    id: product?.id,
    name: product?.name,
    description: product?.description,
    store_id: product?.store_id,
    category_id: product?.category_id,
    currency_id: 1,
    sub_category_id: product?.sub_category?.id,
    price: product?.price,
    media_urls: file,
    is_negotiable: product?.is_negotiable,
    quantity_provided: product?.quantity_provided,
    status: product?.status,
    details: product?.details,
  });

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
    console.log(id);
    return () => {
      dispatch(setProduct({}));
      dispatch(setCategoryFields([]));
    };
  }, []);

  useEffect(() => {
    product?.id &&
      dispatch(
        fetchCategoryFields({
          id: form.category_id,
          subId: form.sub_category_id,
        }),
      );
    product?.product_media &&
      setFile(product?.product_media?.map((urls) => urls.url));
    product?.details && setDetails([...product?.details]);
  }, [product?.id]);

  useEffect(() => {
    dispatch(
      fetchCategoryFields({
        id: form.category_id,
        subId: form.sub_category_id,
      }),
    );
    dispatch(fetchSubCategory(form.category_id));
  }, [form.category_id, form.sub_category_id]);

  useEffect(() => {
    setAllFields([...categoryFields]);
  }, [form.category_id, form.sub_category_id, categoryFields]);

  const uploadFile = async (e) => {
    const fd = new FormData();
    fd.append('media', e.target.files[0], 'media');
    const res = await dispatch(uploadImagesSingle(fd));
    setFile([...file, res]);
  };

  const removeImage = (imageIndex) => {
    if (imageIndex > -1) {
      // only splice array when item is found
      file.splice(imageIndex, 1); // 2nd parameter means remove one item only
    }
    setFile([...file]);
  };

  const submitFormProduct = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      //remove duplicate from array
      const ids = details.map((o) => o.label);
      const filteredDetails = details.filter(
        ({ label }, index) => !ids.includes(label, index + 1),
      );

      const data = {
        ...form,
        details: filteredDetails,
        media_urls: file,
      };
      console.log(data);
      await dispatch(editStoreProduct(data));
      showToast('Product updated successfully', 'success');
      setLoading(false);
      setStep(0);
      // navigate(`/product/${product?.slug}`);
      navigate(paths.PROFILE, { nav: 'product' });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const subCategory = (subCategories || []).map((sub) => {
    return {
      label: sub.name,
      value: sub.id,
    };
  });

  const updateArrays = () => {
    let arr = [];
    let arr2 = [...categoryFields];

    categoryFields.forEach((field, index) => {
      form.details.forEach((detail, key) => {
        if (field.label === detail?.label) {
          arr.push({ ...field, value: detail.value });
          arr2.splice(index, 1);
        }
      });
    });
    setAllFields([...arr, ...arr2]);
  };

  useEffect(() => {
    updateArrays();
  }, [categoryFields]);

  return (
    <>
      <Desktop>
        <MainLayout loading={loading}>
          <div className="">
            <div className="lg:px-12 lg:py-10 p-4">
              <div className="grid grid-cols-6 gap-8 pt-4">
                <div className="relative col-span-2 rounded-lg">
                  {/* messages card left */}
                  <div className="bg-white rounded-3xl drop-shadow-md p-4 mb-4">
                    <div className="flex flex-nowrap items-center">
                      <img
                        src={user?.profile_pic_url || Avatar}
                        alt="shop online at ekohub"
                        className="w-14 h-14 mr-4 rounded-full"
                      />
                      <p className="text-base font-bold">{user?.first_name}</p>
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
                </div>

                <div className="relative col-span-4 lg:mb-44">
                  <div className="bg-white rounded-3xl drop-shadow-md p-4 mb-4">
                    <div className="py-4">
                      <div>
                        <p className="py-4">
                          <span className="text-xl text-slate-700 font-bold pb-2 my-4">
                            Edit New Advert
                          </span>
                        </p>

                        {step === 0 && (
                          <form onSubmit={() => setStep(1)}>
                            <div className="flex justify-center justify-between m-2 my-4">
                              <span className="p-0.5 bg-red-600 w-1/3 mx-2 rounded-lg"></span>
                              <span className="p-0.5 bg-gray-100 w-1/3 mx-2 rounded-lg"></span>
                              <span className="p-0.5 bg-gray-100 w-1/3 mx-2 rounded-lg"></span>
                            </div>
                            <p className="text-base text-slate-700 font-bold m-4">
                              Choose your advert category
                            </p>
                            <div className="grid grid-cols-3 gap-2 h-96 overflow-y-auto">
                              {(categories || []).map((category, i) => (
                                <div
                                  key={i}
                                  className="cursor-pointer bg-gray-100 p-2 rounded-2xl"
                                  onClick={() => {
                                    setForm({
                                      ...form,
                                      category_id: category.id,
                                    });
                                    setStep(1);
                                  }}
                                  style={{
                                    borderColor:
                                      form.category_id === category.id
                                        ? '#EB3352'
                                        : 'transparent',
                                    borderWidth:
                                      form.category_id === category.id
                                        ? '1px'
                                        : '0px',
                                  }}
                                >
                                  <div className="flex justify-end ">
                                    <p
                                      className="px-2 bg-white rounded-full drop-shadow-lg"
                                      style={{
                                        color:
                                          form.category_id === category.id
                                            ? '#EB3352'
                                            : '#000',
                                      }}
                                    >
                                      {'>'}
                                    </p>
                                  </div>
                                  <p className="">{category.name}</p>
                                </div>
                              ))}
                            </div>
                            <div className="py-12">
                              <Button1
                                title="Next"
                                type="submit"
                                btnstyle={{
                                  backgroundColor:
                                    form.category_id == null
                                      ? colors.disable
                                      : '#EB3352',
                                }}
                                disabled={form.category_id == null}
                              />
                            </div>
                          </form>
                        )}
                        {step === 1 && (
                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                              if (categoryFields.length > 0) {
                                if (
                                  form.sub_category_id == null ||
                                  form.sub_category_id ==
                                    'Select a a sub category'
                                ) {
                                  showToast(
                                    'Sub category is required',
                                    'error',
                                  );
                                  return;
                                }
                              }
                              if (file.length < 1 && medias.length < 1) {
                                showToast('Product image required', 'error');
                                return;
                              }
                              setStep(2);
                            }}
                          >
                            <div className="flex justify-center justify-between m-2 my-4">
                              <span className="p-0.5 bg-red-600 w-1/3 mx-2 rounded-lg"></span>
                              <span className="p-0.5 bg-red-600 w-1/3 mx-2 rounded-lg"></span>
                              <span className="p-0.5 bg-gray-100 w-1/3 mx-2 rounded-lg"></span>
                            </div>

                            <span
                              className="cursor-pointer px-2 bg-white rounded-full drop-shadow-lg m-2"
                              onClick={() => setStep(step - 1)}
                            >
                              {'<'}
                            </span>

                            <div className="m-2">
                              <p className="text-base text-slate-700 font-bold my-4">
                                Ad information
                              </p>
                              <div className="py-4">
                                {(subCategory || []).length > 0 && (
                                  <InputSelect
                                    id="subCategory"
                                    placeholder="Select a a sub category"
                                    data={subCategory || []}
                                    name="sub_category_id"
                                    value={form.sub_category_id}
                                    onChange={(e) =>
                                      setForm({
                                        ...form,
                                        sub_category_id: e.target.value,
                                      })
                                    }
                                    required
                                  />
                                )}

                                <div>
                                  <p className="font-bold my-4">Add Photos</p>
                                  <p className="text-xs my-4 text-gray-400">
                                    Add at least 4 photos for this Ad
                                  </p>

                                  <div className="my-4 flex flex-wrap items-center gap-4">
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
                                      <p className="text-xs p-2 text-gray-400">
                                        ADD
                                      </p>
                                    </label>
                                    {(file || []).map((image, i) => (
                                      <div
                                        key={i}
                                        className="flex justify-center"
                                      >
                                        <img
                                          src={image}
                                          alt="shop online at ekohub"
                                          className="w-24 h-24 rounded-lg"
                                        />
                                        <p
                                          onClick={() => removeImage(i)}
                                          className="px-2 text-white bg-red-500 mx-2 rounded-full place-self-start cursor-pointer"
                                        >
                                          x
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="py-12">
                              <Button1
                                title="Next"
                                type="submit"
                                btnstyle={{ backgroundColor: colors.red }}
                              />
                            </div>
                          </form>
                        )}
                        {step === 2 && (
                          <form onSubmit={submitFormProduct}>
                            <div className="flex justify-center justify-between m-2 my-4">
                              <span className="p-0.5 bg-red-600 w-1/3 mx-2 rounded-lg"></span>
                              <span className="p-0.5 bg-gray-100 w-1/3 mx-2 rounded-lg"></span>
                              <span className="p-0.5 bg-gray-100 w-1/3 mx-2 rounded-lg"></span>
                            </div>

                            <span
                              className="cursor-pointer px-2 bg-white rounded-full drop-shadow-lg"
                              onClick={() => setStep(step - 1)}
                            >
                              {'<'}
                            </span>

                            <p className="text-base text-slate-700 font-bold my-4">
                              Ad information
                            </p>
                            <div className="p-4">
                              <Input1
                                type="text"
                                placeholder="Product name"
                                name="name"
                                onChange={(e) =>
                                  setForm({ ...form, name: e.target.value })
                                }
                                required
                                value={form.name}
                              />
                              <div className="bg-gray-100 rounded-2xl px-4 py-2">
                                <InputTextArea
                                  name="description"
                                  id=""
                                  rows="4"
                                  placeholder="Enter description"
                                  onChange={(e) =>
                                    setForm({
                                      ...form,
                                      description: e.target.value,
                                    })
                                  }
                                  required
                                  value={form.description}
                                />
                              </div>
                              <div>
                                <Input1
                                  type="number"
                                  placeholder="Price"
                                  name="price"
                                  onChange={(e) =>
                                    setForm({
                                      ...form,
                                      price: e.target.value,
                                    })
                                  }
                                  required
                                  value={form.price}
                                />
                                <div className="flex items-center py-2 justify-end">
                                  <input
                                    id="default-radio-2"
                                    type="radio"
                                    value={form.is_negotiable}
                                    name="is_negotialble"
                                    className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    checked={form.is_negotiable === true}
                                    onChange={(e) => {
                                      setForm({
                                        ...form,
                                        is_negotiable: !form.is_negotiable,
                                      });
                                      console.log(
                                        !form.is_negotiable,
                                        e.target.value,
                                      );
                                    }}
                                  />
                                  <label
                                    htmlFor="default-radio-2"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    Negotiable
                                  </label>
                                </div>
                              </div>
                              <InputSelect
                                id="currency"
                                placeholder="Choose Currency"
                                required
                                data={currencies}
                                value={form.currency_id}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    currency_id: e.target.value,
                                  })
                                }
                              />

                              <Input1
                                type="number"
                                placeholder="Quantity"
                                name="quantity"
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    quantity_provided: e.target.value,
                                  })
                                }
                                required
                                value={form.quantity_provided}
                              />

                              {(allFields || [])
                                .filter((item) => item.data === null)
                                .map((field, index) => {
                                  return (
                                    <>
                                      <p className="text-sm font-thin text-gray-400">
                                        {`${field.label} ${
                                          field.is_required && '*'
                                        }`}
                                      </p>
                                      <Input1
                                        type={field.type}
                                        placeholder={`${field.label} ${
                                          field.is_required && '*'
                                        }`}
                                        name={field?.field_name}
                                        value={field.value}
                                        required={field.is_required}
                                        key={index}
                                        onBlur={(e) => {
                                          setDetails([
                                            ...details,
                                            {
                                              ...field,
                                              value: e.target.value,
                                              data: null,
                                            },
                                          ]);
                                        }}
                                      />
                                    </>
                                  );
                                })}
                              {(allFields || fields || [])
                                .filter(
                                  (item) =>
                                    item.data !== null && !item.is_multiple,
                                )
                                .map((field, index) => {
                                  return (
                                    <>
                                      <p className="text-sm font-thin text-gray-400">
                                        {`${field.label} ${
                                          field.is_required && '*'
                                        }`}
                                      </p>
                                      <InputSelect
                                        id={field.field_name}
                                        placeholder={`${field.label} ${
                                          field.is_required && '*'
                                        }`}
                                        required={field.is_required}
                                        data={field.data}
                                        name={field?.field_name}
                                        value={field.value}
                                        onChange={(e) => {
                                          setDetails([
                                            ...details,
                                            {
                                              ...field,
                                              value: e.target.value,
                                              data: null,
                                            },
                                          ]);
                                        }}
                                        key={index}
                                      />
                                    </>
                                  );
                                })}
                              {(allFields || fields || [])
                                .filter(
                                  (item) =>
                                    item.data !== null && item.is_multiple,
                                )
                                .map((field, index) => {
                                  return (
                                    <>
                                      <p className="text-sm font-thin text-gray-400">
                                        {`${field.label} ${
                                          field.is_required && '*'
                                        }`}
                                      </p>
                                      <Select
                                        defaultValue={selectedOption}
                                        onChange={(e) =>
                                          setSelectedOption(
                                            e.map((opt) => opt.value),
                                          )
                                        }
                                        options={field.data}
                                        placeholder={`${field.label} ${
                                          field.is_required && '*'
                                        }`}
                                        name={field?.field_name}
                                        key={index}
                                        isMulti
                                        value={field.value}
                                        onBlur={() => {
                                          setDetails([
                                            ...details,
                                            {
                                              ...field,
                                              value: selectedOption,
                                              data: null,
                                            },
                                          ]);

                                          setSelectedOption(null);
                                        }}
                                        className="block bg-white w-full border border-gray-50 text-gray-900 rounded-lg my-3 shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 focus:ring-1 sm:text-sm"
                                      />
                                    </>
                                  );
                                })}
                              <div className="mt-4 flex">
                                <div className="flex items-center mx-4">
                                  <input
                                    id="status"
                                    type="radio"
                                    value={form.status}
                                    name="status"
                                    checked={form.status === 'active'}
                                    className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    onChange={(e) =>
                                      setForm({
                                        ...form,
                                        status: 'active',
                                      })
                                    }
                                  />
                                  <label
                                    htmlFor="status"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    Publish
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    id="status"
                                    type="radio"
                                    value={form.status}
                                    name="status"
                                    className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    checked={form.status === 'draft'}
                                    onChange={(e) =>
                                      setForm({
                                        ...form,
                                        status: 'draft',
                                      })
                                    }
                                  />
                                  <label
                                    htmlFor="status"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    Save to draft
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="py-12">
                              <Button1
                                title={
                                  loading
                                    ? 'Updating advert...'
                                    : 'Update advert'
                                }
                                type="submit"
                                btnstyle={{ backgroundColor: colors.red }}
                                disabled={loading}
                              />
                            </div>
                          </form>
                        )}
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
        <MobileLayout route="Profile" nav={false}>
          <div className="relative sticky top-0 z-50">
            <div className="">
              <div className="pimg bg-red-500 w-full rounded-b-3xl flex flex-col justify-center items-start p-4 py-8 ">
                <div className="flex items-center">
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
            </div>

            <div className="bg-white rounded-3xl drop-shadow-md p-4 mb-4">
              <div className="py-4">
                <div>
                  <p className="py-4">
                    <span className="text-xl text-slate-700 font-bold pb-2 my-4">
                      Edit New Advert
                    </span>
                  </p>

                  {step === 0 && (
                    <form onSubmit={() => setStep(1)}>
                      <div className="flex justify-center justify-between m-2 my-4">
                        <span className="p-0.5 bg-red-600 w-1/3 mx-2 rounded-lg"></span>
                        <span className="p-0.5 bg-gray-100 w-1/3 mx-2 rounded-lg"></span>
                        <span className="p-0.5 bg-gray-100 w-1/3 mx-2 rounded-lg"></span>
                      </div>
                      <p className="text-base text-slate-700 font-bold m-4">
                        Choose your advert category
                      </p>
                      <div className="grid grid-cols-3 gap-2 h-96 overflow-y-auto">
                        {(categories || []).map((category, i) => (
                          <div
                            key={i}
                            className="cursor-pointer bg-gray-100 p-2 rounded-2xl"
                            onClick={() =>
                              setForm({
                                ...form,
                                category_id: category.id,
                              })
                            }
                            style={{
                              borderColor:
                                form.category_id === category.id
                                  ? '#EB3352'
                                  : 'transparent',
                              borderWidth:
                                form.category_id === category.id
                                  ? '1px'
                                  : '0px',
                            }}
                          >
                            <div className="flex justify-end ">
                              <p
                                className="px-2 bg-white rounded-full drop-shadow-lg"
                                style={{
                                  color:
                                    form.category_id === category.id
                                      ? '#EB3352'
                                      : '#000',
                                }}
                              >
                                {'>'}
                              </p>
                            </div>
                            <p className="">{category.name}</p>
                          </div>
                        ))}
                      </div>
                      <div className="py-12">
                        <Button1
                          title="Next"
                          type="submit"
                          btnstyle={{
                            backgroundColor:
                              form.category_id == null
                                ? colors.disable
                                : '#EB3352',
                          }}
                          disabled={form.category_id == null}
                        />
                      </div>
                    </form>
                  )}
                  {step === 1 && (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (categoryFields.length > 0) {
                          if (
                            form.sub_category_id == null ||
                            form.sub_category_id == 'Select a a sub category'
                          ) {
                            showToast('Sub category is required', 'error');
                            return;
                          }
                        }
                        if (file.length < 1 && medias.length < 1) {
                          showToast('Product image required', 'error');
                          return;
                        }
                        setStep(2);
                      }}
                    >
                      <div className="flex justify-center justify-between m-2 my-4">
                        <span className="p-0.5 bg-red-600 w-1/3 mx-2 rounded-lg"></span>
                        <span className="p-0.5 bg-red-600 w-1/3 mx-2 rounded-lg"></span>
                        <span className="p-0.5 bg-gray-100 w-1/3 mx-2 rounded-lg"></span>
                      </div>

                      <span
                        className="cursor-pointer px-2 bg-white rounded-full drop-shadow-lg m-2"
                        onClick={() => setStep(step - 1)}
                      >
                        {'<'}
                      </span>

                      <div className="m-2">
                        <p className="text-base text-slate-700 font-bold my-4">
                          Ad information
                        </p>
                        <div className="py-4">
                          {(subCategory || []).length > 0 && (
                            <InputSelect
                              id="subCategory"
                              placeholder="Select a a sub category"
                              data={subCategory || []}
                              name="sub_category_id"
                              value={form.sub_category_id}
                              onChange={(e) =>
                                setForm({
                                  ...form,
                                  sub_category_id: e.target.value,
                                })
                              }
                              required
                            />
                          )}

                          <div>
                            <p className="font-bold my-4">Add Photos</p>
                            <p className="text-xs my-4 text-gray-400">
                              Add at least 4 photos for this Ad
                            </p>

                            <div className="my-4 flex items-center gap-4">
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
                              {(file || []).map((image, i) => (
                                <div key={i} className="flex justify-center">
                                  <img
                                    src={image}
                                    alt="shop online at ekohub"
                                    className="w-24 h-24 rounded-lg"
                                  />
                                  <p
                                    onClick={() => removeImage(i)}
                                    className="px-2 text-white bg-red-500 mx-2 rounded-full place-self-start cursor-pointer"
                                  >
                                    x
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="py-12">
                        <Button1
                          title="Next"
                          type="submit"
                          btnstyle={{ backgroundColor: colors.red }}
                        />
                      </div>
                    </form>
                  )}
                  {step === 2 && (
                    <form onSubmit={submitFormProduct}>
                      <div className="flex justify-center justify-between m-2 my-4">
                        <span className="p-0.5 bg-red-600 w-1/3 mx-2 rounded-lg"></span>
                        <span className="p-0.5 bg-gray-100 w-1/3 mx-2 rounded-lg"></span>
                        <span className="p-0.5 bg-gray-100 w-1/3 mx-2 rounded-lg"></span>
                      </div>

                      <span
                        className="cursor-pointer px-2 bg-white rounded-full drop-shadow-lg"
                        onClick={() => setStep(step - 1)}
                      >
                        {'<'}
                      </span>

                      <p className="text-base text-slate-700 font-bold my-4">
                        Ad information
                      </p>
                      <div className="p-4">
                        <Input1
                          type="text"
                          placeholder="Product name"
                          name="name"
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          required
                          value={form.name}
                        />
                        <div className="bg-gray-100 rounded-2xl px-4 py-2">
                          <InputTextArea
                            name="description"
                            id=""
                            rows="4"
                            placeholder="Enter description"
                            onChange={(e) =>
                              setForm({
                                ...form,
                                description: e.target.value,
                              })
                            }
                            required
                            value={form.description}
                          />
                        </div>
                        <div>
                          <Input1
                            type="number"
                            placeholder="Price"
                            name="price"
                            onChange={(e) =>
                              setForm({
                                ...form,
                                price: e.target.value,
                              })
                            }
                            required
                            value={form.price}
                          />
                          <div className="flex items-center py-2 justify-end">
                            <input
                              id="default-radio-2"
                              type="radio"
                              value={form.is_negotiable}
                              name="is_negotialble"
                              className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              checked={form.is_negotiable === true}
                              onChange={(e) => {
                                setForm({
                                  ...form,
                                  is_negotiable: !form.is_negotiable,
                                });
                                console.log(
                                  !form.is_negotiable,
                                  e.target.value,
                                );
                              }}
                            />
                            <label
                              htmlFor="default-radio-2"
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Negotiable
                            </label>
                          </div>
                        </div>
                        <InputSelect
                          id="currency"
                          placeholder="Choose Currency"
                          required
                          data={currencies}
                          value={form.currency_id}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              currency_id: e.target.value,
                            })
                          }
                        />

                        <Input1
                          type="number"
                          placeholder="Quantity"
                          name="quantity"
                          onChange={(e) =>
                            setForm({
                              ...form,
                              quantity_provided: e.target.value,
                            })
                          }
                          required
                          value={form.quantity_provided}
                        />

                        {(allFields || [])
                          .filter((item) => item.data === null)
                          .map((field, index) => {
                            return (
                              <>
                                <p className="text-sm font-thin text-gray-400">
                                  {`${field.label} ${field.is_required && '*'}`}
                                </p>
                                <Input1
                                  type={field.type}
                                  placeholder={`${field.label} ${
                                    field.is_required && '*'
                                  }`}
                                  name={field?.field_name}
                                  value={field.value}
                                  required={field.is_required}
                                  key={index}
                                  onBlur={(e) => {
                                    setDetails([
                                      ...details,
                                      {
                                        ...field,
                                        value: e.target.value,
                                        data: null,
                                      },
                                    ]);
                                  }}
                                />
                              </>
                            );
                          })}
                        {(allFields || fields || [])
                          .filter(
                            (item) => item.data !== null && !item.is_multiple,
                          )
                          .map((field, index) => {
                            return (
                              <>
                                <p className="text-sm font-thin text-gray-400">
                                  {`${field.label} ${field.is_required && '*'}`}
                                </p>
                                <InputSelect
                                  id={field.field_name}
                                  placeholder={`${field.label} ${
                                    field.is_required && '*'
                                  }`}
                                  required={field.is_required}
                                  data={field.data}
                                  name={field?.field_name}
                                  value={field.value}
                                  onChange={(e) => {
                                    setDetails([
                                      ...details,
                                      {
                                        ...field,
                                        value: e.target.value,
                                        data: null,
                                      },
                                    ]);
                                  }}
                                  key={index}
                                />
                              </>
                            );
                          })}
                        {(allFields || fields || [])
                          .filter(
                            (item) => item.data !== null && item.is_multiple,
                          )
                          .map((field, index) => {
                            return (
                              <>
                                <p className="text-sm font-thin text-gray-400">
                                  {`${field.label} ${field.is_required && '*'}`}
                                </p>
                                <Select
                                  defaultValue={selectedOption}
                                  onChange={(e) =>
                                    setSelectedOption(e.map((opt) => opt.value))
                                  }
                                  options={field.data}
                                  placeholder={`${field.label} ${
                                    field.is_required && '*'
                                  }`}
                                  name={field?.field_name}
                                  key={index}
                                  isMulti
                                  value={field.value}
                                  onBlur={() => {
                                    setDetails([
                                      ...details,
                                      {
                                        ...field,
                                        value: selectedOption,
                                        data: null,
                                      },
                                    ]);

                                    setSelectedOption(null);
                                  }}
                                  className="block bg-white w-full border border-gray-50 text-gray-900 rounded-lg my-3 shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 focus:ring-1 sm:text-sm"
                                />
                              </>
                            );
                          })}
                        <div className="mt-4 flex">
                          <div className="flex items-center mx-4">
                            <input
                              id="status"
                              type="radio"
                              value={form.status}
                              name="status"
                              checked={form.status === 'active'}
                              className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              onChange={(e) =>
                                setForm({
                                  ...form,
                                  status: 'active',
                                })
                              }
                            />
                            <label
                              htmlFor="status"
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Publish
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="status"
                              type="radio"
                              value={form.status}
                              name="status"
                              className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              checked={form.status === 'draft'}
                              onChange={(e) =>
                                setForm({
                                  ...form,
                                  status: 'draft',
                                })
                              }
                            />
                            <label
                              htmlFor="status"
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Save to draft
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="py-12">
                        <Button1
                          title={
                            loading ? 'Updating advert...' : 'Update advert'
                          }
                          type="submit"
                          btnstyle={{ backgroundColor: colors.red }}
                          disabled={loading}
                        />
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </MobileLayout>
      </Mobile>
    </>
  );
};
export default EditProduct;
