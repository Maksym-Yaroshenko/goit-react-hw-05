import QueryFilmItem from "./QueryFilmItem/QueryFilmItem";

import css from "./QueryFilmList.module.css";

export default function QueryFilmList({ queryFilm, local }) {
  return (
    <>
      <ul className={css.container}>
        {queryFilm.map((film) => {
          return (
            <li key={film.id}>
              <QueryFilmItem film={film} local={local} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
