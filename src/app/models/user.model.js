//adding mongoose
const mongoose = require('mongoose');

//create user schema
const userSchema = mongoose.Schema({

       name : {
           type: String,
           required: [true, 'why no name ?']
       },

       email : {
           type: String,
           required: [true, 'why no email'],
           unique: true,
           lowercase: true,
           trim: true
       },

       password : {
           type: String,
           required: [true, 'why no passsword']
       },
       
       productImage: {
           type: String,
           required: true
       }

}, {
    versionKey: false,
    timestamps: true
});


//create model with the given schema
const User = mongoose.model('user', userSchema);

//export model
module.exports = {
    User
}