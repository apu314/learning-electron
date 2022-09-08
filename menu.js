const { app, dialog, Menu } = require('electron')

const setMainMenu = (mainWindow) => {
  const template = [
    {
      label: app.name, // In dev mode: Electron
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {
          label: 'Open file',
          click: () => {
            dialog.showOpenDialog(mainWindow, {
              title: 'Select the Markdown file to open',
              // defaultPath: '~/tmp',
              defaultPath: '~/Desktop',
              filters: [
                {
                  name: 'Markdown',
                  extensions: ['md']
                }
              ],
              properties: ['openFile', 'openDirectory']
            }).then(result => {
              console.log(result.canceled)
              console.log(result.filePaths)
            }).catch(err => {
              console.log(err)
            })
          }
        }
      ]
    },
    {
      label: 'Themes',
      submenu: [
        {
          label: 'Light',
          click: () => {
            // console.log('Selected light theme')
            mainWindow.webContents.send('update-theme', 'light')
          }
        },
        {
          label: 'Dark',
          click: () => {
            // console.log('Selected dark theme')
            mainWindow.webContents.send('update-theme', 'dark') // We can pass an object, string or whatever
          }
        }
      ]
    },
    { role: 'viewMenu' }
    /* {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    } */
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

module.exports = {
  setMainMenu
}
