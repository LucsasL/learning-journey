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

