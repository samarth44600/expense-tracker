const ExpensesModel = require("../../models/expenses.model");
const jsonResponseView = require("../../view/jsonResponse.view");

const createExpenses = async (req, res) => {
    try {
        const { title, amount, category } = req.body;

        const payload = {
            title, amount, category
        }

        const newExpenses = new ExpensesModel(payload);
        const savedExpenses = await newExpenses.save();
        if (!savedExpenses) {
            jsonResponseView({ res, status: 500, message: "Couldn't Saved", error: "Error Occurred while saving" });
        }
        return jsonResponseView({ res, status: 200, message: "Expenses Created", data: savedExpenses });
    } catch (error) {
        console.log("create post error: ", error);
        jsonResponseView({ res, status: 500, message: "Internal Server Error", error: "Internal Server Error" });
    }
}

module.exports = createExpenses;