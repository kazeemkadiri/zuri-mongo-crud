const express = require('express');

const router = express.Router();

const controller = require('../controllers/todoController');

router.get('/', controller.todos);

module.exports = router;

