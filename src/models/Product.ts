import mongoose from "mongoose";

class ProductSchema {
  init() {
    const ProductSchema = new mongoose.Schema({
      title: String,
      price: Number,
      description: String,
    });

    return ProductSchema;
  }
}

export default mongoose.model("Product", new ProductSchema().init());
