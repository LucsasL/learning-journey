const person = {
  name: "Lucas Lira",
  age: 18,
  country: "Brazil",
};

function printPersonInfo({ name, age, country }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Country: ${country}`);
}

printPersonInfo(person);

let options = {
  title: "My menu",
  items: ["item1", "item2"],
}

function showMenu({ 
  title = "Untitled",
  width: w = 100,
  height: h = 200,
  items: [item1, item2]
}) {
  console.log(`${title} ${w} ${h}`);
  console.log(`${item1}`);
  console.log(`${item2}`);
}

showMenu(options);