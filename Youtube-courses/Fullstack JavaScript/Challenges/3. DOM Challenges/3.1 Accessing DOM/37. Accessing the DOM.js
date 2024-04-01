// 1. Select element h4 which holds text of "Red" by using getElementsByTagName

const h4 = document.getElementsByTagName("h4");
console.log(h4);

// 2. Select div with the class of "green" which holds text "Green" by using getElementByClassName()

const greenDiv = document.getElementsByClassName("green");
console.log(greenDiv);

// 3. Select div with ID of "blue" which holds the text "Blue" by using getElementById()

const blueDiv = document.getElementById("blue");
console.log(blueDiv);

// 4. Select div which has the class & Id of "yellow" by using querySelector()

const yellowDiv = document.querySelector(".yellow#yellow");
console.log(yellowDiv);

// 5. Select all the elements which has the class of "teal" by using querySelectorAll()

const tealDivs = document.querySelectorAll(".teal");
console.log(tealDivs);
