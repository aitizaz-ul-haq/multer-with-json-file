const mongoose = require('mongoose');

const uri = process.env.DB_URL;

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mongoose.connect(uri, options)
.then(() => {console.log('db connection succesful')})
.catch((error) => {console.log(error)} )