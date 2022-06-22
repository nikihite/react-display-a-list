import { useEffect, useState } from 'react';
import './App.css';
import Spinner from './Spinner';
import MovieList from './MovieList';
import { getMovies } from './services/Fetch-utils';
// import your arrays here


function App() {

  const [movies, setMovies] = useState([]);
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);

  async function fetchMoviesData() {
    setIsLoadingMovies(true);
    const data = await getMovies();
    setIsLoadingMovies(false);
    setMovies(data);
  }

  useEffect(() => {
    fetchMoviesData();
  }, []);
    
  return (
    <div className="App">
      {
        isLoadingMovies
          ? <Spinner />
          : <MovieList movies={movies} />
      }
    </div>
  );
}

export default App;
