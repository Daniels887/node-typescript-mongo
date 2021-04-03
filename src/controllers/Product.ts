import Product from "../models/Product";

interface IProductController {
  index(req: any, res: any): Promise<any>;
  store(req: any, res: any): Promise<any>;
  show(req: any, res: any): Promise<any>;
}

class ProductController implements IProductController {
  async index(req: any, res: any) {
    const { productId } = req.params;

    const product = await Product.findById(productId);

    return res.json(product);
  }

  async store(req: any, res: any) {
    const { title, description, price } = req.body;

    const product = await Product.create({
      title,
      description,
      price,
    });

    return res.json(product);
  }

  async show(req: any, res: any) {
    const products = await Product.find();

    return res.json(products);
  }
}

export default new ProductController();
