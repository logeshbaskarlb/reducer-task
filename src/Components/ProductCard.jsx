import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../Reducer/ProductSlicer";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.products);

  const isInCart = () => product && cart.some((item) => item.id === product.id);

  const handleClick = () =>
    isInCart() ? dispatch(removeToCart(product)) : dispatch(addToCart(product));

  return (
    <div className="col m-2">
      <div className="card h-100">
        <img
          className="card-img-center object-fit-cover  mx-auto d-block m-0 p-0 "
          src={product.images[0]}
          alt="..."
          style={{ width: "250px", height: "200px" }}
        />
        <hr className="m-0 mt-1 p-0" />
        <div className="card-body p-4">
          <div className="text-center">
            <h6 className="">{product.title}</h6>
            <p className="sub-title">{product.brand}</p>

            <span className="h6">${product.price}</span>
          </div>
        </div>
        <div className="card-footer pb-3 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className={
                isInCart()
                  ? "btn btn-danger mt-auto"
                  : "btn btn-outline-dark mt-auto"
              }
              onClick={handleClick}
            >
              {isInCart() ? "Remove from cart" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
