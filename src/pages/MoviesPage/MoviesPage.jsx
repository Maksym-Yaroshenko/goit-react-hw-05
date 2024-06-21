import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

import { getSearchFilm } from "../../../film-api";
import QueryFilmList from "../../components/QueryFilmList/QueryFilmList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useLocation, useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("movieName") ?? "";

  // const [serchQuery, setSerchQuery] = useState("");
  const [queryFilm, setQueryFilm] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loader, setLoader] = useState(false);

  const local = useLocation();

  useEffect(() => {
    if (!movieName.trim()) return;

    const fetchFilm = async (movieName) => {
      try {
        setLoader(true);
        const data = await getSearchFilm(movieName);
        // console.log(data);
        setQueryFilm(data.results);
      } catch (error) {
        setErrorMessage(true);
      } finally {
        setLoader(false);
      }
    };
    fetchFilm(movieName);
  }, [movieName]);

  const handleSerch = async (topic) => {
    setSearchParams({ movieName: topic });
  };

  return (
    <>
      <SearchBar onSearch={handleSerch} />
      {loader && <Loader />}
      {errorMessage && <ErrorMessage />}
      {queryFilm.length > 0 && (
        <QueryFilmList queryFilm={queryFilm} local={local} />
      )}
      {queryFilm.length === 0 && (
        <div>No results were found for your request</div>
      )}
    </>
  );
}
