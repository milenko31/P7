const express = require('express');
const app = express();
require('dotenv').config();
//dotenv "npm i dotenv" pour creer des variables d'environnment pour ne pas voir mes données sensibles dans mon projet

const path = require('path');
const helmet = require('helmet');
const Ddos = require('ddos');
const ddos = new Ddos;

app.use(express.json()); //intercepte toutes les requetes avec du .json 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

const db = require("./models/index");
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });
//app.use('/api/auth', userRoutes);
//app.use('/api', sauceRoutes);
module.exports = app;