// Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state and let React update the UI to match them.

// If
const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({ isValid }) => {
  if (isValid) {
    return <ValidPassword />;
  }

  return <InvalidPassword />;
};

// && Operator
const Cart = () => {
  const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoodie"];

  return (
    <>
      <h1>Cart 🛒</h1>
      {items.length > 0 && <h2>You have {items.length} items in your Cart</h2>}

      <ul>
        <h3>👇 Products</h3>
        {items.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </>
  );
}

// Ternary Operator
const Password2 = ({ isValid }) => {
  // if (isValid) {
  //   return <ValidPassword />;
  // } else {
  //   return <InvalidPassword />;
  // }

  return isValid ? <ValidPassword /> : <InvalidPassword />;
};

export default Password;