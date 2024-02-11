const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({

    title: {
        type: String,
        require: true,
    },



}, {
    timestamps: true
});

const CategoryModel = mongoose.model("Category", categorySchema);
module.exports = CategoryModel;