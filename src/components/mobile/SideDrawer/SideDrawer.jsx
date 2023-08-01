import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Caticon from '../../../assets/icons/caticon.svg';
import { paths } from '../../../constants';
import Auth from '../../../middleware/storage';
import Backdrop from '../../shared/Backdrop/Backdrop';

const SideDrawer = ({ clickCatIcon, show, data = [] }) => {
  let drawerClasses = 'side-drawer';
  let drawerClassesOpen = 'side-drawer open';

  return (
    <>
      <div className={show ? drawerClassesOpen : drawerClasses}>
        <div className="flex flex-col justify-between py-4 h-full overflow-y-auto">
          <div>
            <div className="flex justify-center p-8">
              <div className="cursor-pointer" onClick={clickCatIcon}>
                <img src={Caticon} className="" alt="shop online at Ekohub" />
              </div>
              <p className="mx-2 text-xl font-semibold">Categories</p>
            </div>
            <div className="flex flex-col p-4 overflow-y-auto">
              {(data || []).map((category, index) => (
                <Link
                  to={`/category-product/${category.id}`}
                  state={{ categoryName: category.name }}
                  key={index}
                >
                  <div
                    className="cursor-pointer flex justify-between hover:text-red-500 py-4"
                    onClick={clickCatIcon}
                  >
                    <p className="text-sm hover:text-red-500">
                      {category.name.toLocaleUpperCase()}
                    </p>
                    <p className="text-sm hover:text-red-500">{'>'}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-red-500 text-center">Ekohub</p>
            <p className="text-xs text-center">Version 1.1.0</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
