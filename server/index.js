const express = require('express');
const http = require('http');
const cors = require('cors')
const app = express();
const server = http.createServer(app);


const dotenv = require('dotenv');
const mongoose = require('./src/controller/mongoose');
const expensesRoutes = require('./src/router/expenses.routes');
const categoryRoutes = require('./src/router/category.routes');


const port = 8008;

const corsConfig = {
    origin: "*"
}

//middleware
dotenv.config();
app.use(express.json())
app.use(cors(corsConfig))
app.use(express.urlencoded({ extended: true }))


mongoose();

app.use('/expenses', expensesRoutes);
app.use('/category', categoryRoutes);

app.get('/', (req, res) => {
    
    res.send("hello world")
    res.json({ message: "Success" })
})



server.listen(port, () => {
    console.log(`server listening on http://localhost:${port}/`)
})