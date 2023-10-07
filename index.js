import express from 'express';
import ProductController from "./src/controllers/product.controller.js";
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
const app = express();
const port = 8000;

app.set("view engine" , "ejs");
app.set("views" , path.join(path.resolve() , 'src', 'views'));

app.use(expressEjsLayouts);

const productController = new ProductController();


app.get("/", productController.getProducts);
app.use(express.static("src/views"));

app.listen(port, (err) => {
  if (err) {
    console.log("Error in firing server");
  }
  console.log(`Server is running on :: ${port}`);
});
