import { useSelector } from "react-redux";
import "./_side-nav.scss";
import accordionCatSlice from "../../Redux/Accodion/accordionSlice";

const SideNav = () => {
  const accordionData = useSelector(accordionCatSlice.getInitialState);

  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Category</h3>
      </div>

      <div className="accordion">
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
    </div>
  );
};

export default SideNav;
