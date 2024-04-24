// TypeScript has a special any type that can be used to represent any type. When a variable is annotated with the any type, TypeScript will allow it to have any type and disable all type checking for that variable and its properties.

// While the any type can be useful in certain situations, it should be used sparingly. Overuse of any can lead to untyped code and make it harder to catch type-related bugs during development. It's generally better to use more specific types whenever possible to get the benefits of TypeScript's type checking.

let color: any = "crimson";
color = 20;
color = true;
color();
console.log(color);