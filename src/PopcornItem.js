import React from 'react';

export default function PopcornItem({ name, size, price, image }) {
  return (
    <div className='popcorn-item'>
      <img src={`/${image}`}/>
      <h1>{name}</h1>
      <p>{size}</p>
      <p>{price}</p>
    </div>
  );
}