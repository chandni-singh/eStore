import { useDispatch, useSelector } from "react-redux";
import "./_cat-nav.scss";
import categorySlice from "../../Redux/Category/categorySlice";
import { useEffect } from "react";
import { getCategories } from "../../Redux/Category/actions";

const CatNav = () => {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();
  console.log(categories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      <div className="cat-nav-container container">
        <ul>
          {categories.map((category) => (
            <li className="list-items">
              <a href="#">{category}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CatNav;
