const MongoClient = require('mongodb').MongoClient;

const urlDefault = 'mongodb://localhost:27017';

function crudRead( url = urlDefault, dbName, coleccion, callback  = (doc) => {}) {    
    const client = new MongoClient(url, { useNewUrlParser: true });
    
    client.connect(function(err) {
      if (err) {
        console.error("Hubo un error conectando la base de datos", err)
    }
      console.log("Coneccion es correcta");
      
        const db = client.db(dbName);
        const col = db.collection(coleccion)
        col.find({}).toArray(function (err, result) {
          if (err) throw err;
          client.close(function() {
            callback(result)
          });
        });
    });
}

module.exports = crudRead;
