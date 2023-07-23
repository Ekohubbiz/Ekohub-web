import React, { useEffect } from 'react';
import { Desktop, Mobile } from '../../layout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getNotifications } from '../../redux/reducers/notificationSlice';
import { fetchNotifications } from '../../redux/actions/others';
import { getDateDifference } from '../../utils/helpers';

const Notifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(getNotifications);

  useEffect(() => {
    dispatch(fetchNotifications());
  }, []);

  return (
    <>
      <div className="my-4">
        <p className="">Notifications</p>
        {(notifications || []).map((notification, i) => (
          <div className="p-2 dark-shadow-md my-2 cursor-pointer border rounded-md flex justify-between">
            <div>
              <p className="font-bold hover:text-red-500">
                {notification.title}
              </p>
              <p className="text-sm text-gray-400">
                {notification.description}
              </p>
            </div>
            <p className="text-xs text-gray-400">
              {getDateDifference(notification.created_at)}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Notifications;
