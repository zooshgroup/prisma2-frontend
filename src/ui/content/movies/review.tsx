import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ApolloError } from "apollo-client";
import { REV, REV_M } from "../../../types/models";
import { Review } from "../../../types/typedefs";

interface ReviewCreateInput {
  review: string;
  rating: number;
  movieId: string;
}

interface ReturnedReviewM {
  addReview: Review;
}

interface mrProps {
  id: string;
}

interface CachedReviews {
  reviews: any;
}

export default function MovieReview(props: mrProps) {
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [serverErr, setServerErr] = useState(false);

  // eslint-disable-next-line
  const reviewCompleted = (response: ReturnedReviewM) => {
    if (response) {
    }
  };

  const reviewError = (error: ApolloError) => {
    setServerErr(true);
    console.error('Server Error: '+error);
  };

  const [addReview, { data: success }] = useMutation(
    REV_M, 
    {
      
      update(cache, { data: { addReview } }) {
        console.log(addReview);
        const reviews = cache.readQuery({ query: REV }) as CachedReviews;
        cache.writeQuery({query: REV, data: { reviews: reviews.reviews.concat([addReview]) },});
      },
      onError: reviewError,
      //onCompleted: reviewCompleted,
    }
  );

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const reviewData: ReviewCreateInput = { review: review, rating: Number(rating), movieId: props.id };
    addReview({ variables: { data: reviewData } });
  }

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    setServerErr(false);
    if (event.currentTarget.name === "rating") {
      setRating(event.currentTarget.value);
    }
    if (event.currentTarget.name === "review")
      setReview(event.currentTarget.value);
  }

  function handleChange2(event: React.FormEvent<HTMLTextAreaElement>) {
    if (event.currentTarget.name === "review")
      setReview(event.currentTarget.value);
  }

  return (
    <form id="movieReview-zs84r" onSubmit={handleSubmit}>
      <h1>New review: </h1>
      <label>Rate between 1 and 10:</label>
      <label>
        <input
          name="rating"
          value={rating}
          onChange={handleChange}
          type="number"
          min="1"
          max="10"
          required
        />
      </label>
      <label>
        <textarea name="review" form="movieReview-zs84r" value={review} onChange={handleChange2} placeholder="Review"></textarea>
      </label>
      <input className="button" type="submit" value="Send" />
      {serverErr && <p>Server Error.</p>}
      {success && <p>Review added.</p>}
    </form>
  );
}