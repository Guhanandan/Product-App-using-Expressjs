const Product = require('../models/product')

const getAllProductsStatic = async (req,res) => {
    const product = await Product.find({name : "accent chair"})
    res.status(200).json(product)
}

const getAllProducts = async (req , res) => {
    const product = await Product.find(req.query)
    res.status(200).json(product)
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}