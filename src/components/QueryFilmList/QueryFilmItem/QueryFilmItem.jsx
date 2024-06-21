import { Link } from "react-router-dom";
import css from "./QueryFilmItem.module.css";

export default function QueryFilmItem({ film, local }) {
  return (
    <>
      <Link to={`${film.id}`} state={{ from: local }}>
        <div className={css.poster}>
          <img
            src={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
            alt={film.title}
            loading="lazy"
          />
          <p>{film.title}</p>
        </div>
      </Link>
    </>
  );
}
