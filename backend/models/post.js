const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate(models) {
            // define association here
        }
    };
    Post.init({
        title: DataTypes.STRING,
        userId: DataTypes.STRING, //id de l'utilisateur qui créer le post
        content: DataTypes.STRING, //texte du post
        imageUrl: DataTypes.STRING, //image du post de l'utilisateur
        dislikes: DataTypes.INTEGER, //— nombre d'utilisateurs qui n'aiment pas (= dislike) le post
        likes: DataTypes.INTEGER, //— nombre d'utilisateurs qui aiment (= likent) le post
        usersLiked: DataTypes.STRING, //— tableau des identifiants des utilisateurs qui ont aimé (= liked) le post
        usersDisliked: DataTypes.STRING //— tableau des identifiants des utilisateurs qui ont aimé (= liked) le post
    }, {
        sequelize,
        modelName: 'Post',
    });
    return Post;
};