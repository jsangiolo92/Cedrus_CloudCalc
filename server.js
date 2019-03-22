const express = require('express');
const parser = require('body-parser');
const helpers = require('./helpers.js');

const app = express();
const port = 3800;

app.use(express.static(('./client/dist')));
app.use(parser.json());

app.post('/calcs', (req, res) => {
  let result = helpers.calculate(req.body.numberOne, req.body.numberTwo, req.body.operator);
  console.log({result});
  res.status(201).send();
});

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});