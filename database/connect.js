const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/recetas");
module.exports = mongoose;
