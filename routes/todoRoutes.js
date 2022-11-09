const express = require('express');

const router = express.Router();

const controller = require('../controllers/todoController');

router.get('/', controller.todos);

router.post('/create', controller.createTodo);

module.exports = router;

