"use client";

import { NextResponse } from "next/server";
import React, { useState } from "react";

function AddNewUser() {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
  });

  const setUserProps = (e, inp) => {
    if (inp === "name") {
      setUser({ name: e.target.value, age: user.age, email: user.email });
    } else if (inp === "age") {
      setUser({ name: user.name, age: e.target.value, email: user.email });
    } else if (inp === "email") {
      setUser({ name: user.name, age: user.age, email: e.target.value });
    }
  };

  const AddNewUserHandler = async () => {
    const data = await fetch("http://localhost:3001/api/users");
    const { name, age, email } = data;

    if (!name || !age || !email) {
      return NextResponse.json(
        { error: "Bad Request, send all the data", ok: false },
        { status: 400 }
      );
    }

    
    return NextResponse.json(
      { res: "User Registeres", ok: true },
      { status: 201 }
    );
  };

  return (
    <>
      <section>
        <div>
          <label htmlFor="nameInp">Name: </label> <br />
          <input
            type="text"
            id="nameInp"
            value={user.name}
            onChange={(e) => setUserProps(e, "name")}
            required
            placeholder="Your name..."
          />
        </div>

        <div>
          <label htmlFor="ageInp">Age: </label> <br />
          <input
            type="number"
            id="ageInp"
            value={user.age}
            onChange={(e) => setUserProps(e, "age")}
            required
            min={13}
            max={100}
            placeholder="Your age..."
          ></input>
        </div>

        <div>
          <label htmlFor="emailInp">Email: </label> <br />
          <input
            type="email"
            id="emailInp"
            value={user.email}
            onChange={(e) => setUserProps(e, "email")}
            required
            placeholder="Your email..."
          ></input>
        </div>

        <div>
          <button
            className="bg-white m-2 px-3 py-1"
            onClick={() => AddNewUserHandler()}
          >
            Add new user
          </button>
        </div>
      </section>
    </>
  );
}

export default AddNewUser;
