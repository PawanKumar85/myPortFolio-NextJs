import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    const connection = mongoose.connection;

    connection.on("collection", () => {
      console.log(`Connected to MongoDB`);
    });

    connection.on("error", () => {
      console.error(`MongoDB connection Failed`);
      process.exit(1);
    });
  } catch (error: any) {
    console.log(error.message);
    console.log("MongoDB Connection Failed");
  }
};

export default connectDB;
