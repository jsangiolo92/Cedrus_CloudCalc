const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cloudcalc', { useNewUrlParser: true }, (err) => {
  if (err) console.log('error connecting to mongodb: ', err);
  else console.log('connected to mongodb');
});

const CalcsSchema = mongoose.Schema({
  name: {type: String},
  numOne: {type: Number},
  numTwo: {type: Number},
  operator: {type: String},
  result: {type: Number},
  prevCalc: {type: String}
});

const Calcs = mongoose.model('Calcs', CalcsSchema);

const addCalc = (info) => {
  return Calcs.create({
    name: info.name,
    numOne: info.numOne,
    numTwo: info.numTwo,
    operator: info.operator,
    result: info.result,
    prevCalc: info.prevCalc
  })
}

const getCalcs = () => {
  return Calcs.find()
}

const deleteCalc = (id) => {
  return Calcs.findByIdAndDelete({
    _id: id
  })
}

module.exports = {
  addCalc: addCalc,
  getCalcs: getCalcs,
  deleteCalc: deleteCalc
}