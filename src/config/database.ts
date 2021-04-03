import mongoose from "mongoose";

class Database {
  constructor() {
    this.init();
  }

  init() {
    mongoose.connect("mongodb://db:27017/crud-node-mongo-docker", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
