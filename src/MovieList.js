import React from 'react';
import MovieItem from './MovieItem';

export default function MovieList({ movies }) {
  return (
    <div className='movies-list'>
      {
        movies.map((movie, i) => {
          return <MovieItem
            key={movie.title + i}
            {...movie} />;
        }
        )}
    </div>
  );
}