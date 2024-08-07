"use client";

import React, { useReducer } from "react";
import Input from "@/components/input";

const inputChangeHandler = (state, payload) => {
  const inpsArray = [
    {
      name: state,
      lastName: "",
      username: "",
      email: "",
      password: "",
    },
    {
      name: "",
      lastName: state,
      username: "",
      email: "",
      password: "",
    },
    {
      name: "",
      lastName: "",
      username: state,
      email: "",
      password: "",
    },
    {
      name: "",
      lastName: "",
      username: "",
      email: state,
      password: "",
    },
    {
      name: "",
      lastName: "",
      username: "",
      email: "",
      password: state,
    },
    {
      name: "",
      lastName: "",
      username: "",
      email: "",
      password: state,
    },
  ];
  const payloadChange = payload.type;

  return inpsArray[payloadChange];
};

function SignUp() {
  const [signUpInp, dispatch] = useReducer(inputChangeHandler, {
    name: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  return (
    <main>
      <div className="formDiv">
        <form method="POST" autoComplete="on">
          <fieldset>
            <legend>User Info</legend>
            <Input
              label="Name"
              type="text"
              id="nameInp"
              value={signUpInp[0]}
              onChange={() => dispatch({ type: 0 })}
            />

            <Input
              label="Last Name"
              type="text"
              id="lastNameInp"
              value={signUpInp[1]}
              onChange={(e) => dispatch({ type: 1 })}
            />
          </fieldset>

          <fieldset>
            <legend>User Register Info</legend>

            <Input
              label="Username"
              type="text"
              id="usernameInp"
              value={signUpInp[2]}
              onChange={() => dispatch({ type: 2 })}
            />

            <Input
              label="Email"
              type="email"
              id="emailInp"
              value={signUpInp[3]}
              onChange={() => dispatch({ type: 3 })}
            />

            <Input
              label="Password"
              type="password"
              id="passwordInp"
              value={signUpInp[4]}
              onChange={() => dispatch({ type: 4 })}
            />

            <Input
              label="Repeat Password"
              type="password"
              id="passwordRepInp"
              value={signUpInp[5]}
              onChange={(e) => dispatch({ type: 5 })}
            />
          </fieldset>
          <div>
            <input type="submit" value={"Send"} />
          </div>
        </form>
      </div>
    </main>
  );
}

export default SignUp;
