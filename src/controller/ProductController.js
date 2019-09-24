const mongoose = require('mongoose');
const Product = mongoose.model('Produto');
module.exports = {
    async index(req, res) {
        const produtos = await Product.find();

        return res.json(produtos);

    }
};