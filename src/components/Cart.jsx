import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import {
  removeFromCart,
  decreaseItemsNumber,
  increaseItemNumber,
  removeAll,
  totalAmount,
} from "../features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const decreaseItemQuantity = (item) => {
    dispatch(decreaseItemsNumber(item));
  };
  const increaseItemQuantity = (item) => {
    dispatch(increaseItemNumber(item));
  };
  const removeAllItems = (item) => {
    dispatch(removeAll(item));
  };
  useEffect(() => {
    dispatch(totalAmount());
  }, [cart, dispatch]);
  return (
    <div>
      <div className="text-4xl flex justify-center py-3">Shopping Cart</div>
      {cart.cartItems.length === 0 ? (
        <div className="flex justify-center text-center pt-12 text-xl">
          <div>
            <div>Your Cart is currently Empty.</div>
            <Link to="/">
              <div className="flex justify-center items-center text-gray-400">
                <BsArrowLeft className="mr-2" />
                Start Shopping
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="">
          <div>
            <div className=" grid grid-cols-4 place-items-center">
              <div>PRODUCT</div>
              <div>PRICE</div>
              <div>QUANTITY</div>
              <div>TOTAL</div>
            </div>
            <div className="">
              {cart.cartItems.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="grid grid-cols-4 place-items-center border-y py-5 mt-3"
                  >
                    <div className="flex">
                      <div>
                        <img className="h-20 w-20" src={item.imageurl} alt="" />
                      </div>
                      <div className="text-left ml-7">
                        <div className="text-lg">{item.name}</div>
                        <div className="text-md">
                          {item.screen}-inch display
                        </div>
                        <button
                          onClick={() => handleRemoveCart(item)}
                          className="text-sm text-gray-600 mt-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center">Rs. {item.price}</div>

                    <div className=" place-self-center">
                      <div className="border flex justify-center items-center space-x-6 px-2 md:px-5">
                        <button onClick={() => decreaseItemQuantity(item)}>
                          <p className="text-2xl">-</p>
                        </button>
                        <p>{item.cartQuantity}</p>
                        <button onClick={() => increaseItemQuantity(item)}>
                          <p className="text-2xl">+</p>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center">
                      Rs. {item.cartQuantity * item.price}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-between px-28 py-8">
            <div>
              <button
                onClick={() => removeAllItems()}
                className="border rounded-md px-8 py-1"
              >
                Clear Cart
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <div>SubTotal</div>
                <div>Rs. {cart.cartTotalAmount}</div>
              </div>
              <div className="text-xs text-gray-500">
                Taxes and shipping calculated at checkout
              </div>
              <button className="bg-blue-600 w-full text-white rounded-md py-2 text-xs">
                CheckOut
              </button>
              <Link to="/">
                <div className="flex items-center justify-center text-sm text-gray-400">
                  <BsArrowLeft />
                  <p className="pl-3">Continue Shopping</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
