import { useState } from "react";
import "../styles/style.css";

const Validate = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [msg, setMsg] = useState("");

  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState("");

  const [nameErrorColor, setNameErrorColor] = useState("transparent");
  const [emailErrorColor, setEmailErrorColor] = useState("transparent");
  const [passwordErrorColor, setPasswordErrorColor] = useState("transparent");
  const [passwordConfirmErrorColor, setPasswordConfirmErrorColor] = useState("transparent");

  const submit = (e) => {
    e.preventDefault();

    if (username.length >= 8) {
      setErrorUsername("");
      setNameErrorColor("green");
      
    } else {
      setErrorUsername("Username must be 8 characters long");
      setNameErrorColor("red");
    }

    if (email.includes("@") && email !== "") {
      setErrorEmail("");
      setEmailErrorColor("green");
      
    } else {
      setErrorEmail("Your email is missing \"@\"");
      setEmailErrorColor("red");
    }

    if (password.length >= 8) {
      setErrorPassword("");
      setPasswordErrorColor("green");
      
    } else {
      setErrorPassword("The password has less than 8 characters");
      setPasswordErrorColor("red");
    }

    if (password === passwordConfirm && passwordConfirm !== "") {
      setErrorPasswordConfirm("");
      setPasswordConfirmErrorColor("green");
      
    } else {
      setErrorPasswordConfirm("The passwords don't match");
      setPasswordConfirmErrorColor("red");
    }
  }

  return (
    <>
      <section>
        <form>
          <div>
            <label htmlFor="name">Name: </label> <br />
            <input
              type="text"
              id="name"
              placeholder="Your name..."
              value={username}
              style={{ border: `2px solid ${nameErrorColor}` }}
              onChange={(e) => setUsername(e.target.value)}
              minLength={8}
              required
            />
            <span style={{ color: nameErrorColor }}>{errorUsername}</span>
          </div>

          <div>
            <label htmlFor="email">Email: </label> <br />
            <input
              type="email"
              id="email"
              placeholder="Your email..."
              value={email}
              style={{ border: `2px solid ${emailErrorColor}` }}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span style={{ color: emailErrorColor }}>{errorEmail}</span>
          </div>

          <div>
            <label htmlFor="password">Password: </label> <br />
            <input
              type="password"
              id="password"
              placeholder="Your Password..."
              value={password}
              style={{ border: `2px solid ${passwordErrorColor}` }}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              required
            />
            <span style={{ color: passwordErrorColor }}>{errorPassword}</span>
          </div>

          <div>
            <label htmlFor="passConf">Confirm Password: </label> <br />
            <input
              type="password"
              id="passConf"
              placeholder="Confirm Your Password..."
              value={passwordConfirm}
              style={{ border: `2px solid ${passwordConfirmErrorColor}` }}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              minLength={8}
              required
            />
            <span style={{ color: passwordConfirmErrorColor }}>{errorPasswordConfirm}</span>
          </div>

          <div>
            <label htmlFor="msg">Message: </label> <br />
            <textarea
              id="msg"
              placeholder="Your message..."
              value={msg}
              style={{ border: "2px solid transparent" }}
              onChange={(e) => setMsg(e.target.value)}
              required
            />
          </div>

          <div>
            <input type="submit" value="Submit" onClick={(e) => submit(e)} />
          </div>
        </form>
      </section>
    </>
  );
}

export default Validate;