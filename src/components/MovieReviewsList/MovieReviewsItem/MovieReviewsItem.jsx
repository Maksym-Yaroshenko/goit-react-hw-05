import css from "./MovieReviewsItem.module.css";

export default function MovieReviewsItem({
  review: {
    author,
    content,
    author_details: { rating },
  },
}) {
  return (
    <>
      <h2 className={css.text}>Author: {author}</h2>
      <h3 className={css.text}>Rating: {rating}</h3>
      <p className={css.text}>{content}</p>
    </>
  );
}
