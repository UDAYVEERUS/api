const mongoose = require('mongoose')

const {Schema} = require('mongoose')

// Schema for Items
const itemSchema = new Schema({
    name : {
        type : String,
        required :  true
    },
    description : {
        type:String,
        default : '',
        required : false
    },
    message : {
        type : String,
        required: true
    }
})

const Item = mongoose.model('itemSchema', itemSchema)
module.exports = Item