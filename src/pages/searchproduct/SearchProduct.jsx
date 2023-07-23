import React, { useEffect, useState } from 'react';
import Dcart from '../../assets/img/dcart.jpeg';
import Sheet from 'react-modal-sheet';

import { paths } from '../../constants';
import './styles.scss';
import { Card2, Card2M } from '../../components/shared/Cards';
import MainLayout from '../../components/Landing/MainLayout';
import { Desktop, Mobile } from '../../layout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPagination,
  getSearchProducts,
  setSearchProducts,
} from '../../redux/reducers/productSlice';
import {
  getIsLoading,
  getIsOpen,
  getSearchString,
  setIsOpen,
} from '../../redux/reducers/loaderSlice';
import {
  fetchAllProducts,
  fetchSearchProducts,
} from '../../redux/actions/products';
import useQuery from '../../hooks/useQuery';
import FilterBar from '../../components/FilterBar/FilterBar';
import BreadCrumbBar from '../../components/BreadCrumbBar/BreadCrumbBar';
import { InputSelect } from '../../components/shared/Inputs';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import SkeletonItem from '../../components/SkeletonItem/SkeletonItem';
import { getCategories } from '../../redux/reducers/categorySlice';
import MobileFilterBar from '../../components/MobileFilterBar/MobileFilterBar';
import BottomSheet from '../../components/BottomSheet/BottomSheet';

function SearchProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();
  const isOpen = useSelector(getIsOpen);
  const searchProducts = useSelector(getSearchProducts);
  const loading = useSelector(getIsLoading);
  const searchString = query.get('item');
  const searchText = useSelector(getSearchString);
  const pageCount = 24;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('lowest_price');
  const paginationInfo = useSelector(getPagination);
  const categories = useSelector(getCategories);

  useEffect(() => {
    dispatch(
      fetchSearchProducts({
        search: searchString,
        paginate: pageCount,
        page: currentPage,
      }),
    );
    return () => {
      dispatch(setSearchProducts([]));
    };
  }, [searchText, currentPage]);

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));
  };
  return (
    <>
      <Desktop>
        <MainLayout>
          <div className="lg:px-4 md:px-0 px-2 mb-2">
            <div className="grid grid-cols-5 lg:gap-4 gap-2 pt-4">
              <div className="hidden lg:block md:block md:col-span-2 lg:col-span-1 col-span-1">
                <FilterBar
                  searchText={searchString || searchText}
                  sort={sortBy}
                  query={query}
                />
              </div>

              <div className="lg:col-span-4 md:col-span-3 col-span-4">
                <div className="bg-white rounded-lg drop-shadow-sm lg:p-4 md:p-2 p-4">
                  <>
                    <BreadCrumbBar searchText={searchString || searchText} />
                  </>

                  <div className="flex justify-between mb-2 mt-4">
                    <p className="font-bold text-lg text-gray-700 my-2">
                      Results for {searchString || searchText}
                    </p>

                    <InputSelect
                      id="sort_by"
                      placeholder="Sort by"
                      required
                      // value={form.sort_by}
                      data={[
                        { id: 'highest_price', name: 'Highest Price' },
                        { id: 'lowest_price', name: 'Lowest Price' },
                        { id: 'newest', name: 'Recent' },
                        { id: 'oldest', name: 'Oldest' },
                      ]}
                      onChange={(e) => setSortBy(e.target.value)}
                    />
                  </div>

                  {!loading && (searchProducts || []).length < 1 && (
                    <div className="my-8">
                      <p className=" text-base text-bold text-center">
                        There are no results for “{searchString || searchText}”
                      </p>
                      <ul>
                        <li className="text-xs text-center">
                          - Check your spelling for typing errors
                        </li>
                        <li className="text-xs text-center">
                          - Try searching with short and simple keywords
                        </li>
                        <li className="text-xs text-center">
                          - Try searching more general terms - you can then
                          filter the search results
                        </li>
                      </ul>
                    </div>
                  )}

                  {loading ? (
                    <div className="lg:flex md:flex flex-wrap justify-center sticky top-0 overflow-y-auto">
                      <SkeletonItem />
                      <SkeletonItem />
                      <SkeletonItem />
                      <SkeletonItem />
                      <SkeletonItem />
                      <SkeletonItem />
                      <SkeletonItem />
                      <SkeletonItem />
                      <SkeletonItem />
                      <SkeletonItem />
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-center flex-wrap lg:gap-4">
                        {(searchProducts || []).map((product, index) => (
                          <Card2
                            img={product.product_media[0]?.url || Dcart}
                            title={product.name}
                            price={product.price}
                            location={product.address}
                            to={`/product/${product.slug}`}
                            key={index}
                            like={product?.favourite_product.length > 0}
                            chat={() => navigate(`/product/${product.slug}`)}
                          />
                        ))}
                      </div>
                      <div className="flex justify-around my-4">
                        <p
                          onClick={handlePrevious}
                          className="cursor-pointer border border-red-400 p-2 text-xs hover:bg-red-400 rounded-lg"
                        >
                          PREVIOUS
                        </p>
                        <p className="text-red-400 px-2 text-bold text-xs">
                          page {paginationInfo?.page}
                        </p>
                        <p
                          onClick={handleNext}
                          className="cursor-pointer border border-red-400 p-2 text-xs hover:bg-red-400 rounded-lg"
                        >
                          NEXT
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      </Desktop>
      <Mobile>
        <MobileLayout logoView>
          <div className="p-2 sticky top-0 z-50 base-color">
            <SearchBar toggleFilter={() => dispatch(setIsOpen(true))} />
            <MobileFilterBar />
          </div>
          <div className="px-4 pb-8">
            {(searchProducts || []).length < 1 && (
              <div className="my-8">
                <p className=" text-base text-bold text-center">
                  There are no results for “{searchString}”
                </p>
                <ul>
                  <li className="text-xs text-center">
                    - Check your spelling for typing errors
                  </li>
                  <li className="text-xs text-center">
                    - Try searching with short and simple keywords
                  </li>
                  <li className="text-xs text-center">
                    - Try searching more general terms - you can then filter the
                    search results
                  </li>
                </ul>
              </div>
            )}
            <div className="overflow-y-auto">
              {(searchProducts || []).map((product, index) => (
                <Card2M
                  img={product.product_media[0]?.url || Dcart}
                  title={product.name}
                  price={product.price}
                  location={product.address}
                  to={`/product/${product.slug}`}
                  key={index}
                  like={product?.favourite_product.length > 0}
                  chat={() => navigate(`/product/${product.slug}`)}
                />
              ))}
            </div>

            <div className="flex justify-around my-4">
              <p
                onClick={handlePrevious}
                className="cursor-pointer border border-red-400 p-2 text-xs hover:bg-red-400 rounded-lg"
              >
                PREVIOUS
              </p>
              <p className="text-red-400 px-2 text-bold text-xs">
                page {paginationInfo?.page}
              </p>
              <p
                onClick={handleNext}
                className="cursor-pointer border border-red-400 p-2 text-xs hover:bg-red-400 rounded-lg"
              >
                NEXT
              </p>
            </div>
          </div>
          <BottomSheet
            isOpen={isOpen}
            onClose={() => dispatch(setIsOpen(false))}
          >
            <div className="mx-4">
              <FilterBar searchText={searchText} sort={sortBy} query={query} />
            </div>
          </BottomSheet>
        </MobileLayout>
      </Mobile>
    </>
  );
}
export default SearchProduct;
