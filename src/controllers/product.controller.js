import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts(req, res) {
    let products = ProductModel.get();
    console.log(products);
    res.render("product", { product: products });
  }
  getAddForms(req, res) {
    return res.render("new-product-form");
  }
  addNewProduct(req, res) { 
    ProductModel.add(req.body);
    let products = ProductModel.get();
    console.log(req.body);
    // console.log(req);

    return res.render("product",{product:products});
  }
}
