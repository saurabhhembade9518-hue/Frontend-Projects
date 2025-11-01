import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartItem } from "../components/CartItem";
import React from "react";

export const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Cart Items List */}
          <div className="flex flex-col gap-6 flex-1">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Summary Section */}
          <div className="min-w-[250px] bg-white p-6 rounded shadow-md h-fit">
            <h2 className="text-xl font-bold mb-4 text-green-700">Your Cart Summary</h2>
            <p className="mb-2 text-gray-700">Total Items: <span className="font-semibold">{cart.length}</span></p>
            <p className="mb-4 text-gray-700">
              Total Amount: <span className="font-bold text-green-700">${totalAmount.toFixed(2)}</span>
            </p>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold">
              Checkout Now
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-20">
          <h1 className="text-2xl font-semibold mb-4">Your cart is empty!</h1>
          <Link to={"/"}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
