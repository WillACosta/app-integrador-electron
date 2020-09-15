var Firebird = require('node-firebird');

const options = {
    host: '127.0.0.1',
    port: 3050,
    database: 'C:\Users\Will\Documents\GitHub\app-integrador-electron\db\DB.FDB',
    user: 'SYSDBA',
    password: 'masterkey',
    lowercase_keys: false, // set to true to lowercase keys
    role: null,            // default
    pageSize: 4096         // default when creating database
}

Firebird.attach(options, function(err, db) {

    if (err)
        throw err;

    // db = DATABASE
    db.query('SELECT * FROM users', function(err, result) {
        // IMPORTANT: close the connection
        db.detach();
    });

});