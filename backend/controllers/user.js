const db = require('../models/index');
const Op = db.Sequelize.Op;
const jwt = require('jsonwebtoken'); //token pour verifier l'authenticité des données par exemple pour une connexion dans avec id mdp etc
const bcrypt = require('bcrypt'); //hacher le mdp

// Créer un compte utilisateur
exports.signup = (req, res) => {
    db.User.findOne({
            where: {
                email: req.body.email,
            },
        })
        .then((user) => {
            if (!user) {
                bcrypt
                    .hash(req.body.password, 10)
                    .then((hash) => {
                        const user = db.User.build({
                            email: req.body.email,
                            name: req.body.name,
                            firstname: req.body.firstname,
                            password: hash,
                            isAdmin: false
                        })
                        user.save()
                            .then((user) => {
                                res.status(201).json({
                                    userId: user.id,
                                    isAdmin: user.isAdmin,
                                    message: "Utilisateur créé !"
                                });
                            })
                            .catch((error) => res.status(400).json({ error: error }));
                    })
            } else {
                return res.status(409).json({ error: "Cet utilisateur existe déjà !" });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};
// Se connecter à un compte utilisateur
exports.login = (req, res) => {
    db.User.findOne({
            where: {
                email: req.body.email,
            }
        })
        .then((user) => {
            if (!user) {
                return res.status(409).json({ error: "Email non-trouvé, Veuillez vous inscrire d'abord !" });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(409).json({ error: 'Mot de passe incorrect !' })
                    }
                    res.status(200).json({
                        userId: user.id,
                        token: jwt.sign({ userId: user.id },
                            "RANDOM_TOKEN_SECRET", { expiresIn: '24h' },
                        )
                    })
                })
                .catch(error => res.status(500).json({ error }))

        })
        .catch(error => res.status(500).json({ error }))
};
// Deconnexion d'un compte utilisateur








/*exports.signup = (req, res) => {
    db.User.findOne({
            where: {
                email: req.body.email,
            },
        })
        .then((user) => {
            if (!user) {
                bcrypt
                    .hash(req.body.password, 10)
                    .then((hash) => {
                        const user = db.User.build({
                            email: req.body.email,
                            name: req.body.name,
                            firstname: req.body.firstname,
                            password: hash,
                            isAdmin: false
                        })
                        user.save()
                            .then((user) => {
                                res.status(201).json({
                                    userId: user.id,
                                    isAdmin: user.isAdmin,
                                    message: "Utilisateur créé !"
                                });
                            })
                            .catch((error) => res.status(400).json({ error: error }));
                    })
            } else {
                return res.status(409).json({ error: "Cet utilisateur existe déjà !" });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};*/