const postModel = require('../models/posts');
const fs = require('fs-extra');

//créer un post

exports.createOnePost = (req, res, next) => {
    console.log(req.body)
    const postObject = JSON.parse(req.body.post);
    delete postObject._id;
    delete postObject._userId;
    const post = new postModel({
        ...postObject,
        userId: req.auth.userId,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });

    post.save()
        .then(() => { res.status(201).json({ message: 'Création du post effectué !' }) })
        .catch(error => { res.status(400).json({ error }) })

}

// Modifier un post


exports.modifyPost = (req, res, next) => {
    const postObject = req.file ? {
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {...req.body }
    postModel.updateOne({ _id: req.params.id }, {...postObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Post modifié !' }))
        .catch(error => res.status(400).json({ error }))
}

// Supprimer un post

exports.deletePost = (req, res, next) => {
    postModel.findOne({ _id: req.params.id })
        .then(post => {
            const filename = post.imageUrl.split('/images/')[1]
                // fs.unlink(`images/${filename}`, () => {
                //     sauceModel.deleteOne({ _id: req.params.id })
                //         .then(() => res.status(200).json({ message: 'Sauce supprimée !' }))
                //         .catch(error => res.status(400).json({ error: error }))
                // })
            postModel.deleteOne({ _id: req.params.id })
                .then(() => {
                    fs.unlink(`images/${filename}`);
                    res.status(200).json({ message: 'Post supprimée !' })
                })
                .catch(error => res.status(400).json({ error: error }))
        })
        .catch(error => res.status(500).json({ error }))
}

// Aimer ou pas un post

exports.likeOrDislike = (req, res, next) => {
    if (req.body.like === 1) {
        postModel.updateOne({ _id: req.params.id }, { $inc: { likes: req.body.like++ }, $push: { usersLiked: req.body.userId } })
            .then((post) => res.status(200).json({ message: 'Like ajouté !' }))
            .catch(error => res.status(400).json({ error }))
    } else if (req.body.like === -1) {
        postModel.updateOne({ _id: req.params.id }, { $inc: { dislikes: (req.body.like++) * -1 }, $push: { usersDisliked: req.body.userId } })
            .then((post) => res.status(200).json({ message: 'Dislike ajouté !' }))
            .catch(error => res.status(400).json({ error }))
    } else {
        postModel.findOne({ _id: req.params.id })
            .then(post => {
                if (post.usersLiked.includes(req.body.userId)) {
                    postModel.updateOne({ _id: req.params.id }, { $pull: { usersLiked: req.body.userId }, $inc: { likes: -1 } })
                        .then((post) => { res.status(200).json({ message: 'Like supprimé !' }) })
                        .catch(error => res.status(400).json({ error }))
                } else if (post.usersDisliked.includes(req.body.userId)) {
                    postModel.updateOne({ _id: req.params.id }, { $pull: { usersDisliked: req.body.userId }, $inc: { dislikes: -1 } })
                        .then((post) => { res.status(200).json({ message: 'Dislike supprimé !' }) })
                        .catch(error => res.status(400).json({ error }))
                }
            })
            .catch(error => res.status(400).json({ error }))
    }
}