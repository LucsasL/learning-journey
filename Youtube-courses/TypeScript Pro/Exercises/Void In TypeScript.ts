// Void is a type that represents the absence of any value. It is often used as the return type for functions that do not return a value.

// function printMessage(message: string) === function printMessage(message: string) : void

function printMessage(message: string) : void {
  console.log(`This is my message: ${message}`);

  // ERROR
  // Return Message
}

printMessage("Hello, how are you?");