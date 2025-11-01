import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import React from "react";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  };

  return (
    <div className="flex gap-6 border rounded p-4 shadow-sm bg-white">
      {/* Image */}
      <div className="h-[150px] w-[150px] flex-shrink-0">
        <img src={item.image} alt={item.title} className="h-full w-full object-contain" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1">
        <h1 className="text-lg font-semibold">{item.title}</h1>
        <p className="text-sm text-gray-600">
          {item.description.split(" ").slice(0, 20).join(" ") + "..."}
        </p>

        <div className="flex justify-between items-center mt-4">
          <p className="text-green-700 font-bold">${item.price}</p>
          <button onClick={removeFromCart} className="text-red-500 hover:text-red-700">
            <MdDelete size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
