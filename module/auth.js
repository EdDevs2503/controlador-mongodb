const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

function auth(user, password, dbname, callback = () => {})  {

    const url = `mongodb://${user}:${password}@localhost:27017/${dbname}`;
    const client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(function(err) {
        if (err) {
            console.error("Hubo un error conectando la base de datos", err)
        }
        console.log("Autenticación correcta");
        client.close(callback);
    });
}
module.exports = auth