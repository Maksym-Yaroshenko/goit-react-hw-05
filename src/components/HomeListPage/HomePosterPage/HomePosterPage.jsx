import css from "./HomePosterPage.module.css";

export default function HomePosterPage({ daytimeFilm }) {
  return (
    <div className={css.poster}>
      <a href="">
        <img
          src={`https://image.tmdb.org/t/p/w200${daytimeFilm.poster_path}`}
          alt=""
        />
      </a>
      <a href="">{daytimeFilm.title}</a>
    </div>
  );
}
