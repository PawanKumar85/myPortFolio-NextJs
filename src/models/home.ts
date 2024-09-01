import mongoose from "mongoose";

const homeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    phone: {
      type: Number,
      required: true,
      minlength: 10,
      maxlength: 12,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    permanent: {
      type: String,
      required: true,
    },
    working: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Home = mongoose.models.homes || mongoose.model("homes", homeSchema);
export default Home;
