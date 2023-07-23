import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../../components/Landing/MainLayout';

import { Desktop, Mobile } from '../../layout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import { getCurrentUser } from '../../redux/reducers/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Notifications = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getCurrentUser);

  return (
    <>
      <Desktop>
        <MainLayout loading={loading}>
          <div className="bg-white">
            <div className="lg:px-12 lg:py-10 p-4">
              <div className="grid grid-cols-6 gap-8 pt-4">
                <div className="relative col-span-2 rounded-lg">
                  {/* notification card left */}
                  <div className="bg-white rounded-3xl drop-shadow-md p-4 mb-4">
                    <p className="text-base font-bold">{user?.first_name}</p>
                  </div>
                </div>

                <div className="relative col-span-4 lg:mb-44">
                  <div className="bg-white rounded-3xl drop-shadow-md p-4 mb-4"></div>
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      </Desktop>
      <Mobile>
        <MobileLayout route="Notification">
          <div className="">
            <p>Notifications</p>
          </div>
        </MobileLayout>
      </Mobile>
    </>
  );
};
export default Notifications;
