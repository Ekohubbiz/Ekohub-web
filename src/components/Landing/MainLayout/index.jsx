import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../../redux/actions/authuser';
import { fetchAllCategories } from '../../../redux/actions/categories';
import { fetchAllCurrency } from '../../../redux/actions/currency';
import Loader from '../../Loader/Loader';
import Footer from '../Footer';
import NavBar from '../Navbar';
import '../styles.scss';
import { Link } from 'react-router-dom';
import DownloadApp from '../../DownloadApp/DownloadApp';
import { paths } from '../../../constants';

const MainLayout = ({ children, loading = false, nomargin = false }) => {
  const dispatch = useDispatch();
  let mainmargin = 'xl:mx-24 lg:mx-20 md:mx-4';
  useEffect(() => {
    dispatch(fetchAllCategories());
    dispatch(fetchAllCurrency());
    dispatch(fetchUser());
  }, []);

  if (nomargin) {
    mainmargin = '';
  }

  return (
    <>
      <div className="base relative">
        <DownloadApp />
        {window.location.pathname == paths.SIGIN ||
        window.location.pathname == paths.SIGNUP ? (
          <div className={`mx-auto px-4 sm:px-0 md:px-0`}>
            <div className={mainmargin}>
              <NavBar />
              <div className="">{children}</div>
            </div>
          </div>
        ) : (
          <div className={`max-w-8xl mx-auto px-4 sm:px-0 md:px-0`}>
            <div className={mainmargin}>
              <NavBar />
              <div className="">{children}</div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
