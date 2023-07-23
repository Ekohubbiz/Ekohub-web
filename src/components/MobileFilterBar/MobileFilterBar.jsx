import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
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
import './styles.scss';
import BottomSheet from '../BottomSheet/BottomSheet';
import { setIsOpen } from '../../redux/reducers/loaderSlice';

const MobileFilterBar = ({}) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const categoryFields = useSelector(getCategoryFields);
  const categories = useSelector(getCategories);
  const subCategories = useSelector(getSubCategory);
  const [openSheet, setOpenSheet] = useState(false);
  const [openSheet2, setOpenSheet2] = useState(false);
  const [openSheet3, setOpenSheet3] = useState(false);
  const [openSheet4, setOpenSheet4] = useState(false);
  const [details, setDetails] = useState([]);
  const [sortBy, setSortBy] = useState('lowest_price');
  const [sortByTitle, setSortByTitle] = useState('Lowest price');
  const [form, setForm] = useState({
    search: '',
    max_price: null,
    min_price: null,
    sort_by: 'lowest_price',
    category_id: id || null,
    sub_category_id: null,
    filters: details,
    paginate: 100,
  });
  console.log(id);
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
      dispatch(setSubCategory([]));
    };
  }, [form.category_id]);

  useEffect(() => {
    if (id) {
      dispatch(fetchSubCategory(id));
      setOpenSheet2(true);
    }
  }, [id]);

  useEffect(() => {
    applySearch();
    return () => {
      dispatch(setCategoryFields([]));
    };
  }, [form.category_id, form.sub_category_id]);

  useEffect(() => {
    applySearch();
  }, [sortBy]);

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
    <div className="">
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        <div
          onClick={() => setOpenSheet(true)}
          className="flex justify-around items-center border border-red-300 p-1 rounded-lg cursor-pointer"
        >
          {categories.filter((c) => c.id == form.category_id).length > 0 ? (
            categories
              .filter((c) => c.id == form.category_id)
              .map((c) => <p className="text-xs px-1">{c.name}</p>)
          ) : (
            <p className="text-xs px-1">All Categories</p>
          )}
        </div>
        <div
          onClick={() => setOpenSheet2(true)}
          className="flex justify-around items-center border border-red-300 p-1 rounded-lg cursor-pointer"
        >
          {subCategories.filter((c) => c.id == form.sub_category_id).length >
          0 ? (
            subCategories
              .filter((c) => c.id == form.sub_category_id)
              .map((c) => <p className="text-xs px-1">{c.name}</p>)
          ) : (
            <p className="text-xs px-1">All Sub categories</p>
          )}
        </div>
        <div
          onClick={() => setOpenSheet3(true)}
          className="flex justify-around items-center border border-red-300 p-1 rounded-lg"
        >
          <p className="text-xs px-1">price</p>
        </div>
      </div>
      <div className="my-2">
        <div
          onClick={() => setOpenSheet4(true)}
          className="flex justify-around items-center border border-red-300 p-1 rounded-lg w-40"
        >
          <p className="text-xs px-1">Sort by {sortByTitle}</p>
        </div>
      </div>
      <BottomSheet
        title="Categories"
        isOpen={openSheet}
        onClose={() => setOpenSheet(false)}
      >
        {categories.map((category, i) => (
          <>
            <div
              key={i}
              onClick={() => {
                setOpenSheet(false);
                setForm({ ...form, category_id: category.id });
              }}
              className="p-4"
            >
              <p className="text-md cursor-pointer text-gray-600 flex justify-between items-center">
                {category.name}
                <span>{'>'}</span>
              </p>
              <p className="text-xs text-gray-400">
                {category?.product_count}
                {' ads '}
              </p>
            </div>
            <hr />
          </>
        ))}
      </BottomSheet>
      <BottomSheet
        title="Sub categories"
        isOpen={openSheet2}
        onClose={() => setOpenSheet2(false)}
      >
        {subCategories.map((category, i) => (
          <>
            <div
              key={i}
              onClick={() => {
                setOpenSheet2(false);
                setForm({ ...form, sub_category_id: category.id });
                if (id) {
                  dispatch(setIsOpen(true));
                  navigate(
                    `/category-product/${id}?sub_category_id=${category.id}`,
                  );
                }
              }}
              className="p-4"
            >
              <p className="text-md cursor-pointer text-gray-600 flex justify-between items-center">
                {category.name}
                <span>{'>'}</span>
              </p>
              <p className="text-xs text-gray-400">
                {category?.product_count}
                {' ads '}
              </p>
            </div>
            <hr />
          </>
        ))}
      </BottomSheet>
      <BottomSheet
        title="Price range"
        isOpen={openSheet3}
        onClose={() => setOpenSheet3(false)}
      >
        <div className="mx-8 my-4">
          <div className="flex justify-between px-4">
            <div className="">
              <p className="text-xs text-slate-700 my-4">Min</p>
              <input
                type="number"
                className="form-control w-36 h-10 border border-gray-200 rounded-lg"
                value={form.min_price || ''}
                onChange={(e) =>
                  setForm({
                    ...form,
                    min_price: parseInt(e.target.value),
                  })
                }
              />
            </div>

            <div className="ml-2">
              <p className="text-xs text-slate-700 my-4">Max</p>
              <input
                type="number"
                className="form-control w-36 h-10 border border-gray-200 rounded-lg"
                value={form.max_price || ''}
                onChange={(e) =>
                  setForm({
                    ...form,
                    max_price: parseInt(e.target.value),
                  })
                }
              />
            </div>
          </div>
          <button
            onClick={() => {
              applySearchM();
              setOpenSheet3(false);
            }}
            className="p-2 rounded-xl text-white text-sm bg-btn-red w-full my-16"
          >
            Apply
          </button>
        </div>
      </BottomSheet>
      <BottomSheet
        title="Sort"
        isOpen={openSheet4}
        onClose={() => setOpenSheet4(false)}
      >
        {[
          { id: 'highest_price', name: 'Highest Price' },
          { id: 'lowest_price', name: 'Lowest Price' },
          { id: 'newest', name: 'Recent' },
          { id: 'oldest', name: 'Oldest' },
        ].map((category, i) => (
          <>
            <p
              key={i}
              onClick={() => {
                setOpenSheet4(false);
                setSortBy(category.id);
                setSortByTitle(category.name);
              }}
              className="text-md cursor-pointer p-4 my-1 text-gray-600"
            >
              {category.name}
            </p>
            <hr />
          </>
        ))}
      </BottomSheet>
    </div>
  );
};

export default MobileFilterBar;
