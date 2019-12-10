const express    = require('express');
const bodyParser = require('body-parser');
const todos      = require('./src/todos');
const labels     = require('./src/labels');

const app  = express();
const PORT = 3001;

app.use(bodyParser.json());
// CORSを許可する
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTION');
  next();
});

app.use('/todos', todos);
app.use('/labels', labels);
app.use((req, res) => res.status('404').end());

app.listen(PORT, () => {
  console.log(`sample server is listening to PORT:${PORT}`);
});
