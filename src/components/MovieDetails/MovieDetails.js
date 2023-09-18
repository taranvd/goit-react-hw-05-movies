import React from 'react';
import { Container, List } from './MovieDetails.styled';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = ({ movie }) => {
  const { id } = useParams();

  return (
    <>
      <Container>
        <div>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
          ) : (
            <p>No poster available</p>
          )}
        </div>
        <div>
          <h2>{movie.title}</h2>
          <p>User score: {movie.vote_average}%</p>

          <h3>Overview</h3>
          <p>{movie.overview}</p>

          <h3>Genres</h3>
          {movie.genres && (
            <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
          )}
        </div>
      </Container>

      <div>
        <p>Addition information</p>
        <List>
          <li>
            <Link to={`/movies/${id}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${id}/reviews`}>Reviews</Link>
          </li>
        </List>
      </div>
    </>
  );
};

export default MovieDetails;
