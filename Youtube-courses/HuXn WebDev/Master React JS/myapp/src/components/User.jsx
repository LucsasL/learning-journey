const User = ({img, name, age, isMarried, hobbies, children}) => {
  return (
    <section>
      <img src={img} alt={name} width={200} />
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>Is married: {isMarried ? "Yes" : "No"}</h3>
      <h4>Hobbies: {hobbies}</h4>
      {children}
    </section>
  );
};

export default User;