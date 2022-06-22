import { useEffect, useState } from 'react';
import './App.css';
import Spinner from './Spinner';
import MovieList from './MovieList';
import CandyList from './CandyList';
import { getMovies, getCandies } from './services/Fetch-utils';
// import your arrays here


function App() {

  const [movies, setMovies] = useState([]);
  const [candies, setCandies] = useState([]);
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);
  const [isLoadingCandies, setIsLoadingCandies] = useState(false);

  async function fetchMoviesData() {
    setIsLoadingMovies(true);
    const data = await getMovies();
    setIsLoadingMovies(false);
    setMovies(data);
  }

  useEffect(() => {
    fetchMoviesData();
  }, []);

  async function fetchCandiesData() {
    setIsLoadingCandies(true);
    const data = await getCandies();
    setIsLoadingCandies(false);
    setCandies(data);
  }

  useEffect(() => {
    fetchCandiesData();
  }, []);

  return (
    <div className="App">
      {
        isLoadingMovies
          ? <Spinner />
          : <MovieList movies={movies} />
      }
      {
        isLoadingCandies
          ? <Spinner />
          : <CandyList candies={candies} />
      }
    </div>
  );
}

export default App;
