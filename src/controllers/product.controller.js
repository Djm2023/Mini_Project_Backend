import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts(req, res) {
    let products = ProductModel.getAll();
    console.log(products);
    res.render("index", { product: products });
  }
  getAddForms(req, res) {
    return res.render("new-product-form" ,{errorMessage:null});
  }
  postAddProduct(req, res) {
    // validate our data
    const { name, description, price, imageUrl } = req.body;

    let errors = [];
    if (!name || name.trim() == "") {
      errors.push("Invalid name !!! Enter Name");
    }
    // if (!description) {
    //   errors.push("Description is Empty!!! Add Description...");
    // }
    if (!price || parseFloat(price) < 1) {
      errors.push("Price of Product must be a positive value");
    }
    try {
      let validUrl = new URL(imageUrl);
    } catch (error) {
      errors.push("Invalid URL is entered");
    }

    if (errors.length > 0) {
      return res.render("index", { errorMessage: errors[0] });
    }

    ProductModel.add(req.body);
    let products = ProductModel.getAll();
    return res.render("index", { product: products });
  }
}
