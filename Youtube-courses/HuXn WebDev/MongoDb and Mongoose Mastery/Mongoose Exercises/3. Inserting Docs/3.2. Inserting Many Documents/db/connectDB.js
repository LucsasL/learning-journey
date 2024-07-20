import mongoose from "mongoose";

// Creating the function to connect the database
const connectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Database Connected Successfully!");

  } catch (error) {
    console.log(error);
  }
}

// Export the function
export default connectDB;