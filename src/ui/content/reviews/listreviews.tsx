import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { User, Review } from "../../../types/typedefs";
import { REV_Q } from "../../../types/models";

interface lrProps {
  searchString: string;
  user: User;
}

function ListReviews(props: lrProps) {
  const search = props.searchString;

  const { loading: isLoading, error, data } = useQuery(REV_Q, {
    variables: { search: search },
  });

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <h1>Log in to view reviews.</h1>;

  if (data.reviews.length === 0) return <h1>No reviews found.</h1>;
  const reviews = data.reviews;
  const listItems = reviews.map((review: Review) => (
    review.user.id === props.user.id ? <h1 key={review.id}>{review.review}</h1> : ''
  ));
  return listItems;
}

export default ListReviews;