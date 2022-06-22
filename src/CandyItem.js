import React from 'react';

export default function CandyItem({ name, price, type, image }) {
  return (
    <div className='candy-item'>
      <img src={`/${image}`}/>
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{type}</p>
    </div>
  );
}