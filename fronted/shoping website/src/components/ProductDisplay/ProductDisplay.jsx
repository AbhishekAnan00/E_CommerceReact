import "./ProductDisplay.css";
import star_icon from "../AssetsFolder/star_icon.png";
import star_dull_icon from "../AssetsFolder/star_dull_icon";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const addToCart = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.image}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="old-price">${product.old_price}</div>
          <div className="new-price">${product.new_price}</div>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            fugiat praesentium corporis hic dignissimos nemo voluptatibus id
            minus ex? Dicta!
          </div>
          <div className="right-size">
            <h1>Select size</h1>
            <div className="right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button
            onClick={() => {
              addToCart(product.id);
            }}
          >
            ADD TO CART
          </button>
          <p className="right-category">
            <span> Category :</span>Women , T-shirt, Crop-Top
          </p>
          <p className="right-category">
            <span> Tags :</span>Modern Latest
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProductDisplay;
