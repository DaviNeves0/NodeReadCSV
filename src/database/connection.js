const mongoose = require('mongoose');

//mongoDB connect 

const dbConnection = 
mongoose.connect('mongodb://localhost:27017/add')
.then(()=>{
    console.log('Connected DB')
})
.catch((err) => {
    console.log(err);
})


module.exports = dbConnection;
