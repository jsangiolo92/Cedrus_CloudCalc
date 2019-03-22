const express = require('express');
const parser = require('body-parser');

const app = express();
const port = 3800;

app.use(express.static(('./client/dist')));
app.use(parser.json());

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});