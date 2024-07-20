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

const insertManyDocs = async () => {
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

    const m2 = new MovieModel({
      name: "seila2",
      ratings: 2,
      money: 300000,
      genre: ["Action", "Adventure"],
      isActive: true,
      comments: [{ value: "Mucho loko meu!" }],
    });

    const m3 = new MovieModel({
      name: "Paia: As piscadas do além",
      ratings: 4,
      money: 50000000,
      genre: ["Epic", "Action", "Adventure"],
      isActive: true,
      comments: [{ value: "Caramba! Ele mita demais." }],
    });

    const m4 = new MovieModel({
      name: "Josoares, sua piranha.",
      ratings: 5,
      money: 10,
      genre: ["Terror", "Impressive", "Art"],
      isActive: true,
      comments: [{ value: "Don't have words for this!" }],
    });

    const result = await MovieModel.insertMany([m2, m3, m4]);

    console.log(result);

  } catch (error) {
    console.log(error);
  }
};

export { insertManyDocs };