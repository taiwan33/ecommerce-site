import { collection, getDocs } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const getData = collection(db, "commerce");
  // console.log(items);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    navigate("/cart");
  };

  useEffect(() => {
    const getItemsDetails = async () => {
      const data = await getDocs(getData);
      setItems(data.docs.map((item) => ({ ...item.data() })));
    };
    getItemsDetails();
  }, []);
  // console.log(db);
  return (
    <div className="py-4">
      <div className="flex justify-center pb-[2%] text-4xl ">New Arrivals</div>
      <div className="flex justify-around">
        {items.map((item, i) => {
          return (
            <div key={i} className="text-center space-y-4">
              <div className="text-xl">{item.name}</div>
              <div>
                <img className="h-[300px] w-auto" src={item.imageurl} alt="" />
              </div>
              <div className="flex justify-around text-md">
                <div className="">{item.screen}-inch display</div>
                <div className="">Rs. {item.price}</div>
              </div>
              <button
                onClick={() => handleAddToCart(item)}
                className="bg-blue-600 px-10 py-1 text-sm rounded-sm text-white"
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
