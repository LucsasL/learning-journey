function getRandomKeyValuePair<Type>(obj: { [key: string]: Type }): {
  key: string;
  value: Type;
} {
  const keys = Object.keys(obj);
  const randKey = keys[Math.floor(Math.random() * keys.length)];

  return { key: randKey, value: obj[randKey] };
}

const stringObject = {
  a: "Apple",
  b: "Banana",
  c: "Cherry",
};

const res = getRandomKeyValuePair<string>(stringObject);
console.log(res);

const numberObject = {
  a: 1,
  b: 2,
  c: 3,
};

const res2 = getRandomKeyValuePair<number>(numberObject);
console.log(res2);