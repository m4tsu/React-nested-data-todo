const express     = require('express');
const withLogging = require('./with-logging');
const labels      = require('./sample').labels;

const router  = express.Router();
router.all('*', withLogging);

let id = 1;
const store = {};

const addLabel = ({text}) => {
  const label = {id: id++, text};
  store[label.id] = label;
  return label;
};

const removeLabel = id => delete store[parseInt(id)];
const updateLabel = (label, input) => Object.assign(label, input);
const findLabel = id => store[parseInt(id)];

/**
 * initialize label
 */
labels.forEach((label) => addLabel(label));

/**
 * routing label
 */

// index
router.get('/', (req, res) => {
  res.json(Object.keys(store).map(id => store[id]));
});

// create
router.post('/', (req, res) => {
  res.status('201').json(addLabel(req.body));
});

// update
router.put('/:id', (req, res) => {
  const label = findLabel(req.params.id);
  if (label) {
    res.json(updateLabel(label, req.body));
  } else {
    res.status('404').end();
  }
});


// delete
router.delete('/:id', (req, res) => {
  removeLabel(req.params.id);
  res.status('204').end();
});


module.exports = router;
module.exports.store = store;
