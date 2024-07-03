# Node JS Behind the Scenes

In this chapter of the Node JS course, we will explore what builds Node JS and what it does behind the scenes, understanding the fundamentals of the language and it's procedures.

## Main Node JS Dependencies:

### **V8**
#### Converts JS code into machine code so that machine can understand. `Build in C++`

### **LibUV**

#### Opensource library with a strong focus on Asynchronous I/O (Input Output). `Build in C++`

Libuv is a multi-platform support library with a focus on async I/O. It was developed specially for Node.js.

##### Features

- File System Events;
- Async DNS Resolution;
- Async file system operations;
- Full-Featured event loop.

## Other Node JS Dependencies

### Lihttp

Designed to not make any syscalls or allocations.

### c-ares

For some Asynchronous DNS requests.

### OpenSSL

Implementations of many cryptographic functions.

### Zlib

For fast compression and decompression.

## Threads

> Each unit capable of executing code is called a thread.

**\- Big Bro Google**

Since JavaScriot is a single thread programming lannguage, Node.js is also single threaded, which means it can only do "one" thing at a time. 🤷‍♂️

### Event loops

The event loop will be generated in the thread & the role of this loop is to schedule which operations our thread should be performing at any given point.

```js
javascript(someProcess, function callback() {
  if (someProcess === "complete") callback();
});
```

#### What is a callback function?

- Callback is an asynchronous equivalent for a function;
- A callback functions is called at the completion of a given task;
- Callback helps us in the preventing from the blocking of the code;
- Node makes heavy use of callbacks.

#### Code Without Callback

```js
let fs = require("fs");

console.log("Start");

let data = fs.readFileSync("test.txt", "utf-8");
console.log("fata.toString()");

console.log("finished!");
```

##### Result:

```
Start
<Content from test.txt file>
Finished!
```

#### Code with Callback

```js
let fs = require("fs");

console.log("Start");

let data = fs.readFile("test.txt", (error, data) => {
  error ? console.log(error) : console.log(data.toString());
});

console.log("Program Ended!");
```

##### Result:

```
Start
Program Ended!
<Content from test.txt file>
```

## Node Process

### Single Thread

1. Initialize Program -> `Thread 1`
2. Import Modules -> `Thread 2`
3. Register the callbacks -> `Thread 3`
4. Start the event loop -> `Thread 4`