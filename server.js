const express = require('express');
const parser = require('body-parser');
const mongo = require('./database/mongodb.js');
const helpers = require('./helpers.js');

const app = express();
const port = 3800;

app.use(express.static(('./client/dist')));
app.use(parser.json());

app.get('/calcs', (req, res) => {
  mongo.getCalcs()
  .then( (results) => {
    res.status(200).send(results);
  })
  .catch( (err) => {
    res.status(500).send('error in mongo getCalcs');
  });
});

app.post('/calcs', (req, res) => {
  let result = helpers.calculate(req.body.numberOne, req.body.numberTwo, req.body.operator);
  console.log('label is: ', req.body.label)
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

app.delete('/calcs', (req, res) => {
  mongo.deleteCalc(req.query.id)
  .then( () => {
    res.status(202).send();
  })
  .catch( (err) => {
    res.status(500).send('error in mongo deleteCalc');
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});