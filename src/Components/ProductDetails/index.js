import { useLocation } from "react-router-dom";
import "./_product-details.scss";

const ProductDetails = () => {
  const location = useLocation();
  return (
    <div>
      <div>
        <div>
          <img
            src={require("../../assets/images/shop/" + location.state.img)}
            alt="Product"
          />
        </div>
        <div>
          <span>{location.state.pName}</span>
          <div>
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
          <div>
            MRP: <span>{location.state.price}</span>
            <div>Inclusive of all taxes!</div>
          </div>
          <div>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              reiciendis rem iure molestias maiores, ipsum tenetur. Nobis vero,
              maiores nulla soluta reprehenderit totam ex sequi minima et,
              voluptates tempore deserunt?
            </span>
          </div>
          <div>
            <div>
              <div>
                <i className="fa fa-shopping-cart" />
              </div>
              <div>
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
