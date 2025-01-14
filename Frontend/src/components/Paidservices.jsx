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
          const res = await axios.get("http://localhost:4001/book");
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          error, aspernatur, molestias, labore eaque quo veniam reiciendis
          dolorum debitis repellat qui optio iure minima veritatis quis dicta a
          magni commodi!
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
