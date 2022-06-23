import React from 'react';
import PopcornItem from './PopcornItem';

export default function PopcornList({ popcorns }) {
  return (
    <div className='popcorn-list'>
      {
        popcorns.map((popcorn, i) => {
          return <PopcornItem
            key={popcorn.name + i}
            {...popcorn} />;
        }
        )}
    </div>
  );
}