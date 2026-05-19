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

  // Fix YouTube player "Error 153" / "Error 152" in Electron.
  // YouTube restricts embedding when Referer/Origin is invalid or when it detects Electron's user agent.
  mainWindow.webContents.session.webRequest.onBeforeSendHeaders(
    { urls: ['*://*.youtube.com/*', '*://*.youtube-nocookie.com/*'] },
    (details, callback) => {
      details.requestHeaders['Referer'] = 'https://www.youtube-nocookie.com';
      details.requestHeaders['Origin'] = 'https://www.youtube-nocookie.com';
      callback({ requestHeaders: details.requestHeaders });
    }
  );

  // Override User-Agent to present as a standard Linux Chrome browser, bypassing anti-embedded-client restrictions
  mainWindow.webContents.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");

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
