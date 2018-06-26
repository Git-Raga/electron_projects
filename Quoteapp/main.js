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
   //adding windows properties now
    win = new BrowserWindow({height: 360, width: 600, frame: false, show: false});
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

win.once('ready-to-show',() => {
    win.show();
    
});


}


app.on('ready',createWindow);