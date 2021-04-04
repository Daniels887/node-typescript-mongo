import request from "supertest";
import app from "../../src/app";
import mongoose from "mongoose";
import Product from "../../src/models/Product";

describe("Endpoints of Product", () => {
  afterAll(async () => {
    await mongoose.disconnect();
  });

  afterEach(async () => {
    await Product.deleteMany();
  });

  describe("#POST /product", () => {
    it("should create a new product", async () => {
      const response = await request(app)
        .post("/product")
        .send({ title: "Queijo", price: 10, description: "Queijo Gorgonzola" });

      expect(response.status).toBe(200);
    });
  });
  describe("#GET /product/:id", () => {
    it("should get a product using id", async () => {
      const product = await request(app)
        .post("/product")
        .send({ title: "Queijo", price: 10, description: "Queijo Gorgonzola" });

      const response = await request(app).get(`/product/${product.body._id}`);

      expect(response.body.title).toEqual("Queijo");
    });
  });
  describe("#GET /products", () => {
    it("should get all products", async () => {
      await request(app)
        .post("/product")
        .send({ title: "Queijo", price: 10, description: "Queijo Gorgonzola" });

      const response = await request(app).get("/products");

      expect(response.status).toBe(200);
      expect(response.body[0].title).toEqual("Queijo");
    });
  });
});
