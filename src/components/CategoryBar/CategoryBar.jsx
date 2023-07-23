import { useSelector } from 'react-redux';
import { getCategories } from '../../redux/reducers/categorySlice';
import { Card4 } from '../shared/Cards';

const CategoryBar = ({ onHover }) => {
  const categories = useSelector(getCategories);

  return (
    <div className="relative bg-white rounded-lg drop-shadow-sm categories sticky top-4 overflow-y-auto">
      {(categories || []).map((category) => (
        <Card4
          key={category.name}
          title={category.name}
          ads={category.ads}
          img={category.icon_url}
          to={`/category-product/${category.id}`}
          state={{ categoryName: category.name }}
          onMouseEnter={onHover}
        />
      ))}
    </div>
  );
};

export default CategoryBar;
