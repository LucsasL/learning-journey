// Props / Properties:

// -> Props are arguments passed into React components.

// -> Props are passed to components via HTML attributes.

const User = (props) => {
  return (
    <section>
      <img src={props.img} alt={props.name} width={200} />
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h3>Is married: {props.isMarried}</h3>
      <h4>Hobbies: {props.hobbies}</h4>
    </section>
  );
};

function Props() {
  return (
    <User
      img="https://avatars.githubusercontent.com/u85052811?v=4"
      name="Irineu Sabo"
      age={18}
      isMarried={false}
      hobbies={["Coding", "Reading", "Sleeping"]}
    />
  );
}


export default Props;