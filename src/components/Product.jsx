import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add ,remove} from "../redux/Slices/CartSlice";

import React, { useState } from 'react'

export const Product = ({post}) => {
 
  const {cart} = useSelector((state) => state); 
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item Added Successfuly")
  }
  const removeFromItem= () => {
    dispatch(remove(post.id));
    toast.error("Item Removed"); 
  }
  
  return (
    <div className="flex flex-col items-center hover:scale-105 transition duration-500  shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] justify-between p-4 gap-3 mt-10 ml-5 rounded-xl outline">
      <div>
        <p className="text-gray-700 font-semifold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div>
      <img src={post.image} alt="product" className="h-[220px] w-full" />
      </div>
      <div className="flex  justify-between gap-12 items-center w-full mt-5">
      <div className="text-green-600  ">
        ${post.price}
      </div>
     {
      cart.some((p) => p.id == post.id) ? (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semifold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white scale-110 transition duration-300 ease in " onClick={removeFromItem}>
        Remove Item 
      </button>) 
      : (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semifold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white scale-110 transition duration-300 ease in " onClick={addToCart}>
        Add to Cart
      </button>) 
     }
      </div>
     
    </div>
  )
}
