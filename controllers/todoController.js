const Todo = require('./../models/Todo');

// This returns a paginated list of todos
const todos = async (req, res) => {
    const per_page = parseInt(req.query.per_page) || 10
    const page_no = parseInt(req.query.page_no) || 1
    
    var pagination = {
        limit: per_page ,
        skip:per_page * (page_no - 1)
    }

    const allTodos = await Todo.find({}).limit(pagination.limit).skip(pagination.skip).exec();

    return res.status(200).json({ data: allTodos, page: page_no });
}

const createTodo = async (req, res) => {
    const { title, description } = req.body;

    try{
        await new Todo({ title, description }).save();

        return res.status(200).end();
    }catch(err){
        console.log(err);
        
        return res.status(500).end();
    }
}

const updateTodo = async (req, res) => {
    const todoId = req.params.id;

    const inputFields = ['title', 'description'];

    const fieldsToUpdate = req.body;

    // Get the fields to update from the received body
    const validatedFields = inputFields.reduce((acc, fieldName) => {
        
        if(fieldsToUpdate[fieldName]){

            acc[fieldName] = fieldsToUpdate[fieldName];

        }

        return acc;

    }, {});

    // If no valid fields were received from the client, return a bad request status code
    if(Object.keys(validatedFields).length === 0){
        return res.status(400).end();
    }

    try{
        const updatedDoc = await Todo.findByIdAndUpdate(todoId, validatedFields, {new: true}).exec();

        return res.status(200).json({data: updatedDoc});
    }catch(err){
        console.log(err);

        return res.status(500).end();
    }
}

const deleteTodo = async (req, res) => {
    const { id } = req.params;

    try{
        const response = await Todo.findByIdAndDelete(id);

        if(!response){
            return res.status(500).end();
        }

        return res.status(200).end();
    }catch(err){

        return res.status(500).end();
        
    }
    
}

module.exports = {
    todos,
    createTodo,
    updateTodo,
    deleteTodo
}