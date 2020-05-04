import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import App from ".";
import { User } from "../types/typedefs";

const WHO_Q = gql`
  query whoami {
    whoami {
      name
      email
      age
    }
  }
`;
interface UserCtx {
  user?: User;
  refreshUser: ()=>void;
}
const defUserCtx: UserCtx =  {
  refreshUser: ()=>{}
}
export const UserContext = React.createContext(defUserCtx);

export default function ShieldedApp() {
  const { loading, error, data, refetch } = useQuery<{ whoami: User }>(WHO_Q);
  if (loading) return <p>Loading ...</p>;
  let netErr = "";
  if (error && error.networkError) netErr = error.networkError.message + " - ";
  if (error && !error.message.includes("Not Authorised"))
    return (
      <h1>
        {netErr}Server Error<span className="active">.</span>
      </h1>
    );
  return ( 
    <UserContext.Provider value={{user: data && data.whoami, refreshUser: refetch}}>
      <App/>
    </UserContext.Provider>
    );
}
