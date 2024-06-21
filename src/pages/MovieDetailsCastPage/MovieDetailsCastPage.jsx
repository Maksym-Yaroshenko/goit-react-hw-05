import { useParams } from "react-router-dom";
import { getCastFilm } from "../../../film-api";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";

import toast, { Toaster } from "react-hot-toast";
import MovieDetailsCast from "../../components/MovieDetailsCast/MovieDetailsCast";

const notify = () => toast("Something went wrong. Please, try again!");

export default function MovieDetailsCastPage() {
  const [movieDetailsCast, setMovieDetailsCast] = useState([]);
  const [loader, setLoader] = useState(false);

  const { moviesId } = useParams();

  useEffect(() => {
    if (!moviesId.trim()) return;
    const fetchFilm = async (moviesId) => {
      try {
        setLoader(true);
        const data = await getCastFilm(moviesId);
        setMovieDetailsCast(data.cast);
      } catch (error) {
        notify();
      } finally {
        setLoader(false);
      }
    };
    fetchFilm(moviesId);
  }, [moviesId]);

  return (
    <>
      {loader && <Loader />}
      {movieDetailsCast.length > 0 && (
        <MovieDetailsCast movieDetailsCast={movieDetailsCast} />
      )}
      <Toaster />
    </>
  );
}
