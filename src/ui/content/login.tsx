import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

interface LoginInput {
  password: string,
  email: string
}

type LoginResponse = {
  token: string
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

  const [login, { data:response, error }] = useMutation(LOGIN_M, { errorPolicy: 'all' })
  
  //why am I not getting the first click login data, only from the 2nd click
  async function handleSubmit(event: any) {
    event.preventDefault()
    if(email && email.includes('@',1) && email.includes('.',3)) {
      if(password) {
        let loginData: LoginInput = {email: email, password: password}
        try {
          await (login({ variables: { data: loginData } }))
          let loginUserResponse:LoginResponse
          if(response && response.loginUser) {
            loginUserResponse = response.loginUser
            const token = loginUserResponse.token
            localStorage.setItem('token',token)
            alert('Successful login.')
          }
        } catch(e) {
          console.log(e)
          console.log(error)
          alert('Incorrect username or password.')
        }
      }
      else {
        alert('Enter a password')
      }
    }
    else {
      alert('Enter a valid email address')
    }
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
  )
}

export function Login(){
    return <LogForm />
}