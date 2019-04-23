const MongoClient = require('mongodb').MongoClient;

function crudDelete(url, dbName, coleccion, data, callback  = () => {}) {
    const client = new MongoClient(url, { useNewUrlParser: true });
    
    client.connect(function(err) {
        if (err) {
            console.error("Hubo un error conectando la base de datos", err)
        }
        const db = client.db(dbName);
        const col = db.collection(coleccion);
        col.deleteOne(data.filter, function(err, r) {
            if (err) {
                console.error("Hubo un error conectando la base de datos", err)
            }
            client.close(callback)
        });
    });
}

module.exports = crudDelete