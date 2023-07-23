import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { setSearchString } from '../../redux/reducers/loaderSlice';
import Search from '../../assets/icons/search.svg';
import Filter from '../../assets/icons/filter.svg';
import { Input2 } from '../shared/Inputs';
import { useDispatch } from 'react-redux';

const SearchBar = ({ toggleFilter }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchString, setSearchStrings] = useState('');

  const handleSearch = (e) => {
    setSearchStrings(e.target.value);
  };
  const searchItem = () => {
    dispatch(setSearchString(searchString));
    navigate(`/search-product?item=${searchString}`);
  };
  console.log(window.location.pathname);
  return (
    <div className="flex justify-center my-3">
      <Input2
        placeholder="What are you looking for?"
        type="text"
        onChange={handleSearch}
        icon={Search}
        data-dropdown-toggle="dropdown-search"
      />

      <button
        onClick={searchItem}
        style={{ backgroundColor: '#EB3352' }}
        className="md:mr-0 md:block focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 ml-1 mr-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        <svg
          className="w-5 h-5 text-gray-500"
          fill="white"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={window.location.pathname === '/' ? searchItem : toggleFilter}
        className="bg-white rounded-xl px-3"
      >
        <img src={Filter} alt="" className="" />
      </button>
    </div>
  );
};

export default SearchBar;
