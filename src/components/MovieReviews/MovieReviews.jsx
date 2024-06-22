import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";
import { getReviewsFilm } from "../../../film-api";
import MovieReviewsList from "../MovieReviewsList/MovieReviewsList";

const notify = () => toast("Something went wrong. Please, try again!");

export default function MovieReviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const [loader, setLoader] = useState(false);
  const { moviesId } = useParams();
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
