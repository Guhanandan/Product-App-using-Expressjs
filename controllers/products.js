const Product = require('../models/product')

const getAllProductsStatic = async (req,res) => {
    const products = await Product.find({name : "wooden table"})
    res.status(200).json({products , num_of_prod : products.length})
}

const getAllProducts = async (req,res) => {
    console.log(req.query)
    const products = await Product.find(req.query) 
    res.status(200).json(products)
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}