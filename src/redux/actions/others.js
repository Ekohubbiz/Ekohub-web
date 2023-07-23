import Api from '../../api';
import { setFaq } from '../reducers/faqSlice';
import { setLoading } from '../reducers/loaderSlice';
import { setNotifications } from '../reducers/notificationSlice';

// thunks
export const fetchNotifications = (data) => async (dispatch) => {
  try {
    const res = await Api.notifications.all(data);
    dispatch(setNotifications(res.data.data.notifications));
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    // showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};

export const fetchFaqs = (data) => async (dispatch) => {
  try {
    const res = await Api.faq.all(data);
    dispatch(setFaq(res.data.data.faqs));
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    // showToast('An error occurred!', 'error');
    dispatch(setLoading(false));
  }
};
