import React from 'react';

function ProductCard({ product, addToCart }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={product.image}
          alt={product.name}
          className="h-40 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="text-gray-600">Price: ${product.price}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-sm btn-primary"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
