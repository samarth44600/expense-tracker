const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(process.env.MONGOOSE_URL).then((conn) => {
        if (conn) {
            console.log("🟢 Connected to database. ");
        }
    }).catch((err) => {
        console.log("🔴 Problem connecting to database");
    })
}