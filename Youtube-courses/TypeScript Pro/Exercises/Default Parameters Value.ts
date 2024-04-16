function greet(person: string = "Irineu") {
  return `${person} says hello!`;
}

const res = greet("Laura");
console.log(res);