import { useState } from "react";

const Forms = () => {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You typed: ${username}`);
    setUsername("");
  };

  return (
    <>
      <h1>Form Demo</h1>

      <form onSubmit={handleSubmit}>
        <input value={username} onChange={handleChange} type="text" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Forms;
