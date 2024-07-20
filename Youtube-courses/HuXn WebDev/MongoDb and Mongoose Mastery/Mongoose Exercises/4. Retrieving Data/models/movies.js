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

// Function that returns all the data
const allDocs = async () => {
  try {
    const result = await MovieModel.find(); // All data
    
    console.clear();
    result.forEach((movie) => {
      console.log(movie.name);
    })
    
  } catch (error) {
    console.log(error);
  }
}

// Function that returns one single document
const singleDoc = async () => {
  try {
    const result = await MovieModel.findOne({ name: "Second Movie" }); // Single Document

    console.log(result.ratings);

  } catch (error) {
    console.log(error);
  }
}

// Exporting the Function
export { allDocs, singleDoc };