const mongoose = require('mongoose');
const { isMinusToken } = require('typescript');

const EmployeeSchema = new mongoose.Schema({
    // name: String,
    // email: String,
    // password: String
    name:{
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
        
    }
});

const EmployeeModel = mongoose.model("employees", EmployeeSchema);
module.exports = EmployeeModel;
