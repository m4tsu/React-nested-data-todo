const express     = require('express');
const labels      = require('./labels');
const withLogging = require('./with-logging');
const todos       = require('./sample').todos;

const router = express.Router();
router.all('*', withLogging);

const labelsStore = labels.store;

let id = 1;
let todosStore = [];

/**
 * text: string
 */
const addTodo = todo => {
  if (todo.label && todo.label.id) todo.label = todo.label.id;
  Object.assign(todo, {id: id++});
  todosStore.push(todo);
  return todo;
};

const updateTodo = (todo, input) => {
  if (input.label && input.label.id) input.label = input.label.id;
  return Object.assign(todo, input);
};

const removeTodo = id => todosStore = todosStore.filter(t => t.id !== parseInt(id));

const mergeLabel = todo => Object.assign({}, todo, {label: labelsStore[todo.label]});
const mergeDep = todo => mergeLabel(todo);
const findTodo = id => todosStore.filter(t => t.id === parseInt(id))[0];

/**
 * initialize todo
 */
todos.forEach((todo) => addTodo(todo));

/**
 * routing todo
 */

// index
router.get('/', (req, res) => {
  res.json(todosStore.map(mergeDep));
});

// create
router.post('/', (req, res) => {
  res.status('201').json(mergeDep(addTodo(req.body)));
});

// read
router.get('/:id', (req, res) => {
  const todo = findTodo(req.params.id);
  if (todo) {
    res.json(mergeDep(todo));
  } else {
    res.status('404').end();
  }
});

// update
router.put('/:id', (req, res) => {
  const todo = findTodo(req.params.id);
  if (todo) {
    res.json(mergeDep(updateTodo(todo, req.body)));
  } else {
    res.status('404').end();
  }
});

// delete
router.delete('/:id', (req, res) => {
  removeTodo(req.params.id);
  res.status('204').end();
});

module.exports = router;
