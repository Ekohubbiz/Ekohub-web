import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '../../assets/img/avatar.png';
import { getDateDifference } from '../../utils/helpers';
import { getStoreReviews } from '../../redux/reducers/storeSlice';
import { fetchStoreReviews } from '../../redux/actions/stores';
import Moment from 'react-moment';

const Feedbacks = ({ store }) => {
  const dispatch = useDispatch();
  const reviews = useSelector(getStoreReviews);

  useEffect(() => {
    store?.id && dispatch(fetchStoreReviews(store?.id));
  }, []);
  console.log(reviews);
  return (
    <>
      <div className="my-4">
        <p className="">Feedbacks</p>
        {(reviews || []).map((review, i) => (
          <div className="p-2 dark-shadow-md my-2 cursor-pointer border rounded-md">
            <div className="flex justify-between py-2 items-center">
              <div className="flex gap-2 items-center">
                <img
                  src={review?.user?.profile_pic_url || Avatar}
                  alt="shop online at ekohub"
                  className="w-10 h-10 rounded-3xl"
                />
                <p className="text-base font-semibold">
                  {review?.user?.first_name}
                </p>
              </div>

              <p className="text-xs my-1 text-gray-400">
                <Moment format="MMMM YYYY" date={review?.created_at} />
              </p>
            </div>
            <p className="text-xs text-slate-200">{review?.comment}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Feedbacks;
