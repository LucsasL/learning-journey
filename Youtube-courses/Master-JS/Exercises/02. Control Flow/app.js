/*
    Conditionals statements
    
    if (condition) {
        ...
    }

    else if (condition) {
        ...
    }

    else {
        ...
    }
*/
let a = 10;
let b = 20;

if (a > b)
{
    console.log("A is greater than B");

} else if (a < b) {
    console.log("A is less than B");

} else {
    console.log("A is equal to B");

}

let time = 10;
let greetings;

if (time > 10) {
    greeting = "Good Morning";
    console.log(greetings);

} else if (time < 20) {
    greetings = "Good Afternoon";
    console.log(greetings);

} else {
    greettings = "Good Evening"
    console.log(greetings);

}


/*
    Switch Statements

    switch (expression) {
        case x:
            print
            break;
        
        case y:
            print
            break;       
    }
*/

let x = 0;
let bulb;

switch (x) {
    case 0:
        bulb = "off";
        break;
    
    case 1:
        bulb = "On";
        break;

    default:
        bulb = "No value";
}

console.log(bulb);

let day = "Monday";

switch (day) {
  case "Monday":
    console.log(`Today is ${day}`);
    break;

  case "Tuesday":
    console.log(`Today is ${day}`);
    break;

  case "Wednesday":
    console.log(`Today is ${day}`);
    break;

  case "Thursday":
    console.log(`Today is ${day}`);
    break;

  case "Friday":
    console.log(`Today is ${day}`);
    break;

  case "Saturday":
    console.log(`Today is ${day}`);
    break;

  case "Sunday":
    console.log(`Today is ${day}`);
    break;

  default:
    console.log("Don't know what day is today.")
}

// For loop
// DRY -> Don't Repeat Yourself

// for (initialExpression; Condition; IncrementExpression) {...}
for (let i = 0; i < 10; i++) {
    console.log("Lucsas ", i);
}

for (let i = 0; i < 10; i++) {
    console.log(`I Loop value: ${i}`);

    // Nested loop
    for (let j = 0; j < 10; j++) {
        console.log(`J Loop value: ${j}`);
    }
    console.log("")

}

// While (condition) {...}
let i = 1;

while (i <= 5) {
    console.log("Hello world ", i);
    i++;
}