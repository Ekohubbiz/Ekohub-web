import { Link } from 'react-router-dom';
import Apple from '../../assets/img/apple-store.png';
import PlayStore from '../../assets/img/playstore.png';

const DownloadApp = () => {
  return (
    <div className="bg-red-500 p-1">
      <div className="flex justify-center items-center xl:max-w-8xl mx-auto px-4 sm:px-0 md:px-0 gap-2">
        <span className="text-white text-center lg:text-base md:text-base text-xs">
          Find amazing deals on the go, Download the app now on
        </span>
        <a
          href={`https://play.google.com/store/apps/details?id=com.connectmeapp.connectme.develop`}
          target="_blank"
          className=""
        >
          <img
            src={PlayStore}
            alt=""
            className="lg:w-18 md:w-18 lg:h-8 md:h-8 object-cover"
          />
        </a>
        <a
          href={`https://apps.apple.com/ng/app/ekohub/id1627203625`}
          target="_blank"
          className=""
        >
          <img
            src={Apple}
            alt=""
            className="lg:w-18 md:w-18 lg:h-8 md:h-8 object-cover"
          />
        </a>
      </div>
    </div>
  );
};

export default DownloadApp;
