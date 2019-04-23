const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

function crudUpdate(url, dbName, coleccion, data, callback  = () => {}) {
    const client = new MongoClient(url, { useNewUrlParser: true });
    
    client.connect(function(err) {
        if (err) {
            console.error("Hubo un error conectando la base de datos", err)
        }
        const db = client.db(dbName);
        const col = db.collection(coleccion);
        col.updateOne(data.filter, {$set: data.update}, function(err, r) {
            assert.equal(null, err);
            console.log("Actualizacion lesta")
            client.close(callback);
        });
    });
}

module.exports = crudUpdate