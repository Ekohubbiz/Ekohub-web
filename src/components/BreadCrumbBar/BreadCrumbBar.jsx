import { Link } from 'react-router-dom';
import { paths } from '../../constants';

const BreadCrumbBar = ({ id, state, searchText }) => {
  return (
    <>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              to={paths.HOME}
              className=" rounded-lg bg-white drop-shadow-sm p-2 inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Home
            </Link>
          </li>
          {state?.subCategoryName && (
            <li>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>

                <Link
                  to={`/category-product/${id}`}
                  state={{ categoryName: state?.categoryName }}
                  className=" rounded-lg bg-white drop-shadow-sm p-2 ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                >
                  {state?.categoryName || ''}
                </Link>
              </div>
            </li>
          )}
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                {state?.subCategoryName ||
                  state?.categoryName ||
                  searchText ||
                  ''}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default BreadCrumbBar;
