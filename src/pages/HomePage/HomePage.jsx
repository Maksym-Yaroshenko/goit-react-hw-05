import { getNowDayFilm } from "../../../film-api";
import { useEffect, useState } from "react";

import css from "./HomePage.module.css";
import Loader from "../../components/Loader/Loader";
import HomeListPage from "./HomeListPage/HomeListPage";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function HomePage() {
  const [daytimeFilms, setDaytimeFilms] = useState([]);
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        setLoader(true);
        const data = await getNowDayFilm();
        setDaytimeFilms(data.results);
      } catch (error) {
        setErrorMessage(true);
      } finally {
        setLoader(false);
      }
    };

    fetchFilm();
  }, []);
  return (
    <>
      <main>
        <ul className={css.container}>
          {loader && <Loader />}
          {errorMessage && <ErrorMessage />}
          {daytimeFilms.length > 0 && (
            <HomeListPage daytimeFilms={daytimeFilms} />
          )}
        </ul>
      </main>
    </>
  );
}
