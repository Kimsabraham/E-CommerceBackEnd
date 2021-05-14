// import  sequelize library
const { Model, DataTypes } = require("sequelize");
// import database config.js
const sequelize = require("../config/connection");

// Initialize Product model 
class Product extends Model {}

// set up fields and rules
Product.init(
  {
    // defines id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // defines product name column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // price column
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    //stock column
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    // define category id column
    category_id: {
      type: DataTypes.INTEGER,
     
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
