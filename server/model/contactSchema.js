const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
        },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
})

const Contact = mongoose.model('CONTACT',contactSchema)

module.exports = Contact