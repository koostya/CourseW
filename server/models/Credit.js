const mongoose = require('mongoose')
const Schema = mongoose.Schema

const creditSchema = new Schema({
    user: String,
    creditor: String,
    quantity: Number,
    active: Boolean 
})

const Credit = mongoose.model('Credit', creditSchema)

module.exports = Credit
