import { Link } from 'react-router-dom';
import { numberWithCommas, truncate } from '../../../utils/helpers';
import Liked from '../../../assets/icons/liked.png';
import Unliked from '../../../assets/icons/unlike.png';
import Fav from '../../../assets/icons/fav.svg';
import Star from '../../../assets/icons/star.svg';
import Call from '../../../assets/icons/call.svg';
import Text from '../../../assets/icons/text.svg';
import Share from '../../../assets/icons/share.svg';
import Duser from '../../../assets/img/duser.png';
import Dcart from '../../../assets/img/dcart.jpeg';
import Cat2 from '../../../assets/img/cat2.svg';

import '../styles.scss';
import Auth from '../../../middleware/storage';

function Card1({ img, title, location, price, like, to = '#' }) {
  return (
    <Link to={to}>
      <div className="card1 relative bg-white rounded-xl w-40 m-2 drop-shadow-sm hover:drop-shadow-xl">
        {like ? (
          <img src={Liked} className="absolute top-4 right-2" alt="" />
        ) : (
          <img src={Unliked} className="absolute top-4 right-2" alt="" />
        )}
        <img
          className="rounded-t-2xl object-cover h-40"
          src={img || Dcart}
          alt=""
          width="400"
          height="400"
        />
        <div className="p-2">
          <p className="text-sm">{truncate(title, 16)}</p>
          <p className="location">{truncate(location, 25)}</p>
          <p className="text-red-600 font-bold text-sm">
            ₦{numberWithCommas(price)}
          </p>
        </div>
      </div>
    </Link>
  );
}
function Card1Mobile({ img, title, location, price, like, to = '#' }) {
  return (
    <Link to={to}>
      <div className="card1 relative bg-white rounded-xl w-40 m-2 drop-shadow-sm hover:drop-shadow-xl">
        {like ? (
          <img src={Liked} className="absolute top-4 right-2" alt="" />
        ) : (
          <img src={Unliked} className="absolute top-4 right-2" alt="" />
        )}
        <img
          className="rounded-t-2xl object-cover h-32"
          src={img || Dcart}
          alt=""
          width="400"
          height="400"
        />
        <div className="p-2">
          <p className="text-sm">{truncate(title, 18)}</p>
          <p className="location">{truncate(location, 25)}</p>
          <p className="text-red-600 font-bold text-sm">
            ₦{numberWithCommas(price)}
          </p>
        </div>
      </div>
    </Link>
  );
}

function Card2({ img, title, location, price, like, to = '#', call, chat }) {
  return (
    <div className="card2 lg:w-64 md:w-48 w-64 relative bg-white rounded-2xl lg:m-2 md:m-1 m-1 drop-shadow-md  hover:drop-shadow-xl">
      {like ? (
        <img src={Liked} className="absolute top-4 right-2" alt="" />
      ) : (
        <img src={Unliked} className="absolute top-4 right-2" alt="" />
      )}
      <Link to={to}>
        <img
          className="rounded-t-2xl object-cover w-full lg:h-52 md:h-48 h-44"
          src={img}
          alt=""
        />
      </Link>
      <div className="p-2">
        <Link to={to}>
          <div className="flex pb-2">
            <img src={Star} alt="" />
            <span className="reviewtext pl-1">5.0 (2 reviews)</span>
          </div>
          <p className="pb-1 text-sm">{truncate(title, 25)}</p>
          <p className="location">{location}</p>
          <p className="text-red-600 font-bold pb-1 text-sm">
            ₦ {numberWithCommas(price)}
          </p>
        </Link>
      </div>
      <div className="relative flex justify-around border-t ">
        <div
          onClick={chat}
          className="w-1/2 border-r flex justify-center items-center p-2 cursor-pointer"
        >
          <img src={Text} alt="" className="w-4" />
          <p className="text-sm ml-2">CHAT</p>
        </div>

        <div className="w-1/2 border-l flex justify-center items-center p-2 cursor-pointer">
          <img src={Call} alt="" className="w-4" />
          {Auth.isAuthenticated() ? (
            <a href={`tel:${call}`} className="text-sm ml-2">
              CALL
            </a>
          ) : (
            <p className="text-sm ml-2">CALL</p>
          )}
        </div>
      </div>
    </div>
  );
}

function Card2Profile({
  img,
  title,
  location,
  price,
  status,
  unPublish,
  to = '#',
  remove,
  edit,
}) {
  return (
    <div className="card2 w-72 md:w-48 relative bg-white rounded-2xl m-2 drop-shadow-md  hover:drop-shadow-xl">
      {/* {like ? (
        <img src={Liked} className="absolute top-4 right-2" alt="" />
      ) : (
        <img src={Unliked} className="absolute top-4 right-2" alt="" />
      )} */}
      {status ? (
        <div
          onClick={unPublish}
          className="absolute top-4 right-2 rounded-lg bg-red-200 flex items-center px-2 py-1 cursor-pointer"
        >
          <p className="p-1 mx-1 bg-red-600"></p>
          <p className="text-xs">Unpublish</p>
        </div>
      ) : (
        <div
          onClick={unPublish}
          className="absolute top-4 right-2 rounded-lg bg-red-200 flex items-center px-2 py-1 cursor-pointer"
        >
          <p className="p-1 mx-1 bg-red-600"></p>
          <p className="text-xs">Publish</p>
        </div>
      )}

      <Link to={to}>
        <img
          className="rounded-t-2xl object-cover w-full h-52"
          src={img}
          alt=""
        />
      </Link>
      <div className="p-2">
        <Link to={to}>
          <div className="flex pb-2">
            <img src={Star} alt="" />
            <span className="reviewtext pl-1">5.0 (2 reviews)</span>
          </div>
          <p className="pb-1 text-sm">{truncate(title, 25)}</p>
          <p className="location">{location}</p>
          <p className="text-red-600 font-bold pb-1 text-sm">
            ₦ {numberWithCommas(price)}
          </p>
        </Link>
      </div>
      <div className="relative flex justify-around border-t ">
        <div
          onClick={edit}
          className="w-1/2 border-r flex justify-center items-center p-2 cursor-pointer"
        >
          <p className="text-sm ml-2">Edit</p>
        </div>

        <div className="w-1/2 border-l flex justify-center items-center p-2 cursor-pointer">
          <p onClick={remove} className="text-sm ml-2">
            Delete Ad
          </p>
        </div>
      </div>
    </div>
  );
}

function Card2M({ img, title, location, price, like, to = '#', call, chat }) {
  return (
    <div className="card2M w-full relative bg-white rounded-2xl my-4 drop-shadow-lg z-25  hover:drop-shadow-xl">
      {like ? (
        <img src={Liked} className="absolute top-4 right-2" alt="" />
      ) : (
        <img src={Unliked} className="absolute top-4 right-2" alt="" />
      )}

      <img
        className="rounded-t-2xl object-cover w-full h-52"
        src={img}
        alt="items"
      />
      <div className="p-2">
        <Link to={to}>
          <div className="flex pb-2">
            <img src={Star} alt="" />
            <span className="reviewtext pl-1">5.0 (2 reviews)</span>
          </div>
          <p className="pb-1 text-sm">{truncate(title, 25)}</p>
          <p className="location">{location}</p>
          <p className="text-red-600 font-bold pb-1 text-base">
            ₦ {numberWithCommas(price)}
          </p>
        </Link>
      </div>
      <div className="relative flex justify-around border-t ">
        <div
          onClick={chat}
          className="w-1/2 border-r flex justify-center items-center p-2"
        >
          <img src={Text} className="w-4" alt="" />
          <p className="text-sm ml-2">CHAT</p>
        </div>

        <div className="w-1/2 border-l flex justify-center items-center p-2">
          <img src={Call} className="w-4" alt="" />
          {Auth.isAuthenticated() ? (
            <a href={`tel:${call}`} className="text-sm ml-2">
              CALL
            </a>
          ) : (
            <p className="text-sm ml-2">CALL</p>
          )}
        </div>
      </div>
    </div>
  );
}

function Card3({ img, title, item, to = '#' }) {
  return (
    <div className="bg-white rounded-2xl m-2 drop-shadow-sm">
      <Link to={to}>
        <div className="adhome">
          <p className="text-white">{title}</p>
          <p className="text-white font-bold text-5xl">{item}</p>
        </div>
        <img
          className="rounded-2xl object-cover h-48"
          src={img}
          alt=""
          width="700"
          height="400"
        />
      </Link>
    </div>
  );
}

function Card3Mobile({ img, title, item }) {
  return (
    <div className="bg-white rounded-2xl drop-shadow-sm">
      <div className="adhome">
        <p className="text-white">{title}</p>
        <p className="text-white font-bold text-2xl">{item}</p>
      </div>
      <img
        className="rounded-2xl object-stretch w-56 h-48"
        src={img}
        // width="50%" height="50%"
        alt=""
      />
    </div>
  );
}

function Card4({ img, title, ads, to, onMouseEnter, onMouseLeave, state }) {
  return (
    <button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="flex items-center justify-between p-4 hover:text-red-600 group w-full"
    >
      <Link to={to} state={state}>
        <div className="flex items-center">
          <div className="rounded-lg bg-blue-200 pt-2 pr-2 mr-2">
            <img
              src={img || Cat2}
              className="w-10 h-10 object-cover rounded-lg"
              alt=""
            />
          </div>

          <div className="">
            <p className="text-xs hover:text-red-600 text-left">
              {truncate(title, 35)}
            </p>
            <p className="text-xs text-left text-slate-400 hover:text-red-600">
              {ads} Ads
            </p>
          </div>
        </div>
      </Link>
      <Link to={to} state={state}>
        <div className="text-lg text-slate-400 font-bold hover:text-red-600">
          {'>'}
        </div>
      </Link>
    </button>
  );
}

function CardDefault({ children }) {
  return (
    <div className="bg-white rounded-3xl drop-shadow-md lg:py-12 py-4 px-8 ">
      {children}
    </div>
  );
}

function CardDefault2({ children }) {
  return (
    <div className="bg-white rounded-3xl drop-shadow-md py-4 px-8 mb-4">
      {children}
    </div>
  );
}

function CardDiscover({ img, to, title, info, avatar = Duser }) {
  return (
    <div className="w-44 mr-4 my-4">
      <Link to={to}>
        <div className="relative rounded-xl">
          <img src={Share} className="absolute w-20 top-4 right-0" alt="" />
          <img
            src={img}
            alt="ipad"
            className="rounded-xl object-cover w-48 h-52"
          />
        </div>
        <p className="text-base my-2">{title}</p>
        <div className="flex align-center">
          <img src={avatar} alt="ipad" className="rounded-full w-4 h-4 mr-2" />
          <p className="text-xs">{info}</p>
        </div>
      </Link>
    </div>
  );
}

function CardDiscoverM({ img, to, title, info, avatar = Duser }) {
  return (
    <div className="my-4 w-full p-2">
      <Link to={to}>
        <div className="relative rounded-xl">
          <img src={Share} className="absolute w-20 top-4 right-0" alt="" />
          <img
            src={img}
            alt="ipad"
            className="rounded-xl object-cover w-full h-60"
          />
        </div>

        <p className="text-base my-2">{title}</p>
        <div className="flex align-center">
          <img src={avatar} alt="ipad" className="rounded-full w-4 h-4 mr-2" />
          <p className="text-xs">{info}</p>
        </div>
      </Link>
    </div>
  );
}

export {
  Card1,
  Card2,
  Card3,
  Card4,
  CardDefault,
  CardDefault2,
  CardDiscover,
  Card3Mobile,
  Card2M,
  Card1Mobile,
  CardDiscoverM,
  Card2Profile,
};
