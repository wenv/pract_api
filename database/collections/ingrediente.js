const mongoose = require ("../connect");
var ingredienteShema ={
  name : String,
  peso : Number,
  kcal : Number
};
var ingrediente = mongoose.model("ingrediente", ingredienteShema);
mudule.exports = ingrediente;
