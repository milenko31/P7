const express = require("express");
const path = require("path");
const helmet = require("helmet");

const userRoutes = require("./Routes/user");
const postRoutes = require("./Routes/post");
const app = express();
const db = require("./models/index");
//DB connection//
require("./config/dbConnexion");


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});

app.use(express.json());

// Ajoute extra headers pour protéger les routes
app.use(helmet());

app.use("/images", express.static(path.join(__dirname, "images")));

// app.use("/api/messages/", commentRoutes);
app.use("/api/auth", userRoutes);
app.use('/api/post', postRoutes);
// app.use("/api/auth", profileRoutes);
db.sequelize.sync({
        //   ECRASE LA BDD
        //   force: true
    })
    .then(() => {
        //   console.log("Synced db.");
    })
    .catch((err) => {
        //   console.log("Failed to sync db: " + err.message);
    });

module.exports = app;