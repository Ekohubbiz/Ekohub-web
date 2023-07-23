import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Ipad from '../../assets/img/ipad.png';
import Remote from '../../assets/img/remote.png';
import Dcart from '../../assets/img/dcart.jpeg';

import { paths } from '../../constants';
import './styles.scss';
import { Card2, Card2M, Card4 } from '../../components/shared/Cards';
import MainLayout from '../../components/Landing/MainLayout';
import { Desktop, Mobile } from '../../layout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from '../../redux/reducers/loaderSlice';
import { getFavourites } from '../../redux/reducers/productSlice';
import { fetchFavouriteProducts } from '../../redux/actions/products';
import { getCategories } from '../../redux/reducers/categorySlice';

const FavouriteProduct = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const loading = useSelector(getIsLoading);
  const favourites = useSelector(getFavourites);
  const [isShown, setIsShown] = useState(false);
  const [subcategory, setSubcategory] = useState([]);
  const [catId, setCatId] = useState(null);
  const pageCount = 24;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(
      fetchFavouriteProducts({ paginate: pageCount, page: currentPage }),
    );
  }, []);
  return (
    <>
      <Desktop>
        <MainLayout loading={loading}>
          <div className="lg:px-4 md:px-8 px-2 mb-8">
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

              <div className="lg:col-span-4 col-span-4 mb-8">
                <div className="bg-white rounded-lg drop-shadow-sm">
                  {isShown && subcategory.length > 0 && (
                    <>
                      <div className="absolute top-0 left-0 bg-white rounded-lg drop-shadow-sm p-4 w-64 z-50">
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
                      Favourites
                    </p>
                    {(favourites || []).length < 1 && (
                      <div>
                        <p className="py-8 text-base font-semibold text-center">
                          No Favourite product yet
                        </p>
                      </div>
                    )}

                    <div className="lg:flex lg:flex-wrap ">
                      {(favourites || []).map((favourite, index) => (
                        <Card2
                          img={
                            favourite?.product?.product_media[0]?.url || Dcart
                          }
                          title={favourite.product.name}
                          price={favourite.product.price}
                          location={favourite.product.address}
                          to={`/product/${favourite.product.slug}`}
                          key={index}
                          like
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
        <MobileLayout>
          <div className="px-4 py-14">
            {(favourites || []).map((favourite, index) => (
              <Card2M
                img={favourite?.product?.product_media[0]?.url || Dcart}
                title={favourite.product.name}
                price={favourite.product.price}
                location={favourite.product.address}
                to={`/product/${favourite.product.slug}`}
                key={index}
                like
              />
            ))}
          </div>
        </MobileLayout>
      </Mobile>
    </>
  );
};
export default FavouriteProduct;
