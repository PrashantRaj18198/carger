const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {type:String, required:true},
    hashedPassword: {type:String, required:true},
    phone: {
        type:Number,
        require: true,
        validate: {
            validator: function(v) {
                return /d{10}/.test(v)
            }
        }
    },
    email: {type:String, required: true},
    address: {type: String, required:true},
    landmark: {type:String},
    city: {type:String, required:true},
    state: {type: String, required:true},
    gender: {type:String, enum: ['Male', 'Female', 'Prefer not to say']},
    coordinates: {
        latitude: {type:String},
        longitude: {type:String},
    },
    nearGas: {type:String},
    eId: {type:String},
    balance: {type:String},
    eWalletPin: {type:String},
    gasTransactions: [{
        transactionId: {type:String, required:true},
        gasAmount: {type:Number, required:true},
        status: {type:String, enum:['initiated', 'incomplete', 'completed', 'failed'], required=true},
        pId: {type:String, required:true},
        createdAt: {type:Date, default: Date.now, required=true},
        updatedAt: {type:Date, default: Date.now, required=true}, 
        cost: {type:Number, required=true}
    }],
    eWalletTransactions: [{
        transactionId: {type:String, required:true},
        status: {type:String, enum:['initiated', 'incomplete', 'completed', 'failed'], required=true},
        type: {type:String, enum:['credit', 'debit']},
        createdAt: {type:Date, default: Date.now, required=true},
        updatedAt: {type:Date, default: Date.now, required=true}, 
        cost: {type:Number, required=true}
    }]
});

schema.set('toJSON', {virtuals:true});

module.exports = mongoose.model('User', schema);