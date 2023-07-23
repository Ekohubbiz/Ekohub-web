import { connectRouter } from 'connected-react-router';
import { authReducer } from './reducers/authSlice';
import { categoriesReducer } from './reducers/categorySlice';
import { currencyReducer } from './reducers/currencySlice';
import { loaderReducer } from './reducers/loaderSlice';
import { productsReducer } from './reducers/productSlice';
import { storesReducer } from './reducers/storeSlice';
import { notificationReducer } from './reducers/notificationSlice';
import { faqReducer } from './reducers/faqSlice';

export const createRootReducer = (history) => ({
  router: connectRouter(history),
  loader: loaderReducer,
  categories: categoriesReducer,
  currency: currencyReducer,
  user: authReducer,
  products: productsReducer,
  stores: storesReducer,
  notifications: notificationReducer,
  faqs: faqReducer,
});
