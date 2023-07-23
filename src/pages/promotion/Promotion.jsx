import React, { useState } from 'react';
import MainLayout from '../../components/Landing/MainLayout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import { Desktop, Mobile } from '../../layout';
import briefcase1 from '../../assets/img/briefcase-1.png';
import briefcase2 from '../../assets/img/briefcase-2.png';
import diamond from '../../assets/img/diamond.png';
import vector1 from '../../assets/svgs/Vector-1.svg';
import vector2 from '../../assets/svgs/Vector.svg';
import Eclipse from '../../assets/svgs/Ellipse125.png';
import './styles.scss';

function Card(props) {
  return (
    <div className="cards" style={{ backgroundColor: props.color }}>
      <h6
        className="plans"
        style={{ color: props.title_color, paddingTop: props.title_padding }}
      >
        <span>
          <img className="small_dot" src={props.dot} alt="" />
        </span>
        {props.title}
      </h6>
      <img
        className="card-image"
        style={{ padding: props.img_style, width: props.img_width }}
        src={props.img}
        alt=""
      />
      <p
        className="money"
        style={{ color: props.money_color, padding: props.money_pad }}
      >
        {props.price}
      </p>
      <button
        className="description"
        style={{
          background: props.desc_style,
          padding: props.desc_pad,
          borderRadius: props.descBR,
        }}
      >
        <span style={{ color: '#FF8398' }}>{props.des}</span>
        {props.desc}
      </button>
    </div>
  );
}

function Promotion() {
  return (
    <>
      <Desktop>
        <MainLayout>
          <div className="page">
            <p className="options gap-2">
              <span
                className="months"
                style={{ background: '#EB3352', color: '#FFFFFF' }}
              >
                {' '}
                1 month{' '}
              </span>
              <span className="months"> 2 months </span>
              <span className="months"> 3 months </span>
            </p>
            <div className="heading">
              <h1 className="heading1">Choose a plan</h1>
              <p className="heading2">Budget friendly plans for ads</p>
            </div>
            <div className="image_div">
              <Card
                title="Free"
                img={briefcase1}
                color="#F7F5F2"
                des="Expires:"
                desc="unlimited"
                desc_style="#FCDDEC "
                title_padding="2rem"
                desc_pad="5px 10px"
                descBR="50px"
                img_style="40px 80px 60px"
              />
              <Card
                title="Business"
                img={briefcase2}
                color="#EB3352"
                price="N9,999"
                desc="Pay now"
                desc_style="#FFFFFF"
                dot={Eclipse}
                title_color="#FFFFFF"
                title_padding="10px"
                money_color="#FFFFFF"
              />
              <Card
                title="Premium"
                img={diamond}
                color="#F7F5F2"
                price="N17,999"
                title_padding="2rem"
                money_color="#3F4765"
                money_pad="2rem 1.5rem"
                img_style="40px 0 0"
                img_width="60%"
              />
            </div>
            <div className="offer_section">
              <p className="offer_style">Offers:</p>
              <p className="offer_deets">
                <img className="icon-circle" src={vector2} alt="" />
                <img className="icon-mark" src={vector1} alt="" />
                Maximum of 5 Ads monthly
              </p>
              <p className="offer_deets">
                <img className="icon-circle" src={vector2} alt="" />
                <img className="icon-mark" src={vector1} alt="" />
                Ads are seen by customers in your area
              </p>
              <p className="offer_deets">
                <img className="icon-circle" src={vector2} alt="" />
                <img className="icon-mark" src={vector1} alt="" />
                $14 per month
              </p>
            </div>
          </div>
        </MainLayout>
      </Desktop>
      <Mobile>
        <MobileLayout>
          <p className="text-center"> Promotion PAGE</p>
        </MobileLayout>
      </Mobile>
    </>
  );
}
export default Promotion;
