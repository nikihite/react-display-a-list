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
      {
        isLoadingPopcorns
          ? <Spinner />
          : <PopcornList popcorns={popcorns} />
      }
      {
        isLoadingDrinks
          ? <Spinner />
          : <DrinkList drinks={drinks} />
      }
    </div>
  );
}

export default App;
