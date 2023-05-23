const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/react-login")
.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log('failed');
})

const newSchema = new mongoose.Schema({
    msg:{
        type:String,
        required:true
    }
});    