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

  // newWindow.webContents.openDevTools(); // Habilita o dev tolls
});
