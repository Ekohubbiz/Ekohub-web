import CreateServiceFilled from '../../../../assets/icons/CreateServiceFilled.svg';
import CreateService from '../../../../assets/icons/CreateService.svg';
import DiscoverIcon from '../../../../assets/icons/discovericon.svg';
import Discoverfilled from '../../../../assets/icons/Discoverfilled.svg';
import HomeIcon from '../../../../assets/icons/homeicon.svg';
import Homeoutline from '../../../../assets/icons/Homeoutline.svg';
import MessageIcon from '../../../../assets/icons/messageicon.svg';
import Messagefilled from '../../../../assets/icons/Messagefilled.svg';
import ProfileIcon from '../../../../assets/icons/profileicon.svg';
import Profilefilled from '../../../../assets/icons/Profilefilled.svg';

import '../styles.scss';
import { Link } from 'react-router-dom';
import { paths } from '../../../../constants';

const MobileTab = () => {
  return (
    <nav className="bg-white flex justify-around items-center px-2 py-2">
      <Link to={paths.HOME}>
        {window.location.pathname == paths.HOME ? (
          <img src={HomeIcon} className="" alt="" />
        ) : (
          <img src={Homeoutline} className="" alt="" />
        )}
      </Link>
      <Link to={paths.DISCOVER}>
        {window.location.pathname == paths.DISCOVER ? (
          <img src={Discoverfilled} className="" alt="" />
        ) : (
          <img src={DiscoverIcon} className="" alt="" />
        )}
      </Link>
      <Link to={paths.STORE_PRODUCT}>
        {window.location.pathname == paths.STORE_PRODUCT ? (
          <img src={CreateServiceFilled} className="" alt="" />
        ) : (
          <img src={CreateService} className="" alt="" />
        )}
      </Link>
      <Link to={paths.MESSAGES}>
        {window.location.pathname == paths.MESSAGES ? (
          <img src={Messagefilled} className="" alt="" />
        ) : (
          <img src={MessageIcon} className="" alt="" />
        )}
      </Link>
      <Link to={paths.PROFILE}>
        {window.location.pathname == paths.PROFILE ? (
          <img src={Profilefilled} className="" alt="" />
        ) : (
          <img src={ProfileIcon} className="" alt="" />
        )}
      </Link>
    </nav>
  );
};

export default MobileTab;
