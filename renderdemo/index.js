console.log('This is from Index.js');
const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const url = require ('url');

const newwinButton = document.getElementById('newwinButton');
newwinButton.addEventListener('click',function(event){
let win3= new BrowserWindow();
win3.loadURL(url.format({
    pathname : path.join(__dirname, 'win3index.html'),
    protocol :'file',
    slashes :true,
}));
win3.webContents.openDevTools();
})

