import Menu from '../../../../assets/icons/m-menu.svg';
import MBell from '../../../../assets/icons/m-bell.svg';
import Mmenu from '../../../../assets/icons/mmenu.svg';
import Mfilter from '../../../../assets/icons/mfilter.svg';
import Logo from '../../../../assets/icons/logo.svg';
import '../styles.scss';
import { Link, useLocation } from 'react-router-dom';
import { getCurrentUser } from '../../../../redux/reducers/authSlice';
import { useSelector } from 'react-redux';
import SearchBar from '../../../SearchBar/SearchBar';
import { paths } from '../../../../constants';

const MobileNav = ({
  route,
  sideDrawer,
  nav = true,
  searchBar = false,
  toggleFilter,
}) => {
  const location = useLocation();
  return nav ? (
    <nav className="px-4 my-4">
      {location.pathname === '/' && (
        <div className="flex justify-between items-center flex-nowrap py-1">
          <div className="cursor-pointer" onClick={sideDrawer}>
            <img src={Menu} className="" alt="" />
          </div>
          <img src={Logo} className="" alt="" />
          <Link to={paths.PROFILE} state={{ nav: 'notification' }}>
            <img src={MBell} className="" alt="" />
          </Link>
        </div>
      )}
      {searchBar && <SearchBar />}
      {route && (
        <div className="flex justify-between items-center flex-nowrap py-1">
          <div className="flex items-center">
            <div className="cursor-pointer" onClick={sideDrawer}>
              <img src={Mmenu} className="" alt="" />
            </div>
            {/* <p className="text-base text-gray-700 font-bold ml-1">{route}</p> */}
          </div>
          <img src={Logo} className="" alt="" />
          <Link to={paths.PROFILE} state={{ nav: 'notification' }}>
            <img src={MBell} className="" alt="" />
          </Link>
          {/* <div className="cursor-pointer" onClick={toggleFilter}>
            <img src={Mfilter} className="" alt="" />
          </div> */}
        </div>
      )}
    </nav>
  ) : (
    <nav></nav>
  );
};

export default MobileNav;
