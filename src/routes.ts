import { Router } from "express";
import Product from "./controllers/Product";

const routes = Router();

routes.post("/product", Product.store);
routes.get("/product/:productId", Product.index);
routes.get("/products", Product.show);

export default routes;
