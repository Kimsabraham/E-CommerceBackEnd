// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// product by category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// by how many products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "SET NULL",
});

// many tag products
Product.belongsToMany(Tag, {
  through: ProductTag,
  // as: 'product_tag',
  foreignKey: "product_id",
});

// tag id product
Tag.belongsToMany(Product, {
  through: ProductTag,
  // as: 'product_tag',
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
