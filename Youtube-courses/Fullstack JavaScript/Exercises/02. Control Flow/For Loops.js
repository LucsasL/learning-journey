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
  console.log("");
}