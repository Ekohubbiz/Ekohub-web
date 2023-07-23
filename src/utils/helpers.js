import { toast } from 'react-toastify';
import moment from 'moment';

export const formatDate = (date, formatString = 'DD-MMM-YYYY') =>
  date ? moment(date).format(formatString) : '';

export const maxDateForDobField = () =>
  moment(new Date()).subtract(13, 'years').toDate();

export const getDateDifference = (date) => (date ? moment(date).fromNow() : '');

export const getYears = (from, to) => {
  const years = [];

  for (let i = from; i <= to; i += 1) {
    years.push(i);
  }

  return years;
};

export const getDateAfterPeriod = (
  date,
  periodType,
  period,
  formatString = 'MM/DD/YYYY',
) => moment(date).add(period, periodType).format(formatString);

export const numberWithCommas = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const truncate = (s, n) => {
  return s.length > n ? s.substring(0, n - 1) + '...' : s;
};

export const showToast = (msg, type) => {
  switch (type) {
    case 'error':
      return toast.error(msg, {
        position: 'top-right',
        autoClose: 3000,
      });
      break;
    case 'success':
      return toast.success(msg, {
        position: 'top-right',
        autoClose: 3000,
      });
      break;
    default:
      return toast(msg, {
        position: 'top-right',
        autoClose: 3000,
      });
      break;
  }
};

export const arrayCompare = (arr1, arr2) => {
  const arr1Copy = [...arr1];
  const arr2Copy = [...arr2];

  arr1Copy.sort((a, b) => (a > b ? 1 : -1));
  arr2Copy.sort((a, b) => (a > b ? 1 : -1));

  return JSON.stringify(arr1Copy) === JSON.stringify(arr2Copy);
};

export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
