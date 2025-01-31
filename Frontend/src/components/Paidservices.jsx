import React, { useEffect, useState } from "react";
// import list from "../../public/list.json";
import Cards from "./Cards" 
import axios from "axios"
import { Link } from "react-router-dom";
function Paidservices() {
  const [book,setBook]=useState([])
  useEffect(() => {
    const getBook = async()=>{
      try{
          const res = await axios.get("https://college-stationary.onrender.com/book");
          console.log(res.data);
          setBook(res.data);
      } 
      catch(error){
        console.log("error")

      }
    }
    getBook();
  },[]);
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-20 item-center text-center justify-center">
        <h1 className="text-2xl md:text-4xl py-4">
          Welcome to
          <span className="text-green-500"> College Stationary</span>
        </h1>
        <p className="mt-1 md:mt-5">
        Thank you for joining our subscription family! Get ready to enjoy the freedom of selecting any 2 premium stationery items every week, crafted to meet all your needs. With your subscription, stationery shopping just got smarter, simpler, and more budget-friendly. We’re here to transform your shopping experience into something truly special. Dive in today and enjoy the perks of being a valued subscriber. Let’s make every week amazing!
        </p>
        <Link to="/">
          <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-emerald-700 duration-300">Back</button>
        </Link>
      </div>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-4">
        {
          book.map((item) =>(
            <Cards key={item.id} item={item} />
          ))

        }
      </div>
    </div>
  );
}
export default Paidservices;
