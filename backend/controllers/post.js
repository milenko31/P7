const db = require('../models/index');
const Op = db.Sequelize.Op;
const jwt = require('jsonwebtoken')

//create post
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
            console.log(req.file.filename)
            if (userFound) {
                const post = db.Post.build({
                    title: req.body.title,
                    content: req.body.content,
                    userId: userFound.id,
                    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
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

//render all posts
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


// MAJ a post

exports.updatePost = async(req, res, next) => {
    let newImageUrl;
    let post = await db.Post.findOne({ where: { id: req.params.id } });
    // Await important ! findOne doit s'éxécuter AVANT post.imageURL !

    // Si nouvelle image celle ci est enregistrée
    if (req.file) {
        newImageUrl = `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`;
    }

    // Si nouvelle image, et image précédente existante, cette dernière est supprimée
    if (newImageUrl && post.imageUrl) {
        const filename = post.imageURL.split("/images/")[1];
        fs.unlink(`images/${filename}`, (error) => {
            if (error) console.log(error);
            else {
                console.log(`Deleted file: images/${filename}`);
            }
        });
    }

    db.Post.findOne({
            where: {
                id: req.params.id,
            },
        })
        .then(() => {
            db.Post.update({
                    content: req.body.content,
                    imageURL: newImageUrl, // Si nouvelle image, son chemin est enregistré dans la BDD
                    link: req.body.link,
                }, {
                    where: { id: req.params.id },
                })
                .then(() => res.status(200).json({ message: "Post mis à jour !" }))
                .catch((error) => res.status(400).json({ error }));
        })
        .catch((error) => res.status(500).json({ error }));
};

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