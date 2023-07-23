import Api from '../../api';
import { showToast } from '../../utils/helpers';
import { setLoading } from '../reducers/loaderSlice';

// thunks

export const uploadImagesMultiple = (credentials) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await Api.images.multiple(credentials);
    dispatch(setLoading(false));
    console.log(res.data.data.media_urls);
    return res.data.data.media_urls;
  } catch (error) {
    dispatch(setLoading(false));
    showToast('An error occurred!', 'error');
    console.log(error);
  }
};

export const uploadImagesSingle = (credentials) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await Api.images.single(credentials);
    dispatch(setLoading(false));
    console.log(res.data.data.media_url);
    return res.data.data.media_url;
  } catch (error) {
    dispatch(setLoading(false));
    showToast('An error occurred!', 'error');
    console.log(error);
  }
};
