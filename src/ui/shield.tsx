import React from "react";
import { useQuery } from "@apollo/react-hooks";
import App from ".";
import { User } from "../types/typedefs";
import { WHO_Q } from "../types/models";



export default function ShieldedApp() {
  const { loading, error, data, refetch } = useQuery<{ whoami: User }>(WHO_Q);
  if (loading) return <p>Loading ...</p>;
  /*if (error && error.graphQLErrors)
    error.graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    )*/
  const fnc = async () => {
    const { data:data2 } =  await refetch();
    console.log(data2);
    
  }
  let netErr = "";
  if (error && error.networkError) netErr = error.networkError.message + " - ";
  if (error && !error.message.includes("Not Authorised"))
    return (
      <h1>
        {netErr}Server Error<span className="active">.</span>
      </h1>
    );
  
  return <App user={data && data.whoami} refresh={fnc} />;
}
