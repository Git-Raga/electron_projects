console.log ('Main.js Started');
//standard electron start up code 

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let win;//reference for the window object

//function to display a file in to the URL

function createWindow(){
    win = new BrowserWindow();
    win.loadURL(url.format({
        pathname : path.join(__dirname, 'index.html'),
        protocol :'file',
        slashes :true
    }));
//garbage collection when window is closed

win.on('closed',() => {
    win=null;
    console.log("Window closed");
})
}


app.on('ready',createWindow);