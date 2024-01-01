import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
  },
  price: {
    type: "Number",
    required: true,
  },
  category: {
    type: "string",
    required: true,
  },
  poster: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Product = mongoose.model("Product", productSchema);
