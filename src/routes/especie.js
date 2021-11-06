const express = require("express");
const userSchema = require('../models/especie');

const router = express.Router();

    // create user

    router.post('/especie', (req, res) => {
        const user = userSchema(req.body);
        user.save().then((data) => res.json(data)).catch((error) => res.json({message: error}));
    });

    //get all user
    router.get('/especie', (req, res) => {
        userSchema.find().then((data) => res.json(data)).catch((error) => res.json({message: error}));
    });

    //get a user
    router.get('/especie/:id', (req, res) => {
        const { id } = req.params;
        userSchema.findById(id).then((data) => res.json(data)).catch((error) => res.json({message: error}));
    });

     //update a user
     router.put('/especie/:id', (req, res) => {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;
        userSchema.updateOne({_id: id}, {$set: { name, age, email }}).then((data) => res.json(data)).catch((error) => res.json({message: error}));
    });

    //delete a user
    router.delete('/especie/:id', (req, res) => {
        const { id } = req.params;
        userSchema.remove({_id: id}).then((data) => res.json(data)).catch((error) => res.json({message: error}));
    });

module.exports = router;