import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Navbar from './Navbar';

const dummyProducts = [
  { id: 1, name: 'Notebook', price: 3000, image: 'https://5.imimg.com/data5/JH/RE/FJ/SELLER-100856216/71adtab2fzl-sl1100--500x500.jpg' },
  { id: 2, name: 'Ball Pens', price: 900, image: 'https://cdn.img.gen.in/assets/business/2596/portfolio/27909/2596_637523908291085573.png?rendered=true&width=500' },
  { id: 3, name: 'Earphones', price: 2000, image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/PN/DT/TI/144647724/ceiling-fan-500x500.jpeg' },
  { id: 4, name: 'Pencil Case', price: 200, image: 'https://www.fancydresswale.com/cdn/shop/files/Green-3_dcf84800-c7ee-4221-9ccf-fc5c134b287e_1024x1024.jpg?v=1685948464' },
  { id: 5, name: 'Graph Notebook', price: 50, image: 'https://static.wixstatic.com/media/84137d_b11e290a42a9489c96f5f958855e5e47~mv2.png/v1/fill/w_480,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84137d_b11e290a42a9489c96f5f958855e5e47~mv2.png' },
  { id: 6, name: 'Earphones', price: 400, image: 'https://m.media-amazon.com/images/I/415ikBvFkiS.jpg' },
//   { id: 7, name: 'File Folders', price: 400, image: 'https://5.imimg.com/data5/JH/RE/FJ/SELLER-100856216/71adtab2fzl-sl1100--500x500.jpg' },
//   { id: 8, name: 'Ball Pens', price: 10, image: 'https://cdn.img.gen.in/assets/business/2596/portfolio/27909/2596_637523908291085573.png?rendered=true&width=500' },
//   { id: 9, name: 'Earphones', price: 5, image: '/images/eraser.jpg' }
];

function UserPortal() {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState('');

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const placeOrder = () => {
    setNotification('Your order has been placed!');
    setCart([]);
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-10">
        <h2 className="text-2xl font-bold text-center mb-4"></h2>
        <h3 className="text-lg font-semibold mb-4 text-blue-900 space-y-30">Products:</h3>
        <div className="grid grid-cols-1 text-blue-900 md:grid-cols-3 gap-6">
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>

        <h3 className="text-lg font-semibold mt-6 text-blue-900">Cart:</h3>
        <div className="border border-gray-300 rounded-lg p-4 mt-2 bg-gray-50 text-blue-900 ">
          {cart.length > 0 ? (
            <ul className="space-y-2">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-2 last:border-b-0"
                >
                  <span>{item.name}</span>
                  <span className="font-medium text-gray-700">${item.price}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          )}
        </div>

        {cart.length > 0 && (
          <button
            onClick={placeOrder}
            className="btn btn-primary mt-4 w-full"
          >
            Place Order
          </button>
        )}

        {notification && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg text-center">
            {notification}
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default UserPortal;
