    const router = require('express').Router();
    const Customer = require('../model/Customer');
    const { registerCustomerValidation } = require('../validations/customerValidation');


    router.post('/registerCustomer', (req, res) => { //Put back async

        //Lets validate the request
        const {error} = registerCustomerValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        const customer = new Customer({
            name: req.body.name,
            number: req.body.number,
            password: req.body.password
        });
        res.send(customer);
        // try {
        //     const savedCustomer = await customer.save();
        //     res.send(savedCustomer);
        // } catch (err) {
        //     res.status(400).send(err);
        // }
    });

    router.post('/loginCustomer', (req, res) => { //Put back async

        //Lets validate the request
        const {error} = registerCustomerValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        //Check if user exist in database
        // ==============================

        res.send(req.body);

        // try {
        //     const savedCustomer = await customer.save();
        //     res.send(savedCustomer);
        // } catch (err) {
        //     res.status(400).send(err);
        // }
    });

    module.exports = router;