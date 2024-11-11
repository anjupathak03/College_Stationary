import React from 'react'
import banner from "../../public/Banner4.jpg"

function Banner() {
  return <>
  <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10" >
  {/* bda vala div */}
  <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32 ">
  <div className="space-y-12 ">
  {/* gap bw para and welcom to cam heading */}
  <h1 className="text-4xl font-bold">
  Welcome to <span className="text-pink-500"> Campus Supplies!!!</span> 
  </h1>
  <p className='text'>
  Unleash your creativity with our vibrant collection of college essentials. From classic notebooks to trendy pens, we've got everything you need to conquer your academic journey in style. Discover a world of inspiration and productivity as you explore our thoughtfully curated range of stationery, backpacks, and more. Elevate your study space, express your unique personality, and make every note-taking adventure an enjoyable one. Your college life starts here!
</p>
 <label className="input input-bordered flex items-center gap-2">
  <svg
  // email ka icon ka code
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
<button className="btn mt-6  btn-secondary">Get Started</button>
  </div>
 
  
  {/* chhota div 1 */}
  
</div>

  <div className="order-1 w-full md:w-1/2 mt-20 md:mt-25 md:ml-20">
  <img src={banner} className="w-90 h-100" alt=""/>
  {/* chhota div 2 */}
  </div>
  </div>
   {/* bda div */}


  </>
}

export default Banner;