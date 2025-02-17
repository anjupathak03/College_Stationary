import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
function Freeservices() {
  const [book,setBook]=useState([])
  useEffect(() => {
    const getBook = async()=>{
      try{
          const res = await axios.get("https://college-stationary.onrender.com/book");
          
          const data = res.data.filter((data) => data.category === "free");
          console.log(data);
          setBook(data);
      } 
      catch(error){
        console.log("error hai")

      }
    };
    getBook();
  },[])
  
  

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Paid Services Offered</h1>
          <p>
          Shop your favorite stationery items and enjoy a special surprise.
For every item you purchase, get an exciting free gift with your order!
The more you shop, the more you receive.
Hurry, this offer is available only for a limited time and while stocks last.
Don't miss out on this amazing opportunity to save and get more!
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freeservices;