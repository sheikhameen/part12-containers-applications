const express = require('express');
const { getAsync } = require('../redis');
const router = express.Router();

router.get('/', async (_, res) => {
  let addedTodos = await getAsync("added_todos")
  addedTodos = addedTodos? parseInt(addedTodos) : 0
  res.send({added_todos: addedTodos});
});

module.exports = router;
