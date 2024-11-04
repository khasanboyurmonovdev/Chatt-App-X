import mongoose from "mongoose";
const connectToMnogoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Errror connecting to MongoDB", error.message);
  }
};
export default connectToMnogoDB;
