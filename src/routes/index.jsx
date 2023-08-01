import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { paths } from '../constants';

// pages
import ErrorPage from '../pages/error/ErrorPage';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import ProtectedRoutes from './ProtectedRoutes';
import Signin from '../pages/signin/Signin';
import Signup from '../pages/signup/Signup';
import CategoryProduct from '../pages/categoryproduct/CategoryProduct';
import ForgotPassword from '../pages/forgotpassword/forgotPassword';
import Product from '../pages/product/Product';
import Checkout from '../pages/checkout/Checkout';
import SearchProduct from '../pages/searchproduct/SearchProduct';
import SellingAuth from '../pages/sellingauth/SellingAuth';
import ScrollTop from '../components/shared/scrolltop/ScrollTop';
import ChatMessages from '../pages/messages/Messages';
import FavouriteProduct from '../pages/favouriteproduct/FavouriteProduct';
import Discover from '../pages/discover/Discover';
import Profile from '../pages/profile/Profile';
import PublicRoutes from './PublicRoutes';
import Auth from '../middleware/storage';
import Promotion from '../pages/promotion/Promotion';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../redux/actions/authuser';
import ForgotPasswordCode from '../pages/forgotpasswordcode/forgotPasswordCode';
import ProfileOther from '../pages/profileOther/ProfileOther';
import EditProduct from '../pages/product/Editproduct';
import Notifications from '../pages/notifications/Notifications';
import Merchants from '../pages/merchants/Merchants';
import DiscoverProducts from '../pages/discover/DiscoverProducts';
import { Helmet } from 'react-helmet';
import Toc from '../pages/toc/Toc';
import StoreProduct from '../pages/storeProduct/StoreProduct';
import Contactus from '../pages/contactus/Contactus';
import Policy from '../pages/policy/Policy';

function AppRoutes() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Helmet>
          <title>Ekohub</title>
          <meta
            name="description"
            content="Shop online a wide range of top-quality products from electronics, phones, and computers to fashion, shoes, household equipment, babies and kids items, toys, furniture, groceries, sport and fitness gear, properties, and more - all from the best brands in the market. Ekohub online shopping"
          />
          <meta
            name="keywords"
            content="Clothing, Shoes, Electronics, Home appliances, Furniture, Jewelry
            Watches, Beauty products, Personal care products, Sports equipment, Outdoor gear
            Toys, Books, Music, Movies, Video games, Office supplies
            Pet supplies, Health supplements, Food and beverage, Online shopping, E-commerce
            Shopping online, Buy online,Online store, Shop online, Online shopping sites, Best online shopping, Online shopping deals, Cheap online shopping, Online shopping website, Online shopping offers, Online shopping discounts, Online shopping for clothes, Online shopping for shoes, Online shopping for electronics, Online shopping for home decor, Online shopping for beauty products, Online shopping for accessories, Online shopping for gifts"
          />
        </Helmet>
        <ScrollTop />
        <Routes>
          <Route path={paths.HOME} element={<Home />} />
          <Route path={paths.ABOUT} element={<About />} />
          <Route path={paths.TOC} element={<Toc />} />
          <Route path={paths.POLICY} element={<Policy />} />
          <Route path={paths.CONTACT_US} element={<Contactus />} />
          <Route path={paths.FORGOT_PASSWORD} element={<ForgotPassword />} />
          <Route
            path={paths.FORGOT_PASSWORD_CODE}
            element={<ForgotPasswordCode />}
          />
          <Route path={paths.CATEGORY_PRODUCT} element={<CategoryProduct />} />
          <Route path={paths.SEARCH_PRODUCT} element={<SearchProduct />} />
          <Route path={paths.PRODUCT} element={<Product />} />
          <Route path={paths.DISCOVER} element={<Discover />} />
          <Route path={paths.DISCOVER_PRODUCT} element={<DiscoverProducts />} />
          <Route path={paths.PROMOTION} element={<Promotion />} />
          <Route path={paths.MERCHANT} element={<ProfileOther />} />
          <Route path={paths.MERCHANTS} element={<Merchants />} />

          <Route element={<ProtectedRoutes />}>
            <Route path={paths.PROFILE} element={<Profile />} />
            <Route path={paths.EDIT_PRODUCT} element={<EditProduct />} />
            <Route path={paths.NOTIFICATION} element={<Notifications />} />
            <Route path={paths.STORE_PRODUCT} element={<StoreProduct />} />
            <Route path={paths.MESSAGES} element={<ChatMessages />} />
            <Route path={paths.SELLING_AUTH} element={<SellingAuth />} />
            <Route path={paths.FAVOURITE} element={<FavouriteProduct />} />
            <Route path={paths.CHECKOUT_PRODUCT} element={<Checkout />} />
          </Route>

          <Route element={<PublicRoutes />}>
            <Route path={paths.SIGIN} element={<Signin />} />
            <Route path={paths.SIGNUP} element={<Signup />} />
          </Route>

          <Route path={paths.ERROR} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
