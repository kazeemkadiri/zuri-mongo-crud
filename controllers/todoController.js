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

module.exports = {
    todos,
    createTodo
}