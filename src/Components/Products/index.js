import { useDispatch, useSelector } from "react-redux";
import "./_products.scss";
import productSlice from "../../Redux/Product/productSlice";
import { addCartItem } from "../../Redux/Cart/cartSlice";

const Products = () => {
  const productData = useSelector(productSlice.getInitialState);
  const cart = useSelector((state) => state.cr);
  const dispatch = useDispatch();

  const addToCart = (itemData) => {
    dispatch(addCartItem(itemData));
  };

  return (
    <div className="products-container">
      {productData.map((product, key) => (
        <div className="mx-5 p-3 product-card">
          <div className="product-image-container">
            <img
              src={require("../../assets/images/shop/" + product.img)}
              alt="product"
            />
          </div>
          <div className="product-info">
            <h5>
              <a href="#">{product.pName}</a>
            </h5>
            <p className="product-price">${product.price}</p>
            <div className="product-rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <div className="my-3" onClick={() => addToCart(product)}>
              <div className="cart-button">
                <div className="cart-icon-container">
                  <i className="fa fa-shopping-cart mx-4"></i>
                </div>
                <div className="cart-text-container mx-3">
                  <p>Add to Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

export default Products;
