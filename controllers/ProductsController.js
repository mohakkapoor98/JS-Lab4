const viewPath = ('products');
const Product = require('../models/product');

exports.show = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render(`${viewPath}/show`, {
    pageTitle: product.title,
    productName: product.name,
    productDesc: product.description,
    productPrice: product.price
  })
};

exports.new = (req, res) => {
  res.render(`${viewPath}/new`, {
    pageTitle: 'New Product'
  });
};

exports.create = async (req, res) => {
  console.log(`Products are : ${JSON.stringify(req.body, null, 2)}`);
  try {
    const product = await Product.create(req.body);
    res.redirect(`/products/${product.id}`);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};