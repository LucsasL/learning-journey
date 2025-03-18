"use client";

import React, { FormEvent, useRef, useState } from "react";

type formData = {
  name: string;
  email: string;
  password: string;
};

const Forms = () => {
  const [submittedData, setSubmittedData] = useState<formData>({
    name: "",
    email: "",
    password: "",
  });

  const nameInp = useRef<HTMLInputElement>(null);
  const emailInp = useRef<HTMLInputElement>(null);
  const passwordInp = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const nameValue = nameInp.current!.value;
    const emailValue = emailInp.current!.value;
    const passwordValue = passwordInp.current!.value;
    console.log(`${nameValue}, ${emailValue}, ${passwordValue}`);
    setSubmittedData({ name: nameValue, email: emailValue, password: passwordValue });
  };

  return (
    <>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <fieldset>
            <legend>Main User Info</legend>
            <div className="formDiv">
              <label htmlFor="nameInp">Name: </label> <br />
              <input
                type="text"
                id="nameInp"
                ref={nameInp}
                required
                placeholder="Insert Name..."
              />
            </div>

            <div className="formDiv">
              <label htmlFor="emailInp">Email: </label> <br />
              <input
                type="email"
                id="emailInp"
                ref={emailInp}
                required
                placeholder="Insert Email..."
              />
            </div>

            <div className="formDiv">
              <label htmlFor="passwordInp">Password: </label> <br />
              <input
                type="password"
                id="passwordInp"
                ref={passwordInp}
                placeholder="Insert Password..."
                required
              />
            </div>
          </fieldset>

          <div className="formDiv">
            <input
              type="submit"
              value="Send"
            />
          </div>
        </form>

        <section>
          <h1>
            Name: {submittedData.name}
          </h1>

          <h2>
            Email: {submittedData.email}
          </h2>

          <h2>
            password: {submittedData.password}
          </h2>
        </section>
      </div>
    </>
  );
};

export default Forms;
