import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { setTotal } from "../Reducer/ProductSlicer";

const Cart = () => {
  const { cart, total } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTotal());
  }, [cart, dispatch]);
  return (
    <div className="container-fluid overflow-hidden">
      <div className="row justify-content-center mt-4">
        <div className="h2 m-0 mt-4 ms-5">Billing Area</div>
        <div className="col-md-9" style={{ backgroundColor: "none" }}>
          <div className="container">
            {cart.length > 0 ? (
              cart.map((item, index) => <CartItem product={item} key={index} />)
            ) : (
              <p className="h6 m-0 mt-4 ms-5">No items in the cart</p>
            )}
          </div>
        </div>

        <div className="col-md-3  d-sm-flex justify-content-sm-center align-self-sm-start">
          <div className="card  mt-2 pt-2" style={{ width: "15rem" }}>
            <div className="card-header  text-center">Total</div>
            <div className="card-body">
              <h5 className="card-title text-center">{total}</h5>
              <div className="col-12 text-center">
                <button className="btn btn-info px-lg-5 ">Bill amount</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
