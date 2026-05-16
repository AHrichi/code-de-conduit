const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    icon: path.join(__dirname, 'public/app_icon.png')
  });

  // Remove the default window menu for a native app feel
  mainWindow.setMenuBarVisibility(false);

  const serveUrl = process.env.SERVE_URL;

  if (serveUrl) {
    // In development, load from the Angular dev server
    mainWindow.loadURL(serveUrl);
    // Optionally open DevTools
    // mainWindow.webContents.openDevTools();
  } else {
    // In production, load the built Angular app
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'app-build/browser/index.html'),
        protocol: 'file:',
        slashes: true
      })
    );
  }

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
