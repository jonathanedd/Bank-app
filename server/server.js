const { app } = require('./app');

//Import database
const { db } = require('./utils/database');


//Models
// const { User } = require('./models/users.model');
// const {  } = require('./models/transfers.model');


// Authentication database credentials
db.authenticate()
    .then(() => console.log('Database is Authenticated'))
    .catch( err => console.log(err))

// Sync sequelize models
db.sync()
    .then(() => console.log('synced'))
    .catch( err => console.log(err))

const PORT = process.env.PORT || 4002;

app.listen(PORT, () => {
    console.log(`Bank app Running in port ${PORT}`);
});



