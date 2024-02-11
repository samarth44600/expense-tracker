const createExpenses = require('../controller/expenses/create.expenses.controller');
const getAllExpenses = require('../controller/expenses/getAll.expenses.controller');
const getTodaysPosts = require('../controller/expenses/getToday.expenses.controller');

const expensesRoutes = require('express').Router();

expensesRoutes.post('/', createExpenses);
expensesRoutes.get('/', getAllExpenses);
expensesRoutes.get('/today', getTodaysPosts);

module.exports = expensesRoutes;