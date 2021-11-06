const express = require('express');
const mongoose = require ('mongoose');
require("dotenv").config();
const userRoutes = require('./routes/mascota');
const userRoutesp = require('./routes/especie');
const userRoutesra = require('./routes/raza');

const path = require('path');
const fs =require('fs')


const app = express();
const port = process.env.PORT || 900;

const paginamascota =fs.readFileSync('mascota.html')


//middleware
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', userRoutesp);
app.use('/api', userRoutesra);



// routes
app.get("/",(req, res) => {
    res.send(paginamascota);
    
});

// conexion a mongo
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('conectado a mongoDB atlas')).catch((error) => console.error(error));



app.listen(port, () => console.log('Server listening on port', port));
