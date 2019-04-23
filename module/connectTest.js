const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const urlDefault = 'mongodb://localhost:27017';

function testConnect(url = urlDefault, callback = () => {}) {    
    const client = new MongoClient(url, { useNewUrlParser: true });
    
    client.connect(function(err) {
      if (err) {
        console.error("Hubo un error conectando la base de datos", err)
      }
      console.log("Coneccion es correcta");    
      client.close(callback);
    });
}

module.exports = testConnect;
