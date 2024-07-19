# Schema and Models

## What are Schemas?

Mongoose schema is a blueprint that defines the strucuture of a document in a MongoDB collection. It defines the fields, their data types, and any additional options such as default values, validation rules, and indexes.

### Creating a Schema 👇

```js
import mongoose from "mongoose";

const schema = new mogoose.Schema({
  key: type, // 👈 Shorthand
  keyTwo: { type: String }, // 👈 Recommended
});
```

### Types

```js
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
});
```

## What is Models?

A model is a constructor function that represents a colection in MongoDB and defines the schema for each document.

### Schema and Model 👇

```js
const mongoose = require("mongoose");

// Define a schema for a "user" collection
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  age: Number,
});

// Create a model for the "user" collection using the schema
const User = mongoose.model("User", userSchema);

export default User;
```

### Inserting Document to Database

```js
// Define a schema for a "user" colection
const userSchema = new mongoose.Schema({ name: String });

// Create a model for the "user" collection using the schema
const User = mongoose.model("User", userSchema);

// Create a new instance of the User model with the data you want to store in the document
const newUser = new User({ name: "John Doe" });

// Save the new user document to the database using the save() method
newUser.save((err) => (err ? console.log(err) : console.log("User Saved.")));
```