const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true}, (err) => {
        if(err){
            console.log(err);
    
            process.exit(1);
        }   
        
        console.log('Connected to database');
    })
}

module.exports = connectDB;