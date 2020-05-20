const { app, BrowserWindow } = require('electron')

let win;

app.whenReady().then(function() {
  win = new BrowserWindow({width: 800, height: 600});
  win.on('closed', () => {
    win = null;
  })

  win.setMenu(null);

  win.loadFile('index.html');

  win.webContents.openDevTools()
});
