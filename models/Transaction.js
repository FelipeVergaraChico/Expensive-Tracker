const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Por favor escreva algo']
    },
    amount: {
        type: Number,
        required: [true, 'Por favor adcione um numero positivo ou negativo']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Transaction', TransactionSchema)