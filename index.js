    const express = require('express');
    const app = express();
    const dotenv = require('dotenv');
    dotenv.config();

    //Import Routes
    const authCustomerRoute = require('./routes/authCustomer');
    const authBusinessRoute = require('./routes/authBusiness');

    //Connect to DB
    // mongoose.connect(
    //     process.env.DB_CONNECT, {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true
    //     },
    //     () => console.log('Connected to DB')
    // );

    //Middleware
    app.use(express.json());

    //Route Middlware
    app.use('/api/customer', authCustomerRoute);
    app.use('/api/business', authBusinessRoute);

    //Create new server
    app.listen(3000, () => console.log('Server is up and running'));