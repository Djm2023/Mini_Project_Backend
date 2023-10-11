const validateRequest = (req, res, next) => {
  const { name, productDescription, productPrice, productImageURL } = req.body;

  let errors = [];
  if (!name || name.trim() == "") {
    errors.push("Invalid name !!! Enter Name");
  }
  if (!productDescription || productDescription.trim() == "") {
    errors.push("Description is Empty!!! Add Description...");
  }
  if (!productPrice || parseFloat(productPrice) < 1) {
    errors.push("Price of Product must be a positive value");
  }
  try {
    let validUrl = new URL(productImageURL);
  } catch (error) {
    errors.push("Invalid URL is entered");
  }

  if (errors.length > 0) {
    return res.render("new-product-form", { errorMessage: errors[0] });
  }
  next();
};
export default validateRequest;