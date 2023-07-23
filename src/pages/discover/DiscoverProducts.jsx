import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dcart from '../../assets/img/dcart.jpeg';
import './styles.scss';
import { Card2, Card2M, Card4 } from '../../components/shared/Cards';
import MainLayout from '../../components/Landing/MainLayout';
import { Desktop, Mobile } from '../../layout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getDiscover, setDiscoverOne } from '../../redux/reducers/productSlice';
import {
  fetchDiscoverProducts,
  fetchSingleDiscover,
} from '../../redux/actions/products';
import { getCategories } from '../../redux/reducers/categorySlice';

const DiscoverProducts = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const discover = useSelector(getDiscover);
  const categories = useSelector(getCategories);
  const [isShown, setIsShown] = useState(false);
  const [subcategory, setSubcategory] = useState([]);
  const [catId, setCatId] = useState(null);

  useEffect(() => {
    dispatch(fetchDiscoverProducts());
    dispatch(fetchSingleDiscover(id));
    return () => {
      dispatch(setDiscoverOne({}));
    };
  }, [id]);
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
                    <p className="font-bold text-lg text-gray-700 ml-2 py-4">
                      Discover {discover?.title}
                    </p>

                    <div className="lg:flex lg:flex-wrap ">
                      {(discover?.discovery_items || []).map(
                        (discover, index) => (
                          <Card2
                            img={
                              discover.product.product_media[0]?.url || Dcart
                            }
                            title={discover.product.name}
                            price={discover.product.price}
                            location={discover.product.address}
                            to={`/product/${discover.product.slug}`}
                            key={index}
                            call={discover?.product.store?.phone}
                            //  chat={() => onClickChat(discover?.store?.user_id)}
                          />
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      </Desktop>
      <Mobile>
        <MobileLayout route={`Discover ${discover?.title || ''}`}>
          <div className="py-14 mx-4">
            {(discover?.discovery_items || []).map((discover, index) => (
              <Card2M
                img={discover.product.product_media[0]?.url || Dcart}
                title={discover.product.name}
                price={discover.product.price}
                location={discover.product.address}
                to={`/product/${discover.product.slug}`}
                key={index}
                call={discover?.product.store?.phone}
                //  chat={() => onClickChat(discover?.store?.user_id)}
              />
            ))}
          </div>
        </MobileLayout>
      </Mobile>
    </>
  );
};
export default DiscoverProducts;
