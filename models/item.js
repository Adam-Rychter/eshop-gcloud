const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    name:{
        type:  String,
        required: true
    },
    desc: {
        type:  String,
        required: true
    },
    price: {
        type:  Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Item', OrderSchema)