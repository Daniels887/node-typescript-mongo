import mongoose from "mongoose";

class Database {
  constructor() {
    this.init();
  }

  async init() {
    await mongoose.connect(
      `mongodb://db:27017/${
        process.env.NODE_ENV === "test"
          ? "crud-node-mongo-docker-test"
          : "crud-node-mongo-docker"
      }`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  }
}

export default new Database();
