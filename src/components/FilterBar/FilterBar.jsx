import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Sheet from 'react-modal-sheet';
import {
  fetchCategoryFields,
  fetchCategoryFieldsFilter,
  fetchSubCategory,
} from '../../redux/actions/categories';
import { fetchDynamicSearchProducts } from '../../redux/actions/products';
import {
  getCategories,
  getCategoryFields,
  getSubCategory,
  setCategoryFields,
  setSubCategory,
} from '../../redux/reducers/categorySlice';
import { InputSelect } from '../shared/Inputs';
import { setIsOpen } from '../../redux/reducers/loaderSlice';
import { isMobile } from 'react-device-detect';
import { Desktop, Mobile } from '../../layout';

const FilterBar = ({ id, state, searchText, sort, query }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categoryFields = useSelector(getCategoryFields);
  const categories = useSelector(getCategories);
  const subCategories = useSelector(getSubCategory);
  const [details, setDetails] = useState([]);
  const [form, setForm] = useState({
    search: searchText,
    max_price: null,
    min_price: null,
    sort_by: 'lowest_price',
    category_id: parseInt(id) || query.get('category') || null,
    sub_category_id:
      state?.subCategoryId || query.get('sub_category_id') || null,
    filters: details,
    paginate: 100,
  });

  useEffect(() => {
    dispatch(
      fetchCategoryFieldsFilter(form.category_id, {
        sub_category_id: form.sub_category_id,
        can_be_filtered: true,
      }),
    );
    return () => {
      dispatch(setCategoryFields([]));
    };
  }, [form.category_id, form.sub_category_id]);

  useEffect(() => {
    dispatch(fetchSubCategory(form.category_id));
    return () => {
      // dispatch(setSubCategory([]));
    };
  }, [form.category_id]);

  useEffect(() => {
    const data = {
      ...form,
      filters: details,
      sort_by: sort,
    };
    dispatch(fetchDynamicSearchProducts(data));
  }, [sort]);

  useEffect(() => {
    applySearch();
    return () => {
      dispatch(setCategoryFields([]));
    };
  }, [form.category_id, form.sub_category_id]);

  const applySearch = async () => {
    const data = {
      ...form,
      filters: details,
    };
    await dispatch(fetchDynamicSearchProducts(data));
    // setDetails([]);
  };

  const applySearchM = async () => {
    const data = {
      ...form,
      filters: details,
    };
    await dispatch(fetchDynamicSearchProducts(data));
    dispatch(setIsOpen(false));
    // setDetails([]);
  };

  const clearAll = () => {
    setForm({
      search: '',
      max_price: null,
      min_price: null,
      sort_by: 'lowest_price',
      category_id: null,
      sub_category_id: null,
      filters: [],
      paginate: 100,
    });
    applySearch();
  };

  return (
    <>
      <Desktop>
        <div className="rounded-xl sticky top-4 overflow-y-auto">
          <div className="rounded-xl bg-white drop-shadow-md p-4 overflow-y-auto">
            <p className="text-color font-bold text-xl">Categories</p>
            <Link
              to={`/category-product/${id}`}
              state={{ categoryName: state?.categoryName }}
              className="text-color text-base"
            >
              {state?.categoryName || ''}
            </Link>
            <hr />
            <div className="overflow-y-auto h-44">
              <p
                onClick={() => {
                  setForm({
                    ...form,
                    category_id: null,
                    sub_category_id: null,
                  });
                  navigate(`/search-product?item=${searchText}`);
                }}
                className="text-sm cursor-pointer p-1 my-1 rounded-md"
                style={{
                  backgroundColor:
                    form.category_id == null ? '#ed4a57' : 'transparent',
                  color: form.category_id == null ? '#fff' : '#000',
                }}
              >
                All
              </p>
              {(categories || []).map((category) => (
                <>
                  <p
                    onClick={() => {
                      setForm({
                        ...form,
                        category_id: category.id,
                        sub_category_id: null,
                      });
                      navigate(
                        `/search-product?item=${searchText}&category=${category.id}`,
                      );
                    }}
                    className="text-sm cursor-pointer p-1 my-1 rounded-md"
                    style={{
                      backgroundColor:
                        form.category_id == category.id
                          ? '#ed4a57'
                          : 'transparent',
                      color: form.category_id == category.id ? '#fff' : '#000',
                    }}
                  >
                    {category.name}
                  </p>
                  <hr />
                </>
              ))}
            </div>
          </div>

          {subCategories.length > 0 && (
            <div className="rounded-xl bg-white drop-shadow-md p-4 overflow-y-auto my-4">
              <p className="text-color font-bold text-xl">Sub categories</p>
              <hr />
              <div className="overflow-y-auto h-44">
                {(subCategories || []).map((category) => (
                  <>
                    <p
                      onClick={() => {
                        setForm({ ...form, sub_category_id: category.id });
                        navigate(
                          `/search-product?item=${searchText}&category=${form.category_id}&sub_category_id=${category.id}`,
                        );
                      }}
                      className="text-sm cursor-pointer p-1 my-1 rounded-md"
                      style={{
                        backgroundColor:
                          form.sub_category_id == category.id
                            ? '#ed4a57'
                            : 'transparent',
                        color:
                          form.sub_category_id == category.id ? '#fff' : '#000',
                      }}
                    >
                      {category.name}
                    </p>
                    <hr />
                  </>
                ))}
              </div>
            </div>
          )}
          <div className=" rounded-lg p-4 my-4">
            <p className="text-color font-bold my-2">Price range</p>
            <div className="flex justify-between">
              <div>
                <p className="text-xs text-slate-700">Min</p>
                <input
                  type="number"
                  className="form-control h-8 w-24 border border-gray-200 rounded-lg"
                  value={form.min_price}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      min_price: parseInt(e.target.value),
                    })
                  }
                />
              </div>
              <div>
                <p className="text-xs text-slate-700">Max</p>
                <input
                  type="number"
                  className="form-control h-8 w-24 border border-gray-200 rounded-lg"
                  value={form.max_price}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      max_price: parseInt(e.target.value),
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div>
            {(categoryFields || [])
              .filter((item) => item.data !== null && !item.is_multiple)
              .map((field, index) => {
                return (
                  <div className="p-1">
                    <p className="text-sm font-thin text-gray-600">
                      {field.label}
                    </p>
                    <InputSelect
                      id={field.field_name}
                      placeholder={field.label}
                      required={field.is_required}
                      data={field.data}
                      name={field?.field_name}
                      onChange={(e) => {
                        setDetails([
                          ...details,
                          {
                            value: e.target.value,
                            field_name: field?.field_name,
                          },
                        ]);
                      }}
                      key={index}
                    />
                  </div>
                );
              })}
          </div>

          <div>
            <button
              onClick={applySearchM}
              className="p-2 rounded-xl text-white text-sm bg-btn-red w-full my-2"
            >
              Apply
            </button>
            <button
              onClick={clearAll}
              className="p-2 rounded-xl text-sm border border-slate-400  w-full my-2"
            >
              Clear All
            </button>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <div className="rounded-xl sticky top-4 overflow-y-auto px-4">
          <InputSelect
            id={`categories`}
            placeholder={`Select category`}
            required
            data={categories}
            value={form.category_id}
            onChange={(e) => {
              setForm({
                ...form,
                category_id: e.target.value,
                sub_category_id: null,
              });
              // navigate(
              //   `/search-product?item=${searchText}&category=${e.target.value}`,
              // );
            }}
          />

          {subCategories.length > 0 && (
            <InputSelect
              id={`subCategories`}
              placeholder={`Select sub category`}
              required
              data={subCategories}
              value={form.sub_category_id}
              onChange={(e) => {
                setForm({ ...form, sub_category_id: e.target.value });
                // navigate(
                //   `/search-product?item=${searchText}&category=${form.category_id}&sub_category_id=${e.target.value}`,
                // );
              }}
            />
          )}
          <div className=" rounded-lg p-4 my-4">
            <p className="text-color font-bold my-2">Price range</p>
            <div className="flex justify-between">
              <div>
                <p className="text-xs text-slate-700">Min</p>
                <input
                  type="number"
                  className="form-control h-8 w-24 border border-gray-200 rounded-lg"
                  value={form.min_price}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      min_price: parseInt(e.target.value),
                    })
                  }
                />
              </div>
              <div>
                <p className="text-xs text-slate-700">Max</p>
                <input
                  type="number"
                  className="form-control h-8 w-24 border border-gray-200 rounded-lg"
                  value={form.max_price}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      max_price: parseInt(e.target.value),
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div>
            {(categoryFields || [])
              .filter((item) => item.data !== null && !item.is_multiple)
              .map((field, index) => {
                return (
                  <div key={index} className="p-1">
                    <p className="text-sm font-thin text-gray-600">
                      {field.label}
                    </p>
                    <InputSelect
                      id={field.field_name}
                      placeholder={field.label}
                      required={field.is_required}
                      data={field.data}
                      name={field?.field_name}
                      onChange={(e) => {
                        setDetails([
                          ...details,
                          {
                            value: e.target.value,
                            field_name: field?.field_name,
                          },
                        ]);
                      }}
                    />
                  </div>
                );
              })}
          </div>

          <div>
            <button
              onClick={applySearchM}
              className="p-2 rounded-xl text-white text-sm bg-btn-red w-full my-2"
            >
              Show
            </button>
            <button
              onClick={clearAll}
              className="p-2 rounded-xl text-sm border border-slate-400  w-full my-2"
            >
              Clear All
            </button>
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default FilterBar;
