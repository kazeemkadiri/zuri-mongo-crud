const { Schema, model } = require('mongoose');


const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    }, 
    timestamp: {
        type: Number,
        default: Date.now
    }
});

const Todo = model('Todo', TodoSchema);

module.exports = Todo;