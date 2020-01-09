const { app, BrowserWindow } = require('electron');

if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
	app.quit();
}

let mainWindow;

const createWindow = () => {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
	});

	mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

	mainWindow.webContents.openDevTools();

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});
