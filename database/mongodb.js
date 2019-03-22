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
  result: {type: Number}
});

const Calcs = mongoose.model('Calcs', CalcsSchema);

const addCalc = (info) => {
  return Calcs.create({
    name: info.label,
    numOne: info.numOne,
    numTwo: info.numTwo,
    operator: info.operator,
    result: info.result
  })
}

const getCalcs = () => {
  return Calcs.find()
}

module.exports = {
  addCalc: addCalc,
  getCalcs: getCalcs
}