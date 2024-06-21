import { Link } from "react-router-dom";
import css from "./HomePosterPage.module.css";

export default function HomePosterPage({ daytimeFilm }) {
  return (
    <>
      <Link to={`/movies/${daytimeFilm.id}`}>
        <div className={css.poster}>
          <img
            src={`https://image.tmdb.org/t/p/w200${daytimeFilm.poster_path}`}
            loading="lazy"
            alt={daytimeFilm.title}
          />
          <p>{daytimeFilm.title}</p>
        </div>
      </Link>
    </>
  );
}
