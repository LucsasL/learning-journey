function reversePair<Type, U>(value: Type, value2: U): [U, Type] {
  return [value2, value];
}

const reversedPair = reversePair("Hello", 20);
console.log(reversedPair);