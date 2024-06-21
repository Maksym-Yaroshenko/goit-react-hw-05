import css from "./MovieDetailsCastItem.module.css";

export default function MovieDetailsCastItem({
  prop: { profile_path, name, character },
}) {
  return (
    <div className={css.poster}>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w200${profile_path}`
            : `http://www.suryalaya.org/images/no_image.jpg`
        }
        loading="lazy"
        alt="actor"
      />
      <h2>{name}</h2>
      <p className={css.character}>Character: {character}</p>
    </div>
  );
}
