const { Sequelize, DataTypes } = require('sequelize');


const postSchema = sequelize.define('Post', {
    userId: { //— l'ID de l'utilisateur qui a créé le post
        type: DataTypes.STRING,
        allowNull: false
    },
    name: { //— nom du post
        type: DataTypes.STRING,
        allowNull: false
    },
    titre: { // — titre du post
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl: { //-l'URL de l'image de la sauce téléchargée par l'utilisateur
        type: DataTypes.STRING,
        allowNull: false
    },
    likes: {
        type: DataTypes.NUMBER,
        defaultValue: 0,
    },
    usersLiked: { //— tableau des identifiants des utilisateurs qui ont aimé (= liked) le post
        type: DataTypes.NUMBER,
    },
    // isAdmin: DataType.BOOLEAN
    //comment
});

module.exports = mongoose.model('post', postSchema);