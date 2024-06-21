// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getFullFilm } from "../../../film-api";
// import toast, { Toaster } from "react-hot-toast";

// export default function MovieDetailsPage() {
//   const { movieId } = useParams();
//   const [fullInfoFilm, setFullInfoFilm] = useState(null);
//   const notify = () => toast("You have not entered anything!");

//   useEffect(() => {
//     if (!movieId) return;
//     const getMovieDetails = async () => {
//       try {
//         const data = await getFullFilm(movieId);
//         console.log(data);
//         setFullInfoFilm(data);
//       } catch (error) {
//         notify();
//       }
//     };
//     getMovieDetails();
//   }, [movieId]);

//   return (
//     <>
//       <h2>fefefef {movieId}</h2>
//     </>
//   );
// }

import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { getFullFilm } from "../../../film-api";
import toast from "react-hot-toast";
import { useState, useEffect, Suspense, useRef } from "react";

// import css from "./MovieDetailsPage.module.css";
import Loader from "../../components/Loader/Loader";
import MovieDetailsListPage from "../../components/MovieDetailsListPage/MovieDetailsListPage";

const notify = () => toast("You have not entered anything!");

export default function MovieDetailsPage() {
  const [movieDetails, setMovieDetails] = useState({});
  const [loader, setLoader] = useState(false);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from || "/");
  const { moviesId } = useParams();

  useEffect(() => {
    if (!moviesId) return;
    const getMovieDetails = async () => {
      try {
        setLoader(true);
        const data = await getFullFilm(moviesId);
        setMovieDetails(data);
      } catch (error) {
        notify();
      } finally {
        setLoader(false);
      }
    };
    getMovieDetails();
  }, [moviesId]);

  return (
    <>
      {loader && <Loader />}
      <MovieDetailsListPage
        movieDetails={movieDetails}
        location={location}
        backLinkHref={backLinkHref}
      />
    </>
  );
}
