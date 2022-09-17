const db = require('../models/index');
const Op = db.Sequelize.Op;
const jwt = require('jsonwebtoken')

exports.createPost = (req, res, next) => {
    const content = req.body.content;
    const title = req.body.title;
    const token = req.headers.authorization.split(' ')[1];

    const decodeToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodeToken.userId;

    console.log(req)
    db.User.findOne({
            where: { id: userId }
        })
        .then(userFound => {
            if (userFound) {

                const post = db.Post.build({
                    title: req.body.title,
                    content: req.body.content,
                    userId: userFound.id,
                    //  imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
                })

                post.save()
                    .then(() => res.status(201).json({ message: 'Votre post est crée' }))
                    .catch(error => res.status(400).json({ error: 'Oops' }))
            } else {
                return res.status(404).json({ error: "Utilisateur non trouvé" })

            }
        })
        .catch(error => {
            console.log(error)
        })
}


//afficher toutes les posts
/*exports.allPosts = (req, res, next) => {
    postModel.findAll()
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }));
};*/
exports.AllPosts = (req, res) => {
    db.Post.findAll({
            order: [
                ["createdAt", "ASC"]
            ],
        })
        .then((posts) => {
            console.log(posts)
            if (posts.length > 0) {
                res.status(200).json(posts);
            } else {
                res.status(200).json({ message: "Aucun poste pour le moment" });
            }
        })
        .catch((error) => res.status(500).json(error));
};

//créer une sauce
/*
exports.createOneSauce = (req, res, next) => {
    console.log(req.body)
    const sauceObject = JSON.parse(req.body.sauce);
    delete sauceObject._id;
    delete sauceObject._userId;
    const sauce = new sauceModel({
        ...sauceObject,
        userId: req.auth.userId,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });

    sauce.save()
        .then(() => { res.status(201).json({ message: 'Objet enregistré !' }) })
        .catch(error => { res.status(400).json({ error }) })

}
*/
// Modifier une sauce

/*
exports.modifySauce = (req, res, next) => {
    const sauceObject = req.file ? {
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {...req.body }
    sauceModel.updateOne({ _id: req.params.id }, {...sauceObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Sauce modifiée !' }))
        .catch(error => res.status(400).json({ error }))
}*/

// Supprimer une sauce
/*
exports.deleteSauce = (req, res, next) => {
    sauceModel.findOne({ _id: req.params.id })
        .then(sauce => {
            const filename = sauce.imageUrl.split('/images/')[1]
                // fs.unlink(`images/${filename}`, () => {
                //     sauceModel.deleteOne({ _id: req.params.id })
                //         .then(() => res.status(200).json({ message: 'Sauce supprimée !' }))
                //         .catch(error => res.status(400).json({ error: error }))
                // })
            sauceModel.deleteOne({ _id: req.params.id })
                .then(() => {
                    fs.unlink(`images/${filename}`);
                    res.status(200).json({ message: 'Sauce supprimée !' })
                })
                .catch(error => res.status(400).json({ error: error }))
        })
        .catch(error => res.status(500).json({ error }))
}
*/
// Aimer ou pas une sauce
/*
exports.likeOrDislike = (req, res, next) => {
    if (req.body.like === 1) {
        sauceModel.updateOne({ _id: req.params.id }, { $inc: { likes: req.body.like++ }, $push: { usersLiked: req.body.userId } })
            .then((sauce) => res.status(200).json({ message: 'Like ajouté !' }))
            .catch(error => res.status(400).json({ error }))
    } else if (req.body.like === -1) {
        sauceModel.updateOne({ _id: req.params.id }, { $inc: { dislikes: (req.body.like++) * -1 }, $push: { usersDisliked: req.body.userId } })
            .then((sauce) => res.status(200).json({ message: 'Dislike ajouté !' }))
            .catch(error => res.status(400).json({ error }))
    } else {
        sauceModel.findOne({ _id: req.params.id })
            .then(sauce => {
                if (sauce.usersLiked.includes(req.body.userId)) {
                    sauceModel.updateOne({ _id: req.params.id }, { $pull: { usersLiked: req.body.userId }, $inc: { likes: -1 } })
                        .then((sauce) => { res.status(200).json({ message: 'Like supprimé !' }) })
                        .catch(error => res.status(400).json({ error }))
                } else if (sauce.usersDisliked.includes(req.body.userId)) {
                    sauceModel.updateOne({ _id: req.params.id }, { $pull: { usersDisliked: req.body.userId }, $inc: { dislikes: -1 } })
                        .then((sauce) => { res.status(200).json({ message: 'Dislike supprimé !' }) })
                        .catch(error => res.status(400).json({ error }))
                }
            })
            .catch(error => res.status(400).json({ error }))
    }
}*/