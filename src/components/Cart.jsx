import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <div className="text-4xl flex justify-center py-3">Shopping Cart</div>
      {cart.cartItems.length === 0 ? (
        <div>
          <div>Your Cart is currently Empty.</div>
          <Link to="/">
            <div>Start Shopping</div>
          </Link>
        </div>
      ) : (
        <div className="">
          <div>
            <div className="flex justify-around items-center text-left">
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
                    className="flex justify-around text-left border-y py-5 mt-3"
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
                        <button className="text-sm text-gray-600 mt-2">
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center">Rs. {item.price}</div>

                    <div className=" place-self-center">
                      <div className="border flex space-x-6 px-5">
                        <button>-</button>
                        <p>2</p>
                        <button>+</button>
                      </div>
                    </div>
                    <div className="flex items-center">Rs. {item.price}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-between px-28 py-8">
            <div>
              <button className="border rounded-md px-8 py-1">
                Clear Cart
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <div>SubTotal</div>
                <div>Rs. 0</div>
              </div>
              <div className="text-xs text-gray-500">
                Taxes and shipping calculated at checkout
              </div>
              <button className="bg-blue-600 w-full text-white rounded-md py-2 text-xs">
                CheckOut
              </button>
              <div className="text-sm text-gray-400">Continue Shopping</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
