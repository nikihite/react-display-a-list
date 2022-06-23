import React from 'react';
import CandyItem from './CandyItem';

export default function CandyList({ candies }) {
  return (
    <div className='candies-list'>
      {
        candies.map((candy, i) => {
          return <CandyItem
            key={candy.name + i}
            {...candy} />;
        }
        )}
    </div>
  );
}