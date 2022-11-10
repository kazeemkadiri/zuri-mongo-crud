const express = require('express');

const router = express.Router();

const controller = require('../controllers/todoController');

router.get('/', controller.todos);

router.post('/create', controller.createTodo);

router.patch('/update/:id', controller.updateTodo);

router.delete('/delete/:id', controller.deleteTodo);

module.exports = router;

