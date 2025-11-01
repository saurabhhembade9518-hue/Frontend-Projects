import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import {Product} from "../components/Product";
import { Footer } from "../components/Footer"; 


import React from 'react'

export const Home = () => {
  const API_URL = "https://fakestoreapi.com/products"; 
  const [loading,setLoading] = useState(false); 
  const [posts,setPosts] = useState([]);

  async function fetchProductdata() {
    setLoading(true);
    try{
      const res = await fetch(API_URL); 
      const data = await res.json(); 

      setPosts(data);
    }
    catch(error) {
      console.log("error in fetching");
      setPosts([]);
    }
    setLoading(false);
  }
  useEffect (() => {
    fetchProductdata();
  },[])

  return (
    <div>
      {
        loading ? (
         <div className="flex justify-center items-center h-screen">
           <Spinner />
         </div>
        ) : posts.length > 0 ? (
          <div>
            <div className="grid xs: grid-cols-1 sm:grid-cols md:grid-cols-4 lg
          :grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5">
            {posts.map((post) => (
              <Product key={post.id} post={post} />
            ))}
          </div>
          <div>
            <Footer/>
          </div>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <p>
              No Data Found
            </p>
          </div>
        )
      }
    </div>
  );
  
}