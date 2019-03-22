const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cloudcalc', { useNewUrlParser: true }, (err) => {
  if (err) console.log('error connecting to mongodb: ', err);
  else console.log('connected to mongodb');
})

module.exports = {
  
}