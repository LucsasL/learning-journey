// Year, Month, Day, Hours, Minutes, Seconds, Milliseconds

const currentDate = new Date(2024, 2, 25, 12, 30, 0, 0);
console.log(currentDate);

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hours = date.getHours();
const min = date.getMinutes();
const seconds = date.getSeconds();

console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Day: ${day}`);
console.log(`Hours: ${hours}`);
console.log(`Minutes: ${min}`);
console.log(`Seconds: ${seconds}`);

console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());

date.setDate(date.getDate() + 1);
console.log(date);