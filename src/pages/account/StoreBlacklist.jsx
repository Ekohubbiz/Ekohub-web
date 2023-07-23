import React, { useEffect, useState } from 'react';
import { getDateDifference, showToast, truncate } from '../../utils/helpers';
import Api from '../../api';
import Moment from 'react-moment';
import Dcart from '../../assets/img/dcart.jpeg';

const StoreBlacklist = () => {
  const [blockedStores, setBlockedStores] = useState([]);

  useEffect(() => {
    fetchBlockStores();
  }, []);

  const fetchBlockStores = async () => {
    try {
      const res = await Api.stores.viewBlockStores();
      if (res.data.hasError) {
        showToast(res.data.errors.message, 'error');
      } else {
        setBlockedStores(res.data.data.stores);
      }
    } catch (error) {}
  };

  const unblockHandler = async (id) => {
    try {
      const res = await Api.stores.unBlockStore(id);
      if (res.data.hasError) {
        showToast(res.data.errors.message, 'error');
      } else {
        fetchBlockStores();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="my-4">
        <p className="">Store Block list</p>
        {(blockedStores || []).map((store, i) => (
          <div
            className="bg-white rounded-2xl m-2 p-2 drop-shadow-sm flex justify-between"
            key={i}
          >
            <div className="flex items-center">
              <img
                src={store?.cover_image_url || Dcart}
                alt=""
                className="w-24 h-24 rounded-full mr-4"
              />
              <div className="my-2">
                <p className="text-base font-bold ">{store?.name}</p>
                <p className="text-sm text-gray-400">
                  {truncate(store?.address, 15)}
                </p>
                <p className="text-xs text-gray-400 font-light">
                  Member since{' '}
                  <Moment format="MMMM YYYY" date={store?.created_at} />
                </p>
              </div>
            </div>

            <button
              onClick={() => unblockHandler(store.id)}
              className="bg-green-400 rounded-lg px-2 py-1 text-white text-sm self-start"
            >
              unblock
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default StoreBlacklist;
