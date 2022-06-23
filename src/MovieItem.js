import React from 'react';

export default function MovieItem({ title, director, date, image }) {
  return (
    <div className='movie-item'>
      <img src={`/${image}`}/>
      <h1>{title}</h1>
      <p>Directed by {director}</p>
      <p>Released in {date}</p>
    </div>
  );
}
