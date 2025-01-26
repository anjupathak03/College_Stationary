import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function AdminPortal() {
  const [orders, setOrders] = useState([
    { id: 1, item: 'Notebook', user: 'John', status: 'Pending' },
    { id: 2, item: 'Ball Pens', user: 'Doe', status: 'Pending' },
    { id: 3, item: 'Earphones', user: 'Anjali', status: 'Pending' },
    { id: 4, item: 'Pencil Case', user: 'Sneha', status: 'Pending' },
    // { id: 5, item: 'Graph Notebook', user: 'Deep', status: 'Pending' },
    // { id: 6, item: 'File Folders', user: 'Dimple', status: 'Pending' },
    // { id: 7, item: 'Glitter Washi Tape', user: 'Jeet', status: 'Pending' },
    // { id: 8, item: 'Notebooks', user: 'Doe', status: 'Pending' },
    // { id: 9, item: 'Files', user: 'John', status: 'Pending' },
    // { id: 10, item: 'Graph NoteBook', user: 'Doe', status: 'Pending' },
  ]);

  const markAsReady = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: 'Ready for Pickup' } : order
      )
    );
  };

  return (
    
    
  <>
   
   <Navbar/>
   
   

    <div className="min-h-screen bg-gray-100 p-8 mt-1000 pt-1000 space-y-20"> 
       <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-1000 pt-100 space-y-10"> 
        <h2 className="text-2xl text-blue-1000 font-bold text-center mb-4 mt-100 pt-100 space-y-30"></h2>
        <h3 className="text-lg font-semibold mb-4 text-blue-900">Orders:</h3>
        <table className="table w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Order ID</th>
              <th className="border border-gray-300 px-4 py-2">Item</th>
              <th className="border border-gray-300 px-4 py-2">User</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-100">
                <td className="text-blue-800 px-4 py-2 text-center">{order.id}</td>
                <td className="text-blue-800 px-4 py-2 text-center">{order.item}</td>
                <td className="text-blue-800  px-4 py-2 text-center">{order.user}</td>
                <td
                  className={`border border-gray-300 px-4 py-2 text-center ${
                    order.status === 'Pending'
                      ? 'text-red-500 font-semibold'
                      : 'text-green-500 font-semibold'
                  }`}
                >
                  {order.status}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {order.status === 'Pending' && (
                    <button
                      onClick={() => markAsReady(order.id)}
                      className="btn btn-sm btn-success"
                    >
                      Mark as Ready
                    </button>
                  )}
                  {order.status === 'Ready for Pickup' && (
                    <span className="text-gray-500">No Action</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> 
    
  </div>
  <Footer/>
  </>
    
  );
}

export default AdminPortal;
