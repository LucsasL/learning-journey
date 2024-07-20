// Importing Mongoose
import mongoose from "mongoose";

// Defining Schema
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10
  },
  isActive: { type: Boolean },
  comments: [{ value: { type: String }, published: { type: Date, default: Date.now } }],
});

// Creating the model
const MovieModel = new mongoose.model("Movie", movieSchema);

// Function that create and register a single document into the collection
const createDoc = async () => {
  try {
    // Creating a new document
    const m1 = new MovieModel({
      name: "Dunno what to add here tbh",
      ratings: 5,
      money: 1000000,
      isActive: true,
      comments: [{ value: "What a good movie." }],
    });

    const result = m1.save();

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// Exporting createDoc Function
export { createDoc };
