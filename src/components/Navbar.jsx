import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import React from 'react'

export const Navbar = () => {
  const {cart} = useSelector((state) => state); 
  return (
    <nav className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
      <NavLink to="/">
      <div class="uppercase font-bold text-white text-3xl">
      ShopEase
      </div>


      </NavLink>
      <div className="flex items-center gap-10">
        <NavLink to="/">
        <p className="text-2xl text-white">Home</p>
          </NavLink>
        <NavLink to="/cart">
        <div className="relative text-3xl">
          <FaShoppingCart/>
          <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
        </div>
        
        </NavLink>
      </div>
      
    </nav>
  )
}
