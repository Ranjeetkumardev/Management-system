// Card.jsx
import React from 'react';

const Card = ({ title, category, quantity, price }) => {
    console.log(category)
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 border border-teal-200 hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-lg mb-2 flex space-x-2"> 
        <span className='font-semibold  '>Title: </span>
        <span>{title}</span>
      </h3>
      <p className="text-gray-600 mb-1 flex space-x-2">
        <span className='font-semibold'>Category:</span>
        <span> {category}</span>
      </p>
      <p className="text-gray-600 mb-1 flex space-x-2">
        <span className='font-semibold'>Quantity:</span>
        <span> {quantity}</span>
      </p>
   
      <p className="text-gray-800 font-bold space-x-2">Price: ${price}</p>
    </div>
  );
};

export default Card;
