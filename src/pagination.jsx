import React from "react";

//destructure the props to just the pokemon
export default function Pagination({ goToNextPage, goToPreviousPage }) {
  return (
    // {gottopreviouspag && <- this is an if statement}
    <div>
      {goToPreviousPage && (
        <button onClick={goToPreviousPage}>Previous </button>
      )}
      {goToNextPage && <button onClick={goToNextPage}>Next</button>}
    </div>
  );
}
