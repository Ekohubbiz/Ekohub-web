import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Sheet from 'react-modal-sheet';

import Ipad from '../../assets/img/ipad.png';
import Remote from '../../assets/img/remote.png';
import Dcart from '../../assets/img/dcart.jpeg';

import { paths } from '../../constants';
import './styles.scss';
import { Card2, Card2M } from '../../components/shared/Cards';
// import { categories } from "../../utils/data";
import MainLayout from '../../components/Landing/MainLayout';
import { Desktop, Mobile } from '../../layout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import { Input2, InputM, InputSelect } from '../../components/shared/Inputs';
import useQuery from '../../hooks/useQuery';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoryProducts,
  getPagination,
  getProducts,
  getSearchProducts,
  setCategoryProducts,
  setProducts,
  setSearchProducts,
} from '../../redux/reducers/productSlice';
import {
  fetchCategoryProducts,
  fetchDynamicSearchProducts,
} from '../../redux/actions/products';
import {
  getIsLoading,
  getIsOpen,
  getSearchString,
  setIsOpen,
} from '../../redux/reducers/loaderSlice';
import ChatApi from '../../services/firebaseInstance';
import { getCurrentUser } from '../../redux/reducers/authSlice';
import SideDrawer from '../../components/mobile/SideDrawer/SideDrawer';
import { getCategories } from '../../redux/reducers/categorySlice';
import Backdrop from '../../components/shared/Backdrop/Backdrop';
import FilterBar from '../../components/FilterBar/FilterBar';
import BreadCrumbBar from '../../components/BreadCrumbBar/BreadCrumbBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import MobileFilterBar from '../../components/MobileFilterBar/MobileFilterBar';

function CategoryProduct(props) {
  const { id } = useParams();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();
  const isOpen = useSelector(getIsOpen);
  const loading = useSelector(getIsLoading);
  const products = useSelector(getCategoryProducts);
  const searchProducts = useSelector(getSearchProducts);
  const categories = useSelector(getCategories);
  const user = useSelector(getCurrentUser);
  const searchText = useSelector(getSearchString);
  const [searchString, setSearchString] = useState('');
  const pageCount = 24;
  const [currentPage, setCurrentPage] = useState(1);
  const paginationInfo = useSelector(getPagination);
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    dispatch(
      fetchCategoryProducts({
        category_id: id,
        paginate: pageCount,
        page: currentPage,
      }),
    );
    return () => {
      dispatch(setCategoryProducts([]));
      dispatch(setSearchProducts([]));
    };
  }, [id]);

  const handleSearch = (e) => {
    setSearchString(e.target.value);
  };

  const goToChat = (groupId) =>
    navigate(paths.MESSAGES, {
      state: { groupId },
    });

  const onClickChat = (sellerId) => {
    // ChatApi.messages.create([user?.id, sellerId], goToChat);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));
  };

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
        <MainLayout loading={loading}>
          <div className="lg:px-4 md:px-0 px-2 mb-2">
            <div className="grid grid-cols-5 lg:gap-4 gap-2 pt-4">
              <div className="hidden lg:block md:block md:col-span-2 lg:col-span-1 col-span-1">
                <FilterBar
                  state={state}
                  id={id}
                  searchText={searchText}
                  sort={sortBy}
                  query={query}
                />
              </div>

              <div className="cat-base lg:col-span-4 md:col-span-3 col-span-4">
                <div className="bg-main-card rounded-lg drop-shadow-md lg:p-4 md:p-2 p-4">
                  <>
                    <BreadCrumbBar state={state} id={id} />
                  </>
                  <div className="flex justify-between mb-2 mt-8">
                    <p className="font-bold text-lg text-gray-700 my-2">
                      {state?.categoryName || ''}
                    </p>
                    <InputSelect
                      id="sort_by"
                      placeholder="Sort by"
                      required
                      data={[
                        { id: 'highest_price', name: 'Highest Price' },
                        { id: 'lowest_price', name: 'Lowest Price' },
                        { id: 'newest', name: 'Recent' },
                        { id: 'oldest', name: 'Oldest' },
                      ]}
                      onChange={(e) => setSortBy(e.target.value)}
                    />
                  </div>
                  {(products || []).length < 1 && (
                    <div className="flex justify-center my-8">
                      <p className="py-8 text-base font-semibold text-center">
                        No product in {state?.categoryName || ''} yet
                      </p>
                    </div>
                  )}
                  <div className="flex justify-center flex-wrap ">
                    {searchProducts.length < 1
                      ? (products || []).map((product, index) => (
                          <Card2
                            img={product.product_media[0]?.url || Dcart}
                            title={product.name}
                            price={product.price}
                            location={product.address}
                            to={`/product/${product.slug}`}
                            key={index}
                            call={product?.store?.phone}
                            chat={() => navigate(`/product/${product.slug}`)}
                          />
                        ))
                      : (searchProducts || []).map((product, index) => (
                          <Card2
                            img={product.product_media[0]?.url || Dcart}
                            title={product.name}
                            price={product.price}
                            location={product.address}
                            to={`/product/${product.slug}`}
                            key={index}
                            call={product?.store?.phone}
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
              </div>
            </div>
          </div>
        </MainLayout>
      </Desktop>
      <Mobile>
        <MobileLayout route sideDrawer={handleSideDrawer}>
          <SideDrawer
            clickCatIcon={() => setSideDrawerOpen(false)}
            show={sideDrawerOpen}
            data={categories}
          />
          {backdropComponent}
          <div className="pt-16 pb-2 px-2 sticky top-0 z-50 base-color">
            <SearchBar toggleFilter={() => dispatch(setIsOpen(true))} />
            <MobileFilterBar />
          </div>
          <div className="px-4 pb-16">
            <div className="py-4 overflow-y-auto">
              {(products || []).length < 1 && (
                <div className="flex justify-center my-8">
                  <p className="py-8 text-base font-semibold text-center">
                    No product in {state?.categoryName || ''} yet
                  </p>
                </div>
              )}
              <div className="overflow-y-auto">
                {searchProducts.length < 1
                  ? (products || []).map((product, index) => (
                      <Card2M
                        img={product.product_media[0]?.url || Dcart}
                        title={product.name}
                        price={product.price}
                        location={product.address}
                        to={`/product/${product.slug}`}
                        key={index}
                        call={product?.store?.phone}
                        chat={() => navigate(`/product/${product.slug}`)}
                        // chat={() => onClickChat(product?.store?.user_id)}
                      />
                    ))
                  : (searchProducts || []).map((product, index) => (
                      <Card2M
                        img={product.product_media[0]?.url || Dcart}
                        title={product.name}
                        price={product.price}
                        location={product.address}
                        to={`/product/${product.slug}`}
                        key={index}
                        call={product?.store?.phone}
                        chat={() => navigate(`/product/${product.slug}`)}
                        // chat={() => onClickChat(product?.store?.user_id)}
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
          </div>
          <BottomSheet
            isOpen={isOpen}
            onClose={() => dispatch(setIsOpen(false))}
          >
            <div className="mx-4">
              <FilterBar
                id={id}
                searchText={searchText}
                sort={sortBy}
                query={query}
              />
            </div>
          </BottomSheet>
        </MobileLayout>
      </Mobile>
    </>
  );
}
export default CategoryProduct;
