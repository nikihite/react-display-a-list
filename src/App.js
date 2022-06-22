import { useEffect, useState } from 'react/cjs/react.production.min';
import { getMovies } from './services/Fetch-utils';
import './App.css';
import MovieItem from './MovieItem';
import MovieList from './MovieList';
import getCandies from './services/Fetch-utils';
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
        <MovieList />
      }
    </div>
  );
}

export default App;
