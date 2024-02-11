const CategoryModel = require("../../models/category.model");
const jsonResponseView = require("../../view/jsonResponse.view");

const createCategory = async (req, res) => {
    try {
        const { title } = req.body;

        const payload = {
            title,
        }

        const newCategory = new CategoryModel(payload);
        const savedCategory = await newCategory.save();
        if (!savedCategory) {
            jsonResponseView({ res, status: 500, message: "Couldn't Saved", error: "Error Occurred while saving" });
        }
        return jsonResponseView({ res, status: 200, message: "Category Created", data: savedCategory });
    } catch (error) {
        console.log("create post error: ", error);
        jsonResponseView({ res, status: 500, message: "Internal Server Error", error: "Internal Server Error" });
    }
}

module.exports = createCategory;