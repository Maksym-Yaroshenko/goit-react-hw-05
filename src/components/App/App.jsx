import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navigation from "../Navigation/Navigation";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Loader from "../Loader/Loader";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieDetailsCastPage = lazy(() =>
  import("../../pages/MovieDetailsCastPage/MovieDetailsCastPage")
);
const MovieReviewsPage = lazy(() =>
  import("../../pages/MovieReviewsPage/MovieReviewsPage")
);

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:moviesId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieDetailsCastPage />} />
            <Route path="reviews" element={<MovieReviewsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
