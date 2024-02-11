const mongoose = require('mongoose');

const expensesSchema = mongoose.Schema({

    title: {
        type: String,
        require: true,
    },
    amount: {
        type: Number,
        require: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },


}, {
    timestamps: true
});

const ExpensesModel = mongoose.model("Expenses", expensesSchema);
module.exports = ExpensesModel;