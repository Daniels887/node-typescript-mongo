import { Request } from "express";
import Product from "../models/Product";

interface IProductController {
  index(req: Request<{ productId: string }>, res: any): any;
  store(req: Request, res: any): any;
  show(req: Request, res: any): any;
}

class ProductController implements IProductController {
  async index(req: Request<{ productId: string }>, res: any) {
    const { productId } = req.params;

    const product = await Product.findById(productId);

    return res.json(product);
  }

  async store(req: Request, res: any) {
    const { title, description, price } = req.body;

    const product = await Product.create({
      title,
      description,
      price,
    });

    return res.json(product);
  }

  async show(req: Request, res: any) {
    const products = await Product.find();

    return res.json(products);
  }
}

export default new ProductController();
