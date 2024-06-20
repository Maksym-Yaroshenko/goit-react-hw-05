import Navigation from "../Navigation/Navigation";
import "./App.css";

import { getNowDayFilm } from "../../../film-api";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const data = await getNowDayFilm();
        console.log(data.results);
      } catch (error) {}
    };

    fetchFilm();
  });

  return (
    <>
      <Navigation />
    </>
  );
}

export default App;
