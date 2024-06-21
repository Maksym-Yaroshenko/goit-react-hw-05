import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import { getReviewsFilm } from "../../../film-api";
import MovieReviewsList from "../../components/MovieReviewsList/MovieReviewsList";

const notify = () => toast("Something went wrong. Please, try again!");

export default function MovieReviewsPage() {
  //   const [movieReviews, setMovieReviews] = useState([]);
  //   const [loader, setLoader] = useState(false);

  //   const { moviesId } = useParams();
  //   const local = useLocation();

  //   console.log(moviesId);

  //   useEffect(() => {
  //     const fetchFilm = async (moviesId) => {
  //       try {
  //         setLoader(true);
  //         const data = await getReviewsFilm(moviesId);
  //         setMovieReviews(data);
  //       } catch (error) {
  //         notify();
  //       } finally {
  //         setLoader(false);
  //       }
  //     };
  //     fetchFilm(moviesId);
  //   }, [moviesId]);

  const [movieReviews, setMovieReviews] = useState([]);
  const [loader, setLoader] = useState(false);
  const { moviesId } = useParams();
  //   const local = useLocation();
  useEffect(() => {
    const getMovieReviews = async (moviesId) => {
      try {
        const data = await getReviewsFilm(moviesId);
        setMovieReviews(data.results);
      } catch (error) {
        notify();
      } finally {
        setLoader(false);
      }
    };
    getMovieReviews(moviesId);
  }, [moviesId]);

  return (
    <>
      {loader && <Loader />}
      {movieReviews.length > 0 && (
        <MovieReviewsList movieReviews={movieReviews} />
      )}

      <Toaster />
    </>
  );
}
