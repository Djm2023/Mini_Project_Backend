import express from "express";
import ProductController from "./src/controllers/product.controller.js";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import validateRequest from "./src/middlewares/validation.middleware.js";

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));

app.use(expressEjsLayouts);

const productController = new ProductController();

app.use(express.static("src/views"));

app.get("/", productController.getProducts);

app.get("/new", productController.getAddForms);

app.post("/", validateRequest, productController.postAddProduct);

app.set("view engine", "ejs");

app.set("views", path.join(path.resolve(), "src", "views"));

app.listen(port, (err) => {
  if (err) {
    console.log("Error in firing server", err);
  }
  console.log(`Server is running on :: ${port}`);
});
