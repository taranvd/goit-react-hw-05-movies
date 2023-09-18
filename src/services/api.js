import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzQ5YzMxOWEyNGFkNzA5NmM1YTA1ZjQ2MThhODQwZSIsInN1YiI6IjY1MDU0ZWFmZmEyN2Y0MDBlYjE2Y2E4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yMF-ssa0s2B1J1jSLWT6V54La-gbJ2Xy3UTxHHLVA7I';

axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

export async function fetchTrendingMovies() {
  const response = await axios.get(`trending/movie/day`);
  return await response.data.results;
}

export async function fetchSearchMovie(query) {
  const { data } = await axios.get(
    `search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  );

  return await data;
}

export async function fetchMovieDetails(id) {
  const { data } = await axios.get(`/movie/${id}`);

  return data;
}

export async function fetchMovieCredits(id) {
  const { data } = await axios.get(`/movie/${id}/credits`);
  return data;
}

export async function fetchReviews(id) {
  const { data } = await axios.get(`/movie/${id}/reviews`);

  return data;
}
