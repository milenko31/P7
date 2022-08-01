const user = require('../models/users');
const bcrypt = require('bcrypt'); //hacher le mdp
const jwt = require('jsonwebtoken'); //token pour verifier l'authenticité des données par exemple pour une connexion dans avec id mdp etc