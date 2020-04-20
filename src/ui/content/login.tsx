import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

interface LoginInput {
  password: string;
  email: string;
}

interface loginUserResponse {
  token: string;
}

interface LoginResponse {
  loginUser: loginUserResponse;
}

const LOGIN_M = gql`
  mutation Login($data: LoginInput!) {
    loginUser(data: $data) {
      token
    }
  }
`;
function LogForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginCompleted = (response: LoginResponse) => {
    if (response) {
      localStorage.setItem("token", response.loginUser.token);
      console.log("Successful login.");
    }
  };

  const loginError = () => {
    console.error("Error in registration. Invalid data or e-mail is taken.");
  };

  const [login, { data: success, error }] = useMutation(LOGIN_M, {
    errorPolicy: "all",
    onCompleted: loginCompleted,
    onError: loginError,
  });

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (email && email.includes("@", 1) && email.includes(".", 3)) {
      if (password) {
        let loginData: LoginInput = { email: email, password: password };
        login({ variables: { data: loginData } });
      } else {
        console.error("Enter a password");
      }
    } else {
      console.error("Enter a valid email address");
    }
  }

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    if (event.currentTarget.name === "email")
      setEmail(event.currentTarget.value);
    if (event.currentTarget.name === "password")
      setPassword(event.currentTarget.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          name="email"
          type="text"
          value={email}
          onChange={handleChange}
          placeholder="mail"
          required
        />
      </label>
      <label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="password"
          required
        />
      </label>
      <input className="button" type="submit" value="Log in" />
      {error && <p>Incorrect username or password.</p>}
      {success && <p>Successful login.</p>}
    </form>
  );
}

export function Login() {
  return <LogForm />;
}
