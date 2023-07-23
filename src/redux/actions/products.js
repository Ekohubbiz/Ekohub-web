import Api from '../../api';
import { showToast } from '../../utils/helpers';
import { setLoading } from '../reducers/loaderSlice';
import {
  setCategoryProducts,
  setDiscover,
  setDiscoverOne,
  setFavourites,
  setMerchantProducts,
  setOwnerStoreProducts,
  setPagination,
  setProduct,
  setProducts,
  setRecentlyViewed,
  setRelated,
  setReviews,
  setSearchProducts,
  setSimilar,
} from '../reducers/productSlice';

// thunks
export const fetchAllProducts = (filter) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await Api.products.all(filter);
    dispatch(setProducts(res.data.data.products));
    dispatch(setPagination(res.data.data.pagination));
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    // showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const fetchFavouriteProducts = (filter) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await Api.products.favourite(filter);
    dispatch(setFavourites(res.data.data.favourite_products));
    dispatch(setPagination(res.data.data.pagination));
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    // showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const fetchCategoryProducts = (filter) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await Api.products.all(filter);
    dispatch(setCategoryProducts(res.data.data.products));
    dispatch(setPagination(res.data.data.pagination));
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    // showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const fetchDynamicSearchProducts = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await Api.search.dynamicSearchProduct(data);
    dispatch(setSearchProducts(res.data.data.products));
    dispatch(setPagination(res.data.data.pagination));
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    // showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const fetchAllOwnerStoreProducts = (id, status) => async (dispatch) => {
  try {
    const res = await Api.products.storeOwnerProduct(id, status);
    dispatch(setOwnerStoreProducts(res.data.data.products));
    dispatch(setPagination(res.data.data.pagination));
  } catch (error) {
    console.log(error);
    // showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const fetchStoreProducts = (id, filter) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await Api.products.storeProduct(id, filter);
    dispatch(setOwnerStoreProducts(res.data.data.products));
    dispatch(setPagination(res.data.data.pagination));
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    // showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const fetchMerchantProducts = (filter) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await Api.products.all(filter);
    dispatch(setMerchantProducts(res.data.data.products));
    dispatch(setPagination(res.data.data.pagination));
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    // showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const fetchSearchProducts = (filter) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await Api.search.searchProducts(filter);
    dispatch(setSearchProducts(res.data.data.products));
    dispatch(setPagination(res.data.data.pagination));
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    // showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const fetchDiscoverProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await Api.products.discover();
    dispatch(setDiscover(res.data.data.discoveries));
    dispatch(setPagination(res.data.data.pagination));
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    // showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const fetchSingleDiscover = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await Api.products.discoverOne(id);
    dispatch(setDiscoverOne(res.data.data.discovery));
    // dispatch(setPagination(res.data.data.pagination));
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    // showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const fetchSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    // const res = await Api.products.single(id);
    const res = await Api.products.singleSlug(id);
    dispatch(setProduct(res.data.data.product));
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    // showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const fetchSimilarProducts = (id) => async (dispatch) => {
  try {
    // dispatch(setLoading(true));
    const res = await Api.products.related(id);
    dispatch(setSimilar(res.data.data.related_products));
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    // showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const fetchReviewsProducts = (id) => async (dispatch) => {
  try {
    const res = await Api.products.reviews(id);
    dispatch(setReviews(res.data.data.product_reviews));
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    // showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const createStoreProduct = (credentials) => async (dispatch) => {
  try {
    // dispatch(setLoading(true));
    const res = await Api.products.createProduct(credentials);
    if (res.data.hasError) {
      showToast(res.data.errors.message, 'error');
      return;
    }
    dispatch(fetchAllOwnerStoreProducts(credentials.store_id));
    showToast(res.data.title, 'success');
    return true;
  } catch (error) {
    console.log(error);
    showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
    return false;
  }
};

export const editStoreProduct = (credentials) => async (dispatch) => {
  try {
    // dispatch(setLoading(true));
    const res = await Api.products.editProduct(credentials);
    if (res.data.hasError) {
      showToast(res.data.errors.message, 'error');
      return;
    }
    dispatch(fetchAllOwnerStoreProducts(credentials.store_id));
    showToast(res.data.title, 'success');
  } catch (error) {
    console.log(error);
    showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const addFavouriteProduct = (credentials) => async (dispatch) => {
  try {
    // dispatch(setLoading(true));
    const res = await Api.products.addFavourite(credentials);
    if (res.data.hasError) {
      showToast(res.data.errors.message, 'error');
      return;
    }
    // dispatch(fetchAllOwnerStoreProducts(credentials.store_id));
    showToast(res.data.title, 'success');
    showToast('Item added to favourites', 'success');
  } catch (error) {
    console.log(error);
    showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const removeFavouriteProduct = (id) => async (dispatch) => {
  try {
    // dispatch(setLoading(true));
    const res = await Api.products.removeFavourite(id);
    if (res.data.hasError) {
      showToast(res.data.errors.message, 'error');
      return;
    }
    // showToast(res.data.title, 'success');
    showToast('Item removed from favourites', 'success');
  } catch (error) {
    console.log(error);
    showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const addReviewProduct = (credentials) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await Api.products.addReview(credentials);
    if (res.data.hasError) {
      showToast(res.data.errors.message, 'error');
      dispatch(setLoading(false));
      return;
    }
    dispatch(setLoading(false));
    dispatch(fetchSingleProduct(credentials.product_id));
    showToast(res.data.title, 'success');
  } catch (error) {
    console.log(error);
    showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const fetchRelatedProduct = (id, data) => async (dispatch) => {
  try {
    const res = await Api.products.related(id, data);
    dispatch(setRelated(res.data.data.related_products));
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    // showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const fetchRecentlyViewedProduct = () => async (dispatch) => {
  try {
    const res = await Api.products.recentlyViewed();
    dispatch(setRecentlyViewed(res.data.data.recently_viewed_products));
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    // showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const sendProductConversation = (credentials) => async (dispatch) => {
  try {
    const res = await Api.conversations.send(credentials);
    if (res.data.hasError) {
      // showToast(res.data.errors.message, 'error');
      return;
    }
  } catch (error) {
    console.log(error);
    dispatch(setLoading(false));
  }
};
