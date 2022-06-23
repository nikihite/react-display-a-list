import React from 'react';

export default function DrinkItem({ name, price, type, image, size }) {
  return (
    <div className='drink-item'>
      <img src={`/${image}`}/>
      <h1>{name}</h1>
      <p>{size}</p>
      <p>{price}</p>
      <p>{type}</p>
    </div>
  );
}