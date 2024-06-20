import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

import { getSearchFilm } from "../../../film-api";

export default function MoviesPage() {
  const [serchQuery, setSerchQuery] = useState("");
  const [queryFilm, setQueryFilm] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!serchQuery.trim()) return;

    const fetchFilm = async () => {
      try {
        const data = await getSearchFilm(serchQuery);
        console.log(data);
      } catch (error) {}
    };
    fetchFilm();
  }, [serchQuery]);

  const handleSerch = async (topic) => {
    setSerchQuery(topic);
    // console.log(topic);
  };

  return (
    <>
      <SearchBar onSearch={handleSerch} />
    </>
  );
}
