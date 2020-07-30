    const router = require('express').Router();
    const Business = require('../model/Business');
    const { registerBusinessValidation } = require('../validations/businessValidation');

    
    router.post('/registerBusiness', (req, res) => {

        //Lets validate the request
        const {error} = registerBusinessValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        const business = new Business({
            name: req.body.name,
            number: req.body.number,
            password: req.body.password
        });
        res.send(business);
        // try {
        //     const savedBusiness = await business.save();
        //     res.send(savedBusiness);
        // } catch (err) {
        //     res.status(400).send(err);
        // }
    });

    router.post('/loginBusiness', (req, res) => { //Put back async

        //Lets validate the request
        const {error} = registerBusinessValidation(req.body);
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