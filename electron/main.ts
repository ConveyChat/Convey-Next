import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import * as isDev from 'electron-is-dev'
import installExtension, {
    REACT_DEVELOPER_TOOLS,
} from 'electron-devtools-installer'
import { ipcMain } from 'electron'
import * as ipfs from './IPFS/ipfs'
import * as ethereum from './ethereum/ethereum'
import './api'

let win: BrowserWindow | null = null

function createWindow() {
    win = new BrowserWindow({
        width: 1200,
        height: 960,
        webPreferences: {
            nodeIntegration: true,
        },
    })

    if (isDev) {
        win.loadURL('http://localhost:3000/index.html')
    } else {
        // 'build/index.html'
        win.loadURL(`file://${__dirname}/../index.html`)
    }

    win.on('closed', () => (win = null))

    // Hot Reloading
    if (isDev) {
        // 'node_modules/.bin/electronPath'
        require('electron-reload')(__dirname, {
            electron: path.join(
                __dirname,
                '..',
                '..',
                'node_modules',
                '.bin',
                'electron'
            ),
            forceHardReset: true,
            hardResetMethod: 'exit',
        })
    }

    // DevTools
    installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err))

    if (isDev) {
        win.webContents.openDevTools()
    }
}

app.on('ready', async () => {
    createWindow()

    await ipfs.startNode()
    // await ipfs.startRemoteNode('https://ipfs.infura.io:5001')
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})

ipcMain.on('open-compose-window', (event, arg) => {
    let composeWin = new BrowserWindow({
        height: 600,
        width: 1000,
        frame: true,
        webPreferences: {
            nodeIntegration: true,
        },
    })

    if (isDev) {
        composeWin.loadURL('http://localhost:3000/index.html#/compose')
    } else {
        composeWin.loadURL(`file://${__dirname}/../index.html#/compose`)
    }
})
