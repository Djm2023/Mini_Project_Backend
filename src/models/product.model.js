export default class ProductModel {
  constructor(_id, _name, _description, _price, _imageUrl) {
    this.id = _id;
    this.name = _name;
    this.description = _description;
    this.price = _price;
    this.imageUrl = _imageUrl;
  }
  static getAll() {
    return products;
  }

  static add(productObj) {
    let newProducts = new ProductModel(
      products.length + 1,
      productObj.name,
      productObj.productDescription,
      productObj.productPrice,
      productObj.productImageURL
    );
    products.push(newProducts);
  }
}

var products = [
  new ProductModel(
    1,
    "Product1",
    "Description of Product 1",
    225,
    "https://bookpalace13.com/wp-content/uploads/2022/06/51-nXsSRfZL._SX328_BO1204203200_-1.jpg"
  ),
  new ProductModel(
    2,
    "Product2",
    "Description of Product 2",
    2250,
    "https://bookpalace13.com/wp-content/uploads/2022/06/51-nXsSRfZL._SX328_BO1204203200_-1.jpg"
  ),
  new ProductModel(
    3,
    "Product3",
    "Description of Product 3",
    1000,
    "https://bookpalace13.com/wp-content/uploads/2022/06/51-nXsSRfZL._SX328_BO1204203200_-1.jpg"
  ),
];
