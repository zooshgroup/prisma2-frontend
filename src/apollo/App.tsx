import React from 'react';

//-------ignore this file
//import { useQuery, useMutation } from '@apollo/react-hooks';
//import gql from 'graphql-tag';
//import { ChildDataProps, graphql } from 'react-apollo'

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