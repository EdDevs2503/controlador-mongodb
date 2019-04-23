const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

function insertDocument(url, dbName, coleccion, items = [], callback = () => {}) {
    const client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(function(err, client) {
      assert.equal(null, err);
    
      const db = client.db(dbName);
      db.collection(coleccion).insertMany(items, function(err, r) {
        if (err) {
          console.error("Hubo un error conectando la base de datos", err)
        }
        client.close(callback)
      });      
    });
}

module.exports = insertDocument