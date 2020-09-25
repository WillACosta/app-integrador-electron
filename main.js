const {
  app,
  BrowserWindow
} = require("electron");

require('electron-reload')(__dirname);

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
  });

  mainWindow.setMenu(null);
  // mainWindow.webContents.openDevTools(); // Habilita o dev tolls

  mainWindow.loadFile("src/index.html"); // Carrega o arquivo html para a janela criada
  mainWindow.loadUrl(`file://${__dirname}/index.html`); //Electron live-reload

});