import React, { useEffect, useState } from 'react';

import Dcart from '../../assets/img/dcart.jpeg';
import './styles.scss';
import { Card2, Card2M } from '../../components/shared/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { getFavourites } from '../../redux/reducers/productSlice';
import { fetchFavouriteProducts } from '../../redux/actions/products';

const Favourites = () => {
  const dispatch = useDispatch();
  const favourites = useSelector(getFavourites);
  const pageCount = 60;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(
      fetchFavouriteProducts({ paginate: pageCount, page: currentPage }),
    );
  }, []);
  return (
    <>
      <div className="p-4 flex flex-wrap justify-center">
        {(favourites || []).map((favourite, index) => (
          <Card2
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
    </>
  );
};
export default Favourites;
