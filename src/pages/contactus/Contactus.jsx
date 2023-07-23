import React from 'react';
import MainLayout from '../../components/Landing/MainLayout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import { Desktop, Mobile } from '../../layout';

const Contactus = () => {
  return (
    <>
      <Desktop>
        <MainLayout>
          <p className="text-center font-bold text-xl">Contact Us</p>
          <div className="my-8 lg:mx-40 md:mx-8">
            <div className="p-14 bg-white shadow-md">
              <p className="my-4">
                Ekohub customer support team is always ready to answer your
                questions and provide all the necessary assistance.
              </p>
              <p className="my-4">
                Ekohub customer care department - you can email your questions,
                suggestions, and comments at{' '}
                <strong className="text-red-500">Contact@ekohub.info</strong>
              </p>
              <p className="my-4">
                If you found any bugs or have security-related questions, please
                get in touch with our team at{' '}
                <strong className="text-red-500">Contact@ekohub.info</strong>.
              </p>
            </div>
          </div>
        </MainLayout>
      </Desktop>
      <Mobile>
        <MobileLayout>
          <div className="py-8">
            <p className="text-center font-bold text-xl">Contact Us</p>
            <div className="my-8 mx-4">
              <div className="p-14 bg-white shadow-md">
                <p className="my-4">
                  Ekohub customer support team is always ready to answer your
                  questions and provide all the necessary assistance.
                </p>
                <p className="my-4">
                  Ekohub customer care department - you can email your
                  questions, suggestions, and comments at{' '}
                  <strong className="text-red-500">Contact@ekohub.info</strong>
                </p>
                <p className="my-4">
                  If you found any bugs or have security-related questions,
                  please get in touch with our team at{' '}
                  <strong className="text-red-500">Contact@ekohub.info</strong>.
                </p>
              </div>
            </div>
          </div>
        </MobileLayout>
      </Mobile>
    </>
  );
};
export default Contactus;
