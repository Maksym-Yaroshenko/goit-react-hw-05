import MovieItem from "./MovieItem/MovieItem";

export default function MovieList({ daytimeFilms, local }) {
  return (
    <>
      {daytimeFilms.map((daytimeFilm) => {
        return (
          <li key={daytimeFilm.id}>
            <MovieItem daytimeFilm={daytimeFilm} local={local} />
          </li>
        );
      })}
    </>
  );
}
