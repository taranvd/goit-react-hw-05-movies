import MovieDetails from 'components/MovieDetails/MovieDetails';
import { useEffect, useState, useRef, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

const MovieDetailsPages = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();

  const backHrefLink = useRef(location?.state?.from ?? '/movies');

  useEffect(() => {
    async function fetchDetail() {
      try {
        const result = await fetchMovieDetails(id);
        setMovie(result);
      } catch (error) {
        console.log(error);
      }
    }

    fetchDetail();
  }, [id]);

  return (
    <div>
      <Link to={backHrefLink.current}>Go back</Link>

      <MovieDetails movie={movie} />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPages;
