const ExpensesModel = require("../../models/expenses.model");
const jsonResponseView = require("../../view/jsonResponse.view");

const getTodaysExpenses = async (req, res) => {
    try {
        const startDate = new Date(Date.now()).setHours(0, 0, 0, 0); // Start of today
        const endDate = new Date(Date.now()).setHours(23, 59, 59, 999); // End of today

        const todaysExpenses = await ExpensesModel.find({
            createdAt: { $gte: startDate, $lte: endDate }
        }).populate('category');

        return jsonResponseView({ res, status: 200, message: "Success", data: todaysExpenses });
    } catch (err) {
        console.error('Error fetching Expenses:', err);
        return jsonResponseView({ res, status: 500, message: "Internal Server Error" });
    }
}

module.exports = getTodaysExpenses;