const mongoose = require('mongoose')

const {Schema} = require('mongoose')

// Schema for user
const userSchema = new Schema({
    name : {
        type : String,
        required :  true
    },
    email : {
        type:String,
        unique:true,
        lowercase:true,
        required : true
    },
    password : {
        type : String,
        minlength : [6,'Password must be at-least of length six'],
        required : true
    }
})

const User = mongoose.model('userSchema', userSchema)
module.exports = User