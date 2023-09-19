import SearchBar from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'services/api';

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const initialQuery = searchParams.get('query') ?? '';

    fetchData(initialQuery);
  }, [searchParams]);

  async function fetchData(query) {
    try {
      if (query) {
        const { results } = await fetchSearchMovie(query);
        const shuffledMovies = shuffleArray(results);
        setMovies(shuffledMovies);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(newQuery) {
    if (newQuery === '') {
      setSearchParams({});
      return;
    }

    setSearchParams({ query: newQuery });
  }

  return (
    <div>
      <SearchBar
        onSubmit={handleSubmit}
        initialQuery={searchParams.get('query') ?? ''}
      />

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
