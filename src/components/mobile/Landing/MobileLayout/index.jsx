import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../../../../redux/actions/authuser';
import { fetchAllCategories } from '../../../../redux/actions/categories';
import { fetchAllCurrency } from '../../../../redux/actions/currency';
import Logo from '../../../../assets/icons/logo.svg';
import MobileNav from '../MobileNav';
import MobileTab from '../MobileTab';
import '../styles.scss';
import DownloadApp from '../../../DownloadApp/DownloadApp';
import { paths } from '../../../../constants';

const MobileLayout = ({
  children,
  loading = false,
  route = false,
  sideDrawer,
  nav = true,
  tab = true,
  searchDisplay = false,
  logoView = false,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
    dispatch(fetchAllCurrency());
    dispatch(fetchUser());
  }, []);

  return (
    <>
      <div className="relative base-mobile">
        {loading && <Loader loading={loading} />}
        {logoView && (
          <div className="flex justify-center items-center pt-4">
            <img src={Logo} className="" alt="shop online at Ekohub" />
          </div>
        )}
        {nav && (
          <div className="mobile-top">
            {window.location.pathname == paths.HOME && <DownloadApp />}
            <MobileNav
              route={route}
              sideDrawer={sideDrawer}
              searchBar={searchDisplay}
            />
          </div>
        )}
        <>{children}</>
        {tab && (
          <div className="mobile-bottom">
            <MobileTab />
          </div>
        )}
        <div className="pb-10"></div>
      </div>
    </>
  );
};

export default MobileLayout;
