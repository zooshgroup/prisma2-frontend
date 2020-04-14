import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

type MyProps = { }
type MyState = { email: string, password: string}

interface LoginInput {
  password: string,
  email: string
}

const LOGIN_M = gql`
  mutation Login($data: LoginInput!) {
    loginUser(data: $data) {
      token
    }
  }
`
function LogForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [login, { data }] = useMutation(LOGIN_M)
  
  function handleSubmit(event: any) {
    if(email && email.includes('@',1) && email.includes('.',3)) {
      if(password && password.length > 7) {
        let loginData: LoginInput = {email: email, password: password}
        console.log(loginData)
        login({ variables: { data: loginData } })
        console.log(data)
      }
      else {
        alert('password must be at least 8 chars long')
      }
    }
    else {
      alert('email is invalid')
    }
    event.preventDefault();
  }
  
  function handleChange(event: any) {
    if(event.target.name === "email")
      setEmail(event.target.value)
    if(event.target.name === "password")
      setPassword(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>
          <input name="email" type="text" value={email} onChange={handleChange} placeholder="mail"/>
        </label>
        <label>
          <input name="password" type="text" value={password} onChange={handleChange} placeholder="password"/>
        </label>
        <input className="button" type="submit" value="Log in" />
      </form>
  );
}

export function Login(){
    return <LogForm />
}