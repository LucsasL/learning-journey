// Importing Mongoose
import mongoose, { mongo } from "mongoose";

// Defining the Movie Schema
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, pubished: { type: Date, default: Date.now } },
  ],
});

// Creating the Movie Model
const MovieModel = mongoose.model("Movie", movieSchema);

// Function that updates all the data
const allDocs = async () => {
  try {
    const result = await MovieModel.updateMany({ ratings: 5 }, { ratings: 4.9 }); // All data

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// Function that updates a single document
const singleDoc = async () => {
  try {
    const result = await MovieModel.updateOne(
      { name: "Second Movie" },
      { name: "Movie: The return" }
    ); // Single data

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// Exporting the Function
export { allDocs, singleDoc };
