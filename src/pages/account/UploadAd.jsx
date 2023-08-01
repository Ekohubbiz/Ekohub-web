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
import { getUserStore } from '../../redux/reducers/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrency } from '../../redux/reducers/currencySlice';
import {
  getCategories,
  getCategoryFields,
  getSubCategory,
  setCategoryFields,
} from '../../redux/reducers/categorySlice';
import {
  fetchAllCategories,
  fetchCategoryFields,
  fetchSubCategory,
} from '../../redux/actions/categories';
import {
  uploadImagesMultiple,
  uploadImagesSingle,
} from '../../redux/actions/images';
import {
  createStoreProduct,
  fetchStoreProducts,
} from '../../redux/actions/products';
import './styles.scss';
import { showToast } from '../../utils/helpers';

const UploadAds = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currencies = useSelector(getCurrency);
  const categories = useSelector(getCategories);
  const subCategories = useSelector(getSubCategory);
  const categoryFields = useSelector(getCategoryFields);
  const stores = useSelector(getUserStore);
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    quantity_provided: 1,
    currency_id: 1,
    store_id: stores?.id,
    category_id: null,
    sub_category_id: null,
    media_urls: [],
    is_negotiable: false,
    status: 'active',
    details: [],
  });
  const [step, setStep] = useState(0);
  const [file, setFile] = useState([]);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    dispatch(
      fetchCategoryFields({
        id: form.category_id,
        subId: form.sub_category_id,
      }),
    );
    dispatch(fetchSubCategory(form.category_id));

    return () => {
      dispatch(setCategoryFields([]));
    };
  }, [form.category_id, form.sub_category_id]);

  const uploadFile = async (e) => {
    const fd = new FormData();
    fd.append('media', e.target.files[0], 'media');
    setLoading(true);
    const res = await dispatch(uploadImagesSingle(fd));
    setLoading(false);
    setFile([...file, res]);
  };

  const removeImage = (imageIndex) => {
    console.log('remove');
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
      const res = dispatch(createStoreProduct(data));
      if (res) {
        setDetails([]);
        setLoading(false);
        setForm({
          name: '',
          description: '',
          price: '',
          quantity: 1,
          currency_id: 1,
          store_id: stores?.id,
          category_id: null,
          sub_category_id: null,
          media_urls: [],
          is_negotiable: false,
          status: 'active',
          details: [],
        });
        setFile([]);
        setStep(0);
        navigate(paths.PROFILE, { nav: 'product' });
        // window.location.reload();
      }
      setLoading(false);
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

  console.log(file);
  return (
    <>
      <div className="py-4">
        <div>
          <p className="py-4">
            <span className="text-xl text-slate-700 font-bold pb-2 my-4">
              New Advert
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
                        form.category_id === category.id ? '1px' : '0px',
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
                    <p className="text-sm">{category.name}</p>
                  </div>
                ))}
              </div>

              <div className="py-12">
                <Button1
                  title="Next"
                  type="submit"
                  btnstyle={{
                    backgroundColor:
                      form.category_id == null ? colors.disable : '#EB3352',
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
                if (file.length < 1) {
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

                    <div className="my-4 flex flex-wrap items-center gap-4 overflow-y-auto">
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
                        <p key={i} className="flex justify-center">
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
                        </p>
                      ))}

                      {loading && (
                        <div role="status">
                          <svg
                            aria-hidden="true"
                            class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            ></path>
                          </svg>
                          <span class="sr-only">Loading...</span>
                        </div>
                      )}
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
                <span className="p-0.5 bg-red-600 w-1/3 mx-2 rounded-lg"></span>
                <span className="p-0.5 bg-red-600 w-1/3 mx-2 rounded-lg"></span>
              </div>
              <span
                className="cursor-pointer px-2 bg-white rounded-full drop-shadow-lg"
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                {'<'}
              </span>
              <p className="text-base font-bold my-8">Product details</p>
              <div className="my-4">
                <Input1
                  type="text"
                  placeholder="Ad Title*"
                  name="name"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  value={form.name}
                  required
                />
                <div className="bg-gray-100 rounded-2xl px-4 py-2">
                  <InputTextArea
                    name="description"
                    id=""
                    rows="4"
                    placeholder="Description*"
                    value={form.description}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        description: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div>
                  <Input1
                    type="number"
                    placeholder="Price*"
                    name="price"
                    value={form.price}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        price: e.target.value,
                      })
                    }
                    required
                  />
                  <div className="flex items-center py-2 justify-end">
                    <input
                      id="default-radio-2"
                      type="radio"
                      value="is_negotialble"
                      name="is_negotialble"
                      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked={form.is_negotiable === true}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          is_negotiable: e.target.value === 'is_negotialble',
                        })
                      }
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
                  placeholder="Choose Currency *"
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
                  placeholder="Quantity *"
                  name="quantity"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      quantity_provided: e.target.value,
                    })
                  }
                  required
                />
              </div>
              {(categoryFields || [])
                .filter((item) => item.data === null)
                .map((field, index) => {
                  return (
                    <>
                      <p className="text-sm font-thin text-gray-600">
                        {field.label} {field.is_required && '*'}
                      </p>
                      <Input1
                        type={field.type}
                        placeholder={`${field.label} ${
                          field.is_required && '*'
                        }`}
                        name={field?.field_name}
                        onChange={(e) => console.log(e.target.value)}
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
              {(categoryFields || fields || [])
                .filter((item) => item.data !== null && !item.is_multiple)
                .map((field, index) => {
                  return (
                    <>
                      <p className="text-sm font-thin text-gray-600">
                        {field.label} {field.is_required && '*'}
                      </p>
                      <InputSelect
                        id={field.field_name}
                        placeholder={`${field.label} ${
                          field.is_required && '*'
                        }`}
                        required={field.is_required}
                        data={field.data}
                        name={field?.field_name}
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
              {(categoryFields || fields || [])
                .filter((item) => item.data !== null && item.is_multiple)
                .map((field, index) => {
                  return (
                    <>
                      <p className="text-sm font-thin text-gray-600">
                        {field.label} {field.is_required && '*'}
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

              <div className="py-2 flex">
                <div className="flex items-center mx-4">
                  <input
                    id="status"
                    type="radio"
                    value="active"
                    name="status"
                    checked={form.status === 'active'}
                    className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        status: e.target.value,
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
                    value="draft"
                    name="status"
                    className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked={form.status === 'draft'}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        status: e.target.value,
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
              <div className="flex my-2">
                <input
                  required
                  type="checkbox"
                  className="p-2 rounded-md focus:bg-red-400"
                />
                <p className="ml-2 text-xs text-gray-400">
                  By clicking on upload advert, you have agree to our{' '}
                  <Link to={paths.TOC} className="hover:text-red-400 underline">
                    Terms and Conditions
                  </Link>{' '}
                  and{' '}
                  <Link
                    to={paths.POLICY}
                    className="hover:text-red-400 underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
              <div className="py-12">
                <Button1
                  title={loading ? 'Uploading advert...' : 'Upload advert'}
                  type="submit"
                  btnstyle={{ backgroundColor: colors.red }}
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};
export default UploadAds;
