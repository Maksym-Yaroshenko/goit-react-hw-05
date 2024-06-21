import { Link, Outlet } from "react-router-dom";
import css from "./MovieDetailsListPage.module.css";
import { Suspense } from "react";
import Loader from "../Loader/Loader";

export default function MovieDetailsListPage({
  movieDetails,
  location,
  backLinkHref,
}) {
  const { original_title, overview, genres, poster_path, vote_average } =
    movieDetails;
  const voteAverageToFixed = Number(vote_average).toFixed(2);
  return (
    <>
      <main>
        <Link to={backLinkHref.current}>Go back</Link>
        <div className={css.detailsPage}>
          <div className={css.movieInfo}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300${poster_path}`
                  : `http://www.suryalaya.org/images/no_image.jpg`
              }
              loading="lazy"
              alt="Movie poster"
            />
            <div>
              <h1>{original_title}</h1>
              <p>User score: {voteAverageToFixed}</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h2>Genres</h2>
              <ul className={css.genreList}>
                {genres &&
                  genres.length &&
                  genres.map(({ id, name }) => <li key={id}>{name}</li>)}
              </ul>
            </div>
          </div>
          <div className={css.addInfo}>
            <h3 className={css.addInfoTitle}>Additional information</h3>
            <ul className={css.infoList}>
              <li className={css.infoItem}>
                <Link to="cast" state={{ ...location.state }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={{ ...location.state }}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
