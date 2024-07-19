import mongoose from "mongoose";

// Define Schema
const moviesSchema = new mongoose.Schema({
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
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

// Creating Model
const MovieModel = mongoose.model("Movie", moviesSchema);

const createDoc = async () => {
  try {
    // Creating new document
    const m1 = new MovieModel({
      name: "seila",
      ratings: 5,
      money: 10000000,
      genre: ["Comedy", "Action", "Adventure"],
      isActive: true,
      comments: [{ value: "That was an amazing movie!" }],
    });
    const result = await m1.save();

    console.log(result);

  } catch (error) {
    console.log(error);
  }
};

export { createDoc };