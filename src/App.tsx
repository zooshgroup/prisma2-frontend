//import React from 'react';
import './App.css';
//import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
//import { ChildDataProps, graphql } from 'react-apollo'

// eslint-disable-next-line
const GET_Q = gql`
  query movies($search: String!) {
    movies(search: $search) {
      title
    }
  }
`
// eslint-disable-next-line
const WHO_Q = gql`
  query whoami {
    whoami {
      name
    }
  }
`
export function whoAmI(){
  //const { loading, error, data } = useQuery(WHO_Q)
  return ""
}
/*
export const PUT_M = gql`
  mutation loginUser($data: LoginData!) {
    loginUser(data: $data) {
      token
    }
  }
`

function App() {
  const [valasz, { data }] = useMutation(PUT_M)
  var toki = "a"
  if(data) {
    console.log(data.loginUser.token)
    toki = data.loginUser.token
  }
  
  //let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          valasz({variables :{ data: {email: "hello@birovince.com",password:"jelszoxdxd"} }})
          //input.value = '';
        }}
      >
        <input
          ref={node => {
            //input = node;
          }}
        />
        <input name="toki" type="text" value={toki}/>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

function App2() {
  const { loading, error, data } = useQuery(GET_Q,
    //{variables: { language: 'english' },}
    )
  if (loading) return <p>Loading ...</p>
  //return <h1>Hello {data.whoami}!</h1>
}

function App22() {
  const { loading, error, data } = useQuery(GET_Q,
    {variables: { search: 'cigány' },}
    )
  if (loading) return <p>Loading ...</p>
  console.log(data.movies)
  const result = data.movies[0].title;
  return <h1>Hello {result}!</h1>
}

export default App;

type User = {
  name: string
  id: string
  age: number
  email: string
}

type Response = {
  user: User
}

type Variables = {
  //data: string
}

type ChildProps = ChildDataProps<{}, Response, Variables>;

// https://www.apollographql.com/docs/react/v2.5/recipes/static-typing/
const trytypes = graphql<{}, Response, Variables, ChildProps>(GET_Q, {
  options: () => ({
    //variables: { episode: "JEDI" }
  })
});*/