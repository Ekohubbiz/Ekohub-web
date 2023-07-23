import React from 'react';
import MainLayout from '../../components/Landing/MainLayout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import { Desktop, Mobile } from '../../layout';

const About = () => {
  return (
    <>
      <Desktop>
        <MainLayout>
          <p className="text-center"> ABOUT PAGE</p>
        </MainLayout>
      </Desktop>
      <Mobile>
        <MobileLayout>
          <p className="text-center"> ABOUT PAGE</p>
        </MobileLayout>
      </Mobile>
    </>
  );
};
export default About;
