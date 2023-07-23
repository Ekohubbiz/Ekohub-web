import React, { useRef, useState } from 'react';
// import Popover from '@material-tailwind/react/Popover';
// import PopoverContainer from '@material-tailwind/react/PopoverContainer';
// import PopoverHeader from '@material-tailwind/react/PopoverHeader';
// import PopoverBody from '@material-tailwind/react/PopoverBody';

import { Link, useNavigate } from 'react-router-dom';
import Favourite from '../../../assets/icons/favourite.svg';
import Inbox from '../../../assets/icons/inbox.svg';
import Bell from '../../../assets/icons/bell.svg';
import Search from '../../../assets/icons/search.svg';
import Logo from '../../../assets/icons/logo.svg';
import Ipad from '../../../assets/img/ipad.png';
import { Input2 } from '../../shared/Inputs';
import { paths } from '../../../constants';

// import Modal from '@material-tailwind/react/Modal';
// import ModalBody from '@material-tailwind/react/ModalBody';

import { Input1 } from '../../../components/shared/Inputs';
import Google from '../../../assets/icons/google.svg';
import Facebook from '../../../assets/icons/facebook.svg';
import Msg from '../../../assets/icons/msg.svg';
import Lock from '../../../assets/icons/lock.svg';
import User from '../../../assets/icons/userinput.svg';
import { Button1, Button2 } from '../../../components/shared/Buttons';

import '../styles.scss';
import { colors } from '../../../themes';
import Auth from '../../../middleware/storage';
import {
  getCurrentUser,
  getStoreOwner,
} from '../../../redux/reducers/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchString } from '../../../redux/reducers/loaderSlice';

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storeOwner = useSelector(getStoreOwner);
  const user = useSelector(getCurrentUser);
  const [searchString, setSearchStrings] = useState('');
  const [showModalSignin, setShowModalSignin] = React.useState(false);
  const [showModalSignup, setShowModalSignup] = React.useState(false);

  const authRef = useRef();
  const notificationRef = useRef();

  const handleSearch = (e) => {
    setSearchStrings(e.target.value);
  };

  const searchItem = () => {
    dispatch(setSearchString(searchString));
    navigate(`/search-product?item=${searchString}`);
  };

  return (
    <nav className="nav-base relative sticky top-0 z-20 border-gray-200 grid grid-cols-6 py-4 px-2">
      <div className="flex flex-wrap justify-between col-span-6">
        <Link to={paths.HOME} className="flex">
          <img src={Logo} alt="React Logo" />
        </Link>
        <div className="flex md:order-1">
          <div className="relative lg:w-80">
            <Input2
              icon={Search}
              placeholder="What are you looking for?"
              type="text"
              onChange={handleSearch}
              data-dropdown-toggle="dropdown-search"
            />
          </div>
          <button
            onClick={searchItem}
            // disabled={!searchString}
            style={{ backgroundColor: '#EB3352' }}
            className="md:mr-0 md:block focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 ml-1 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            <svg
              className="w-5 h-5 text-gray-500"
              fill="white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex md:order-2">
          <div className="justify-between items-center w-full md:flex md:w-auto md:order-2">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-2 md:mt-0 md:text-sm md:font-medium">
              {Auth.isAuthenticated() && (
                <li>
                  <Link
                    to={paths.PROFILE}
                    state={{ nav: 'notification' }}
                    className="flex items-center group text-red-500 bg-white drop-shadow-sm focus:outline-none hover:bg-red-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm p-2 mb-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    <img src={Bell} alt="React Logo" />
                    <p className="hidden group-hover:block">Notifications</p>
                  </Link>
                </li>
              )}
              {Auth.isAuthenticated() && (
                <li>
                  <Link
                    to={paths.FAVOURITE}
                    className="flex items-center group text-red-500 bg-white drop-shadow-sm  focus:outline-none hover:bg-red-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm p-2 mb-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    <img src={Favourite} alt="React Logo" />
                    <p className="hidden group-hover:block">Favourites</p>
                  </Link>
                </li>
              )}
              {Auth.isAuthenticated() && (
                <li>
                  <Link
                    to={paths.MESSAGES}
                    className="flex items-center group text-red-500 bg-white drop-shadow-sm  focus:outline-none hover:bg-red-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm p-2 mb-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    <img src={Inbox} alt="React Logo" />
                    <p className="hidden group-hover:block">Messages</p>
                  </Link>
                </li>
              )}
              {Auth.isAuthenticated() && (
                <li>
                  <Link
                    to={paths.PROFILE}
                    state={{ nav: 'account' }}
                    className="flex items-center text-red-500 bg-white drop-shadow-sm focus:outline-none hover:bg-red-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-xl text-sm p-3 mx-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    <img src={User} alt="React Logo" />
                    <p className="ml-2 text-sm">{user?.first_name}</p>
                  </Link>
                </li>
              )}
              {Auth.isAuthenticated() && !storeOwner && (
                <li>
                  <Link
                    to={paths.SELLING_AUTH}
                    className="flex items-center text-red-500 bg-white border border-red-500 focus:outline-none hover:bg-red-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Start selling
                  </Link>
                </li>
              )}
              {!Auth.isAuthenticated() && (
                <Link
                  to={paths.SIGNUP}
                  className="text-red-500 bg-white border border-red-500 focus:outline-none hover:bg-red-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Sign up
                </Link>
              )}
              {!Auth.isAuthenticated() && (
                <Link
                  to={paths.SIGIN}
                  className="text-red-500 bg-white border border-red-500 focus:outline-none hover:bg-red-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Log in
                </Link>
              )}
              {Auth.isAuthenticated() && storeOwner && (
                <Link
                  to={paths.PROFILE}
                  state={{ nav: 'uploadads' }}
                  className="text-red-500 bg-white border border-red-500 focus:outline-none hover:bg-red-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  <span className="sr-only">Open user menu</span>
                  Upload an Ad
                </Link>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
