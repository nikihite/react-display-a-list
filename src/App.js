import { useEffect, useState } from 'react';
import './App.css';
import Spinner from './Spinner';
import MovieList from './MovieList';
import CandyList from './CandyList';
import PopcornList from './PopcornList';
import DrinkList from './DrinkList';
import { getMovies, getCandies, getPopcorns, getDrinks } from './services/Fetch-utils';
// import your arrays here


function App() {

  const [movies, setMovies] = useState([]);
  const [candies, setCandies] = useState([]);
  const [popcorns, setPopcorns] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);
  const [isLoadingCandies, setIsLoadingCandies] = useState(false);
  const [isLoadingPopcorns, setIsLoadingPopcorns] = useState(false);
  const [isLoadingDrinks, setIsLoadingDrinks] = useState(false);

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

  async function fetchPopcornsData() {
    setIsLoadingPopcorns(true);
    const data = await getPopcorns();
    setIsLoadingPopcorns(false);
    setPopcorns(data);
  }

  useEffect(() => {
    fetchPopcornsData();
  }, []);

  async function fetchDrinksData() {
    setIsLoadingDrinks(true);
    const data = await getDrinks();
    setIsLoadingDrinks(false);
    setDrinks(data);
  }

  useEffect(() => {
    fetchDrinksData();
  }, []);

  return (
    <div className="App">
      <h1 className='header'>Pick A Movie</h1>
      {
        isLoadingMovies
          ? <Spinner />
          : <MovieList movies={movies} />
      }
      <h1 className='header'>Grab A Snack</h1>
      <h3>candy</h3>
      {
        isLoadingCandies
          ? <Spinner />
          : <CandyList candies={candies} />
      }
      <h3>popcorn</h3>
      {
        isLoadingPopcorns
          ? <Spinner />
          : <PopcornList popcorns={popcorns} />
      }
      <h3>drinks</h3>
      {
        isLoadingDrinks
          ? <Spinner />
          : <DrinkList drinks={drinks} />
      }
    </div>
  );
}

export default App;
