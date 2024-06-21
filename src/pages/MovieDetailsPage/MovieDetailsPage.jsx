import { useParams, useLocation } from "react-router-dom";
import { getFullFilm } from "../../../film-api";
import toast from "react-hot-toast";
import { useState, useEffect, useRef } from "react";

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
