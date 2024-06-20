import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "78be18d26cd641ea6dcb6328c2e76135";

// // axios.defaults.baseUrl =
// //   "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

// // export const getNowDayFilm = async () => {
// //   const response = await axios.get("/trending/movie/day?language=en-US", {
// //     params: {
// //       Authorization: "78be18d26cd641ea6dcb6328c2e76135",
// //       time_window: "day",
// //       language: "en-US",
// //       accept: "application/json",
// //     },
// //   });

// //   return response;
// // };

export const getNowDayFilm = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const fetchTrendMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};