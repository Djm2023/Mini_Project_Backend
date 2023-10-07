
export default class ProductModel{
    constructor(_id,_name,_description,_price,_imageUrl){
      this.id = _id
      this.name = _name
      this.description = _description
      this.price = _price
      this.imageUrl = _imageUrl
    }
    static get(){
        return products;
    }
}

var products = [
    new ProductModel(1 ,'Product1' , 'Description of Product 1' , 225 , 'http://www.googleimageUrl.com'),
    new ProductModel(2 ,'Product2' , 'Description of Product 2' , 2250 , 'http://www.googleimageUrltwo.com'),
    new ProductModel(3 ,'Product3' , 'Description of Product 3' , 1000 , 'http://www.googleimageUrlthree.com'),
];