const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    employeeID : {
        type : String,
        required : 'This field is required',
        unique : true
    },
    fullName : {
        type : String,
        required : 'this field is required'
    },
    email : {
        type : String,
        required : 'this field is required'
    },
    mobile : {
        type : String,
        required : 'this field is required',
        unique : true
    },
    city : {
        type : String,
        required : 'this field is required'
    }
}/*,{collection : 'employeedb'}*/);

// Custom validation for email
employeeSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

module.exports = mongoose.model('Employee',employeeSchema);


