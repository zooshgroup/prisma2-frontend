import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

interface UserCreateInput {
  name: string,
  email: string,
  password: string,
  age: number,
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

  //why cannot I use data:response here? is it a new "data"?
  const registerCompleted = (data: any) => {
    let registeredUserName:string
    if(data &&data.signupUser) {
      registeredUserName = data.signupUser.name
      alert(`Successful registration for ${registeredUserName}, now you can log in.`)
    }
  }

  const registerError = (e: any) => {
    alert('Error in registration. Invalid data or e-mail is taken.')
  }

  const [register, { data:response, error }] = useMutation(REG_M, { errorPolicy: 'all' , onCompleted: registerCompleted, onError: registerError})

  function handleSubmit(event: any) {
    event.preventDefault()
    if(email && email.includes('@',1) && email.includes('.',3)) {
      if(password && password.length > 6) {
        if(password === password2) {
          if(name) {
            let registerData: UserCreateInput = {name: name, email: email, password: password, age: -1}
            register({ variables: { data: registerData } })
              /*
              ---- async await version without onCompleted event
              ---- why cant I use try , catch with onCompleted?
              let registeredUserName:string
              if(response && response.signupUser) {
                registeredUserName = response.signupUser.name
                alert(`Successful registration for ${registeredUserName}, now you can log in.`)
              }}
              */
          }
          else {
            alert('Please provide a name.')
          }
        }
        else {
          alert('Passwords do not match.')
        }
      }
      else {
        alert('Password must be at least 7 chars long.')
      }
    }
    else {
      alert('Enter a valid e-mail address.')
    }
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