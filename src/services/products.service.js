const Users = require('../models/users.model');
const Products = require('../models/products.model');
const { Sequelize, Op }= require('sequelize');

class ProductServices {
  static async getAll() {
    try {
      const result = await Products.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await Products.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(newProduct) {
    try {
      const result = await Products.create(newProduct);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await Products.destroy({where: {id}});
      return result;
    } catch (error) {
      throw error;
    }
  }  
};
module.exports = ProductServices;