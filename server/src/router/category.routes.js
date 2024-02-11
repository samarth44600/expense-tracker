const createCategory = require('../controller/category/create.category.controller');
const getAllCategory = require('../controller/category/getAll.category.controller');

const categoryRoutes = require('express').Router();

categoryRoutes.post('/', createCategory);
categoryRoutes.get('/', getAllCategory);

module.exports = categoryRoutes;