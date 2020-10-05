const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        validate:[ validator.isEmail, 'invalid email']
    },
    password:{
        type:String,
        required: true,
        minlength:5
    },
    token:{
        type:String
    }
})


const User = mongoose.model('User',userSchema);
module.exports = { User }