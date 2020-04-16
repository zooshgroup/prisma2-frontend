import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

interface UserCreateInput {
  name: string,
  email: string,
  password: string,
  age: number,
}

interface signupResponse {
  name: string,
}

interface RegisterResponse {
  signupUser: signupResponse,
}

const REG_M = gql`
  mutation Register($data: UserCreateInput!) {
    signupUser(data: $data) {
      name
    }
  }
`
function RegForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const registerCompleted = (response: RegisterResponse) => {
    if(response) {
      console.log(`Successful registration for ${response.signupUser.name}, now you can log in.`)
    }
  }

  const registerError = () => {
    console.error('Error in registration. Invalid data or e-mail is taken.')
  }

  const [register, { data:response, error }] = useMutation(REG_M, { errorPolicy: 'all' , onCompleted: registerCompleted, onError: registerError})

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if(email && email.includes('@',1) && email.includes('.',3)) {
      if(password && password.length > 6) {
        if(password === password2) {
          if(name) {
            let registerData: UserCreateInput = {name: name, email: email, password: password, age: -1}
            register({ variables: { data: registerData } })
          }
          else {
            console.error('Please provide a name.')
          }
        }
        else {
          alert('Passwords do not match.')
        }
      }
      else {
        console.error('Password must be at least 7 chars long.')
      }
    }
    else {
      alert('Enter a valid e-mail address.')
    }
  }
  
  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    if(event.currentTarget.name === "email")
      setEmail(event.currentTarget.value)
    if(event.currentTarget.name === "name")
      setName(event.currentTarget.value)
    if(event.currentTarget.name === "password")
      setPassword(event.currentTarget.value)
    if(event.currentTarget.name === "password2")
      setPassword2(event.currentTarget.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input name="email" type="text" value={email} onChange={handleChange} placeholder="mail" required/>
        <input name="name" type="text" value={name} onChange={handleChange} placeholder="name" required/>
      </label>
      <label>
        <input name="password" type="password" value={password} onChange={handleChange} placeholder="password" minLength={7} required/>
        <input name="password2" type="password" value={password2} onChange={handleChange} placeholder="password again" minLength={7} required/>
      </label>
      <input className="button" type="submit" value="Register" />
      {error && <p>Error in registration. Invalid data or e-mail is taken.</p>}
      {response && <p>Successfull registration. Now you can log in.</p>}
    </form>
  );
}

export function Register(){
    return <RegForm />
}