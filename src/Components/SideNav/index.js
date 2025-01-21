import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./_side-nav.scss";
import accordionCatSlice from "../../Redux/Accodion/accordionSlice";

const SideNav = () => {
  const accordionData = useSelector(accordionCatSlice.getInitialState);
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(130);
  const dispatch = useDispatch();

  const setPriceLimit = (e, stateFlag) => {
    if (stateFlag === "max") {
      setMaxPrice(e.target.value);
    } else {
      setMinPrice(e.target.value);
    }
  };

  const applyPriceFilter = () => {
    const payload = { accordionData, minPrice, maxPrice };
  };

  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Category</h3>
      </div>

      <div className="accordion my-3">
        {accordionData.map((accodionCat, key) => (
          <div className="accordion-item individual-category">
            <div className="accordion-header">
              <button
                className="accordion-button"
                data-bs-target={"#collapse" + key}
                data-bs-toggle="collapse"
              >
                <div className="category-title">
                  <a href="#">{accodionCat.category}</a>
                </div>
              </button>
            </div>
            <div
              className="accordion-collapse collapse show"
              id={"collapse" + key}
            >
              <div className="accordion-body">
                <ul>
                  {accodionCat.items.map((item) => (
                    <li className="sub-items">
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="price-filter-container">
        <div className="section-title">
          <h3>Filter by price</h3>
        </div>
        <div>
          <label>Min : {minPrice}</label>
          <input
            className="form-range"
            type="range"
            min={10}
            max={130}
            step={10}
            onChange={(e) => setPriceLimit(e, "min")}
          />
        </div>
        <div>
          <label>Max : {maxPrice}</label>
          <input
            className="form-range"
            type="range"
            min={10}
            max={130}
            step={10}
            onChange={(e) => setPriceLimit(e, "max")}
          />
        </div>
        <button
          className="btn btn-outline-dark my-3"
          onClick={applyPriceFilter}
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default SideNav;
