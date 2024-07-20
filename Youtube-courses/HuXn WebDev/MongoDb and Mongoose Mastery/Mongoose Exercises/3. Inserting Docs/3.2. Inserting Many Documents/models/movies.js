// Importing Mongoose
import mongoose from "mongoose";

// Defining Schema
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: v => v >= 10
  },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } }
  ]
});

// Creating the Model
const MovieModel = new mongoose.model("Movie", movieSchema);

// Function that inserts many documents in the collection
const insertManyDocs = async () => {
  try {
    // Creating the documents
    const m1 = new MovieModel({
      name: "Second Movie",
      ratings: 3,
      money: 3400000,
      isActive: true,
      comments: [{ value: "This continuation wasn't as good as I thought it would be." }],
    });

    const m2 = new MovieModel({
      name: "Third Movie",
      ratings: 4,
      money: 5000000,
      isActive: true,
      comments: [{ value: "That's better." }],
    });

    const m3 = new MovieModel({
      name: "Movie: The Origins",
      ratings: 5,
      money: 7000000,
      isActive: true,
      comments: [{ value: "Literally the best of the franchise lol." }],
    });

    const result = MovieModel.insertMany([m1, m2, m3]);

    console.log(result);

  } catch (error) {
    console.log(error);
  }
}

// Exporting the function
export { insertManyDocs };