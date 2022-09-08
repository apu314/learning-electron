const path = require('path')
const { app, BrowserWindow } = require('electron')
const { setMainMenu } = require('./menu')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 400,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js') // Loads a JS file before loading the navigator process
    }
  })

  mainWindow.loadFile('index.html')
  // window.loadURL('https://apu314.com')

  setMainMenu(mainWindow)
}

app.whenReady().then(() => {
  createWindow()
})
