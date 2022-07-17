import React from "react";
import { BsBagCheck } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <div className="flex justify-between px-12 py-4 text-white bg-gray-900">
      <Link to="/">
        <div className=" text-4xl">Online Shop</div>
      </Link>
      <div className="flex justify-center items-center ">
        <Link to="/cart">
          <div>
            <BsBagCheck className="h-10 w-12 shrink-0" />
          </div>
        </Link>
        <div className="text-black p-3 bg-yellow-400 rounded-full relative">
          <p className="text-lg absolute left-2 -top-1">{cartTotalQuantity}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
