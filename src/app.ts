import express, { Express } from "express";
import routes from "./routes";
import "config/database";

interface IApp {
  server: Express;
  middlewares(): void;
  routes(): void;
}

class App implements IApp {
  public server;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
