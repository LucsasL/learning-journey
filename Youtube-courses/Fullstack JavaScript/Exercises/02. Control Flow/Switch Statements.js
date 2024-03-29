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
    console.log("Don't know what day is today.");
}