import "./styles.css";
import React, { useState, useEffect } from "react";
import PokemonList from "./pokelist";
import Pagination from "./pagination";
import Heading from "./Heading";
import axios from "axios";

export default function App() {
  //data pokemon, state
  const [pokemon, setPokemon] = useState([]);
  const [currentPageURL, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [nextPageURL, setNextPageUrl] = useState();
  const [previousPageURL, setPreviousPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageURL, {
        cancelToken: new axios.CancelToken((c) => (cancel = c))
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPreviousPageUrl(res.data.previous);
        setPokemon(res.data.results.map((p) => p.name));
      });
    return () => cancel();
  }, [currentPageURL]);
  //every time current page url changes the rerender the page

  function goToNextPage() {
    setCurrentPageUrl(nextPageURL);
  }

  function goToPreviousPage() {
    setCurrentPageUrl(previousPageURL);
  }

  if (loading) return "Loading...";

  return (
    <div className="app">
      <Heading />
      <PokemonList pokemon={pokemon} />
      <p />
      <Pagination
        goToNextPage={nextPageURL ? goToNextPage : null}
        goToPreviousPage={previousPageURL ? goToPreviousPage : null}
      />
    </div>
  );
}
