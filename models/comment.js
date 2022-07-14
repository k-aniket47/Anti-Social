const mongoose=require('mongoose')

const commentschema= new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }
},{
    timestamps:true
})

const Comment =mongoose.model('Comment',commentschema)

module.exports=Comment;