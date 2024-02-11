const ExpensesModel = require("../../models/expenses.model");
const jsonResponseView = require("../../view/jsonResponse.view");

const getAllExpenses = async (req, res) => {

    try {

        const expenses = await ExpensesModel.find().populate("category");
        if (!expenses) {
            return jsonResponseView({ res, status: 404, message: "Expenses not found" });
        }

        return jsonResponseView({ res, status: 200, message: "Success", data: expenses });
    } catch (error) {
        return jsonResponseView({ res, status: 500, message: "Internal Server Error" });
    }
}

module.exports = getAllExpenses