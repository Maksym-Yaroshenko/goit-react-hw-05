import HomePosterPage from "./HomePosterPage/HomePosterPage";

export default function HomeListPage({ daytimeFilms }) {
  return (
    <>
      {daytimeFilms.map((daytimeFilm) => {
        return (
          <li key={daytimeFilm.id}>
            <HomePosterPage daytimeFilm={daytimeFilm} />
          </li>
        );
      })}
    </>
  );
}
