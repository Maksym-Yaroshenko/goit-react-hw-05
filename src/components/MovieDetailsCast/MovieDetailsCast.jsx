import MovieDetailsCastItem from "./MovieDetailsCastItem/MovieDetailsCastItem";
import css from "./MovieDetailsCast.module.css";

export default function MovieDetailsCast({ movieDetailsCast }) {
  return (
    <>
      <ul className={css.container}>
        {movieDetailsCast.map((prop) => {
          return (
            <li key={prop.id}>
              <MovieDetailsCastItem prop={prop} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
