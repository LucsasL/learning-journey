"use client";

import React, { useReducer } from 'react';
import Input from '@/components/input';

const loginChangeHandler = (state, payload) => {
  const inpsArray = [
    {
      email: state,
      password: ""
    },
    {
      email: "",
      password: state
    }
  ];
  const payloadChange = payload.type;

  return inpsArray[payloadChange];
}

function SignIn() {
  const [signInInp, dispatch] = useReducer(loginChangeHandler, {
    email: "",
    password: "",
  });

  return (
    <>
      <main>
        <div className='formDiv'>
          <form method='POST' autoComplete='on'>
            <fieldset>
              <legend>User Info</legend>

              <Input 
                label="Email"
                type="email"
                id="emailInp"
                value={signInInp[0]}
                onChange={() => dispatch({ type: 0 })}
              />

              <Input 
                label="Password"
                type="password"
                id="passwordInp"
                value={signInInp[1]}
                onChange={() => dispatch({ type: 1 })}
              />

              <div>
                <input type='submit' value={"Send"} />
              </div>
            </fieldset>
          </form>
        </div>
      </main>
    </>
  );
}

export default SignIn;