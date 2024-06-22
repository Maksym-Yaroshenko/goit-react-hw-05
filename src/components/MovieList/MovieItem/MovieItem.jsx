import { Link } from "react-router-dom";
import css from "./MovieItem.module.css";

export default function MovieItem({ daytimeFilm, local }) {
  return (
    <>
      <Link to={`/movies/${daytimeFilm.id}`} state={{ from: local }}>
        <div className={css.poster}>
          <img
            src={`https://image.tmdb.org/t/p/w200${daytimeFilm.poster_path}`}
            alt={daytimeFilm.title}
            loading="lazy"
          />
          <p>{daytimeFilm.title}</p>
        </div>
      </Link>
    </>
  );
}
