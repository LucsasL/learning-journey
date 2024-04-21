function filterArray<Type>(
  array: Type[],
  condition: (item: Type) => boolean
): Type[] {
  return array.filter((item) => condition(item));
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumber = filterArray<number>(
  numberArray,
  (number) => number % 2 === 0
);

console.log(evenNumber);

const stringArray = ["Apple", "Banana", "Cherry", "Date"];
const shortWords = filterArray(stringArray, (word) => word.length < 6);
console.log(shortWords);

interface Fruit {
  name: string;
  color: string;
}

const fruitArray: Fruit[] = [
  { name: "Apple", color: "Red" },
  { name: "Banana", color: "Yellow" },
  { name: "Watermelon", color: "Green" },
  { name: "Cherry", color: "Red" },
  { name: "Pineapple", color: "Yellow" },
  { name: "Grapes", color: "Purple" },
  { name: "Coconut", color: "Brown" },
];

const redFruits = filterArray<Fruit>(fruitArray, (fruit) => fruit.color === "Red");

console.log(redFruits);