    const mongoose = require('mongoose');

    const customerSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            min: 3,
            max: 30
        },
        // email: { 
        //     type: String,
        //     required: true,
        //     min: 100,
        //     max: 100
        // },
        number: {
            type: Number,
            required: true,
            min: 99999999,
            max: 999999999
        },
        password: { 
            type: String,
            required: true,
            max: 1024,
            min: 6
        },
        date_created: {
            type: Date,
            default: Date.now
        }
    });

    module.exports = mongoose.model('Customer' , customerSchema); 