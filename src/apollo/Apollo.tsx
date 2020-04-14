import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'

//const httpLink = new HttpLink({ uri: 'http://localhost:4000' });

const authMiddleware = new ApolloLink((operation: any, forward: any) => {
  operation.setContext({
    headers: {
      authorization: localStorage.getItem('token') ||  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhM2EzZjE1My02ODllLTQ3MjAtOWFlNC0zM2I4MWM4NWI1NmMiLCJpYXQiOjE1ODQ4MTI1ODR9.__lnPv7Qi3LFnEE34dV-K8hpcyJkV1RmyS2ctlX2Uug",
    }
  });

  return forward(operation);
})


//const ssrMode = typeof window === 'undefined'
const cache = new InMemoryCache()

export const client = new ApolloClient({
    //ssrMode,
    link: ann(),
    //link: httpLink,
    cache,
});

function ann() {
  return authMiddleware.concat(createIsomorphLink())
}

function createIsomorphLink() {
    return new HttpLink({
      uri: 'http://127.0.0.1:4000',
    })
}
