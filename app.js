const express = require('express');
const app = express();
//const mongoose = require('mongoose');
require('dotenv').config();
//dotenv "npm i dotenv" pour creer des variables d'environnment pour ne pas voir mes données sensibles dans mon projet

const userRoutes = require('./routes/user');


mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.json()); //intercepte toutes les requetes avec du .json 



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/auth', userRoutes);
app.use('/api', sauceRoutes);
module.exports = app;