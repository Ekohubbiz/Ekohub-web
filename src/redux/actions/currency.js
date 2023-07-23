import { toast } from 'react-toastify';
import Api from '../../api';
import { setCurrency } from '../reducers/currencySlice';
import { setLoading } from '../reducers/loaderSlice';

// thunks
export const fetchAllCurrency = () => async (dispatch) => {
  try {
    const res = await Api.currency.all();
    dispatch(setCurrency(res.data.data.currencies));
  } catch (error) {
    console.log(error);
    dispatch(setLoading(false));
  }
};
