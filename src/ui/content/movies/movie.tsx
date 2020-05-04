import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Details from "./details";
import ListMovieReview from "./listreviews";
import MovieReview from "./review";

export function Movie() {
  const [update, setUpdate] = useState(1);

  const { movieId } = useParams();
  if(!movieId) return <h1>No movie found.</h1>

  const updateCb = () => {
    setUpdate(update+1);
    console.log(update);
  }

  return (
    <div>
        <Details id={movieId} />
        <MovieReview id={movieId} newReview={updateCb} />
        <ListMovieReview id={movieId} refresh={update}/>
    </div>
  );
}