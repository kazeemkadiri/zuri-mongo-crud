const mongoose = require('mongoose');

const MONGODB_LOCAL_URI = "mongodb://localhost:27017/tododb";

const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URI || MONGODB_LOCAL_URI, {useNewUrlParser: true}, (err) => {
        if(err){
            console.log(err);
    
            process.exit(1);
        }   
        
        console.log('Connected to database');
    })
}

module.exports = connectDB;