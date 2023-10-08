import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts(req, res) {
    let products = ProductModel.get();
    console.log(products);
    //
    res.render("product", { product: products });
  }
  getAddForms(req, res) {
    return res.render("new-product-form");
  }
}
