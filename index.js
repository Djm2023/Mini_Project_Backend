import express from 'express';
import ProductController from "./src/controllers/product.controller.js";
const app = express();
const port = 8000;

const productController = new ProductController();


app.get("/", productController.getProducts);
app.use(express.static("src/views"));

app.listen(port, (err) => {
  if (err) {
    console.log("Error in firing server");
  }
  console.log(`Server is running on :: ${port}`);
});
