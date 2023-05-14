const mongoose = require('mongoose');

const dbconnection = () => {
    mongoose
    .connect(process.env.DB_URI)
    .then((conn) => {
        console.log(`Databaes Connection : ${conn.connection.host}`);
    })
   /* .catch((err) => {
        console.log(`Databaes Connection : ${err}`);
        process.exit(1);
    })
    ;*/
}

 module.exports = dbconnection ;