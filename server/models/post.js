const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = mongoose.Schema({
    title:{
       type:String,
       required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
       type: Schema.Types.ObjectId,
       ref:'User',
       required:true
    },
    date:{
        type:Date
    }
})

const Post = mongoose.model('Post',postSchema);
module.exports = { Post }