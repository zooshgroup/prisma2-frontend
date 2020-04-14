import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

type MyProps = { }
type MyState = { email: string, name: string, password: string, password2: string}

interface RegisterInput {
  password: string,
  name: string,
  email: string,
  age: number,
}

const REG_M = gql`
  mutation Register($data: RegisterInput!) {
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

  const [register, { data }] = useMutation(REG_M)
  
  function handleSubmit(event: any) {
    if(email && email.includes('@',1) && email.includes('.',3)) {
      if(password && password.length > 7) {
        if(password === password2) {
          if(name) {
            let registerData: RegisterInput = {email: email, password: password, name: name, age: -1}
            register({ variables: { data: registerData } })
            console.log(data)
          }
          else {
            alert('provide a name')
          }
        }
        else {
          alert('passwords do not match')
        }
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
    if(event.target.name === "name")
      setName(event.target.value)
    if(event.target.name === "password")
      setPassword(event.target.value)
    if(event.target.name === "password2")
      setPassword2(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input name="email" type="text" value={email} onChange={handleChange} placeholder="mail"/>
        <input name="name" type="text" value={name} onChange={handleChange} placeholder="name"/>
      </label>
      <label>
        <input name="password" type="text" value={password} onChange={handleChange} placeholder="password"/>
        <input name="password2" type="text" value={password2} onChange={handleChange} placeholder="password again"/>
      </label>
      <input className="button" type="submit" value="Register" />
    </form>
  );
}

export function Register(){
    return <RegForm />
}