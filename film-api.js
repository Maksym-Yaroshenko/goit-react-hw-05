import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "78be18d26cd641ea6dcb6328c2e76135";

export const getNowDayFilm = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const getSearchFilm = async (topic) => {
  const response = await axios.get(
    `search/movie?query=${topic}&api_key=${API_KEY}`
  );
  return response.data;
};

export const getFullFilm = async (movieId) => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

export const getCastFilm = async (movieId) => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

export const getReviewsFilm = async (movieId) => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return response.data;
};
