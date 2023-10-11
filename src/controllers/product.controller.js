import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts(req, res) {
    let products = ProductModel.getAll();
    console.log(products);
    res.render("index", { product: products });
  }
  getAddForms(req, res) {
    return res.render("new-product-form", { errorMessage: null });
  }
  postAddProduct(req, res) {
    ProductModel.add(req.body);
    let products = ProductModel.getAll();
    return res.render("index", { product: products });
  }
}
