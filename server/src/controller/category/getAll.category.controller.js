const CategoryModel = require("../../models/category.model");
const jsonResponseView = require("../../view/jsonResponse.view");

const getAllCategory = async (req, res) => {

    try {

        const category = await CategoryModel.find();
        if (!category) {
            return jsonResponseView({ res, status: 404, message: "Category not found" });
        }

        return jsonResponseView({ res, status: 200, message: "Success", data: category });
    } catch (error) {
        console.log("category", error);
        return jsonResponseView({ res, status: 500, message: "Internal Server Error" });
    }
}

module.exports = getAllCategory