import { collection, getDocs } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import MessengerCustomerChat from "react-messenger-customer-chat";

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
      <div className="flex justify-center text-4xl ">New Arrivals</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
        {items.map((item, i) => {
          return (
            <div key={i} className="text-center space-y-4 mt-[8%]">
              <div className="text-xl">{item.name}</div>
              <div className="">
                <img className="h-[300px] w-auto " src={item.imageurl} alt="" />
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
      <MessengerCustomerChat pageId="107755762011189" appId="459198688985598" />
      ,
    </div>
  );
};

export default Home;
