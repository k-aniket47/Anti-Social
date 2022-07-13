const mongoose=require('mongoose')
const userschema =new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    }

},
{timestamp:true})

const User=mongoose.model('user',userschema)

module.exports=User;