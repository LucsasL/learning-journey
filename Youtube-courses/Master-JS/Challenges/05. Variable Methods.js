// 1. Create variable name (favActorFirstName) and store your fav actor name.
let favActorFirstName = "Dwayne";

// 2. Create variable name (favActorLastName) and store the last name of (FA).
let favActorLastName = "Johnson";

// 3. Create variable name (fullName) and concatenate (favActorFirstName, favActorLastName)
let fullName = `${favActorFirstName} ${favActorLastName}`;

// 4. Create variable name (uppercase) and CAPITALIZE your fav actor name.
let uppercase = fullName.toUpperCase();

// 5. Create a variable name (message) and store `My favorite Actor is (favActorFirstName) and say something about your fav actor` name should be in UPPERCASE.
let message = `My favorite Actor is ${fullName} because he is a great guy and is also a good meme.`;

// 6. Now append this message to the (message variable) `his best show is Silicon Valley`.
// 7. Now Log your message
console.log(message.concat(" His best show is IDK"));