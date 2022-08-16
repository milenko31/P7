const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('groupomania', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});


module.exports = sequelize;


/*sequelize.authenticate()
    .then(() => {
        console.log('✅ Connexion à MySQL valide');
        // Synchronisation des models avec les tables dans la base de données
        sequelize.sync()
            .then(() => {
                console.log('Tous les models ont été synchronisés avec succès.');
            })
            .catch(() => {
                console.log('Impossible de synchroniser les models');
            });
    })
    .catch((error) => {
        console.log('❌ Connexion à MySQL invalide', error);
    });*/