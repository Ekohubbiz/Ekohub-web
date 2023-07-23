import Api from '../../api';
import {
  setCategories,
  setBusinessCategories,
  setCategoryFields,
  setSubCategory,
} from '../reducers/categorySlice';
import { setLoading } from '../reducers/loaderSlice';

// thunks
export const fetchAllCategories = () => async (dispatch) => {
  try {
    const res = await Api.categories.all();
    dispatch(setCategories(res.data.data.categories));
    return true;
  } catch (error) {
    console.log(error);
    dispatch(setLoading(false));
    return false;
  }
};

export const fetchAllBusinessCategories = () => async (dispatch) => {
  try {
    const res = await Api.categories.business();
    dispatch(setBusinessCategories(res.data.data.business_categories));
  } catch (error) {
    console.log(error);
    dispatch(setLoading(false));
  }
};

export const fetchCategoryFields = (filter) => async (dispatch) => {
  try {
    const res = await Api.categories.categoryFields(filter);
    dispatch(setCategoryFields(res.data.data.details_schema?.fields || []));
  } catch (error) {
    console.log(error);
    dispatch(setLoading(false));
  }
};

export const fetchCategoryFieldsFilter = (id, filter) => async (dispatch) => {
  try {
    const res = await Api.categories.categoryFieldsFilter(id, filter);
    dispatch(setCategoryFields(res.data.data.details_schema?.fields || []));
  } catch (error) {
    console.log(error);
    dispatch(setLoading(false));
  }
};

export const fetchSubCategory = (id) => async (dispatch) => {
  try {
    const res = await Api.categories.subCategory(id);
    dispatch(setSubCategory(res.data.data.sub_categories));
  } catch (error) {
    console.log(error);
    dispatch(setLoading(false));
  }
};
