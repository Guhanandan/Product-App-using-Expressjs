const Product = require('../models/product')

const getAllProductsStatic = async (req,res) => {
    const products = await Product.find({name : "wooden table"})
    res.status(200).json({products , num_of_prod : products.length})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}