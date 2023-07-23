import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Ipad from '../../assets/img/ipad.png';
import Remote from '../../assets/img/remote.png';

import { paths } from '../../constants';
import './styles.scss';
import {
  Card2,
  Card2M,
  Card4,
  CardDiscover,
  CardDiscoverM,
} from '../../components/shared/Cards';
import MainLayout from '../../components/Landing/MainLayout';
import { Desktop, Mobile } from '../../layout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getDiscoverProducts } from '../../redux/reducers/productSlice';
import { truncate } from '../../utils/helpers';
import { fetchDiscoverProducts } from '../../redux/actions/products';
import { getCategories } from '../../redux/reducers/categorySlice';
import SideDrawer from '../../components/mobile/SideDrawer/SideDrawer';
import Backdrop from '../../components/shared/Backdrop/Backdrop';

const Discover = () => {
  const dispatch = useDispatch();
  const discoveries = useSelector(getDiscoverProducts);
  const categories = useSelector(getCategories);
  const [isShown, setIsShown] = useState(false);
  const [subcategory, setSubcategory] = useState([]);
  const [catId, setCatId] = useState(null);

  useEffect(() => {
    dispatch(fetchDiscoverProducts());
  }, []);
  //mobile
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  let backdropComponent;

  const handleSideDrawer = () => {
    setSideDrawerOpen((prev) => !prev);
  };

  if (sideDrawerOpen) {
    backdropComponent = <Backdrop click={() => setSideDrawerOpen(false)} />;
  }
  return (
    <>
      <Desktop>
        <MainLayout>
          <div className="lg:px-4 md:px-8 px-2 mb-2">
            <div className="grid grid-cols-5 gap-4 pt-4">
              <div className="hidden lg:block col-span-1">
                <div className="bg-white rounded-lg drop-shadow-sm">
                  {(categories || []).map((category) => (
                    <Card4
                      key={category.name}
                      title={category.name.toLocaleUpperCase()}
                      ads={category.ads}
                      img={category.icon_url}
                      to={`/category-product/${category.id}`}
                      state={{ categoryName: category.name }}
                      onMouseEnter={() => {
                        setCatId({
                          id: category.id,
                          name: category.name,
                        });
                        setSubcategory(category.sub_categories);
                        setIsShown(true);
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 col-span-4">
                <div className="bg-white rounded-lg drop-shadow-md">
                  {isShown && subcategory.length > 0 && (
                    <>
                      <div className="absolute top-0 bg-white rounded-lg drop-shadow-sm p-4 w-64 z-50">
                        {(subcategory || []).map((category, index) => (
                          <Card4
                            key={index}
                            title={category.name.toLocaleUpperCase()}
                            ads={category.ads}
                            img={category.icon_url}
                            to={`/category-product/${catId.id}`}
                            state={{
                              categoryName: catId.name,
                              subCategoryName: category.name,
                              subCategoryId: category.id,
                            }}
                            onMouseEnter={() => {
                              setIsShown(true);
                            }}
                            onMouseLeave={() => {
                              setIsShown(false);
                            }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                  <div className="p-4">
                    <p className="font-bold text-lg text-gray-700 ml-2">
                      Discover
                    </p>

                    <div className="lg:flex lg:flex-wrap ">
                      {(discoveries || []).map((discover, index) => (
                        <CardDiscover
                          key={index}
                          img={discover.cover_image_url || Dcart}
                          title={discover.title}
                          info={truncate(discover.description, 20)}
                          to={`/discover-product/${discover.id}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      </Desktop>
      <Mobile>
        <MobileLayout route sideDrawer={handleSideDrawer}>
          <div className="py-14 mx-4">
            <SideDrawer
              clickCatIcon={() => setSideDrawerOpen(false)}
              show={sideDrawerOpen}
              data={categories}
            />
            {backdropComponent}
            {(discoveries || []).map((discover, index) => (
              <CardDiscoverM
                key={index}
                img={discover.cover_image_url || Dcart}
                title={discover.title}
                info={truncate(discover.description, 20)}
                to={`/discover-product/${discover.id}`}
              />
            ))}
          </div>
        </MobileLayout>
      </Mobile>
    </>
  );
};
export default Discover;
