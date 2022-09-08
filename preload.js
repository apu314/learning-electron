const { contextBridge, ipcRenderer } = require('electron')

// This file loads before the renderer (before the mainWindow loads)

contextBridge.exposeInMainWorld('electronAPI', {
  onUpdateTheme: (callback) => ipcRenderer.on('update-theme', callback)
})
