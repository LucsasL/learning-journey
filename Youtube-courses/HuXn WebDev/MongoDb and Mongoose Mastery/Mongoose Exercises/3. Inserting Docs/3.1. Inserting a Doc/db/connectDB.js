import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Database Connected. Ready to go!");

  } catch (error) {
    console.log(error);
  }
}

export default connectDB;