import React from 'react';
import DrinkItem from './DrinkItem';

export default function DrinkList({ drinks }) {
  return (
    <div className='drinks-list'>
      {
        drinks.map((drink, i) => {
          return <DrinkItem
            key={drink.name + i}
            {...drink} />;
        }
        )}
    </div>
  );
}