const express = require('express');
const parser = require('body-parser');
const mongo = require('./database/mongodb.js');
const helpers = require('./helpers.js');

const app = express();
const port = 3800;

app.use(express.static(('./client/dist')));
app.use(parser.json());

app.post('/calcs', (req, res) => {
  let result = helpers.calculate(req.body.numberOne, req.body.numberTwo, req.body.operator);
  let obj = {
    name: req.body.label,
    numOne: parseFloat(req.body.numberOne),
    numTwo: parseFloat(req.body.numberTwo),
    operator: req.body.operator,
    result: result
  }
  mongo.addCalc(obj)
  .then( () => {
    res.status(201).send();
  })
  .catch( (err) => {
    res.status(500).send('error in mongo addCalc');
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});