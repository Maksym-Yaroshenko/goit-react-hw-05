import MovieReviewsItem from "./MovieReviewsItem/MovieReviewsItem";
import css from "./MovieReviewsList.module.css";

export default function MovieReviewsList({ movieReviews }) {
  return (
    <>
      <ul className={css.container}>
        {movieReviews.map((review) => {
          return (
            <li key={review.id} className={css.item}>
              <MovieReviewsItem review={review} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
