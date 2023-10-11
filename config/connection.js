const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/socialDB");

// export mongoose connection
module.exports = mongoose.connection;