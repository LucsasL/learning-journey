// Attributes

const link = document.querySelector("a");
const input = document.querySelector("input");

// href

console.log(link.href);

// type

console.log(input.value);
console.log(input.type);

// Getting Attributes

console.log(link.target);

// Setting Attributes

link.href = "github.com/lucsasl";
console.log((input.value = "GoodBye, World!"));
console.log((input.placeholder = "Whasup?"));

// getAttribute(attrName)

console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));

// setAttribute(attrName, value)
link.setAttribute("rel", "noopener noreferrer");
link.setAttribute("target", "_blank");