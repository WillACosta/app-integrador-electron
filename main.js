const { app, BrowserWindow } = require("electron");

app.whenReady().then(() => {
  const newWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  newWindow.loadFile("index.html"); // Carrega o arquivo html para a janela criada

  newWindow.webContents.openDevTools(); // Habilita o dev tolls
});

var Firebird = require('node-firebird');

const options = {
    host: '127.0.0.1',
    port: 3050,
    database: 'C:/BD/DB.FDB',
    user: 'SYSDBA',
    password: 'masterkey',
    lowercase_keys: false, // set to true to lowercase keys
    role: null,            // default
    pageSize: 4096         // default when creating database
}

Firebird.attach(options, function(err, db) {
    if (err)
        throw err;

    db.query('SELECT * FROM USUARIOS', function(err, result) {
        console.log('Results: ', result);
        db.detach();
    });

});
