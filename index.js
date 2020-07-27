const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//Connect to DB
//FROUPkGOarsgEXVd <<<<<password
mongoose.connect(
    process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('Connected to DB'));

//Import Routes
const authRoute = require('./routes/auth');

//Route Middlware
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server is up and running'));