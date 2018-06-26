console.log ('Main.js Started');
//standard electron start up code 

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let win1;
let win2;//reference for the window object

//function to display a file in to the URL

function createWindow(){

    win1 = new BrowserWindow();
    win2 = new BrowserWindow();

    win1.loadURL(url.format({
        pathname : path.join(__dirname, 'win1index.html'),
        protocol :'file',
        slashes :true,
    }));
        win2.loadURL(url.format({
            pathname : path.join(__dirname, 'win2index.html'),
            protocol :'file',
            slashes :true
    }));
//garbage collection when window is closed

win1.webContents.openDevTools();
win2.webContents.openDevTools();


win1.on('closed',() => {
    win=null;
    console.log("Window closed");
})


win2.on('closed',() => {
    win=null;
    console.log("Window closed");
})

}


app.on('ready',createWindow);