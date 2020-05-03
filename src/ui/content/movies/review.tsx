import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { ApolloError } from "apollo-client";

interface ReviewCreateInput {
  review: string;
  rating: number;
  movieId: string;
}

interface ReviewResponse {
  addReview: ReturnedReview;
}

interface ReturnedReview {
  id: string;
}

const REVIEW_M = gql`
  mutation addReview($data: ReviewCreateInput!) {
    addReview( data: $data) {
      id
    }
  }
`;

interface mrProps {
  id?: string;
}

export default function MovieReview(props: mrProps) {
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [serverErr, setServerErr] = useState(false);

  const reviewCompleted = (response: ReviewResponse) => {
    if (response) {
      console.log(response.addReview.id);
    }
  };

  const reviewError = (error: ApolloError) => {
    setServerErr(true);
    console.error('Server Error');
  };

  const [addReview, { data: success }] = useMutation(REVIEW_M, {
    errorPolicy: "all",
    onCompleted: reviewCompleted,
    onError: reviewError,
  });

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (props.id) {
      const reviewData: ReviewCreateInput = { review: review, rating: Number(rating), movieId: props.id };
      addReview({ variables: { data: reviewData } });
    }
    else {
      console.log('No movie selected.');
    } 
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