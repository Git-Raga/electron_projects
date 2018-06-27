console.log ('Main.js Started');
//standard electron models required for start up  

const electron = require("electron");
const path = require("path");
const url = require("url");
//getting required default apps from electron

const {app, BrowserWindow, Menu}=electron;

//window declaration
let mainWindow;
let addWindow;

//function to display a file in to the URL
app.on('ready',createWindow);

function createWindow(){
   
        mainWindow = new BrowserWindow({});//window creation
   //loading HTML in to the window
        mainWindow.loadURL(url.format({
        pathname : path.join(__dirname, 'mainWindowhtml.html'),
        protocol :'file:',
        slashes :true
    }));// this above piece of code just load this filrfile://dirname/mainwindowhtml.html


//garbage collection when window is closed

    mainWindow.on('closed',() => {
    mainWindow=null;
    console.log("Window closed");
})


//Menu creation Step 2 : Attaching template to electron  
    const menuBar = Menu.buildFromTemplate(menuTemplate);
 //Menu creation step 3: Inserting menu in the window
    Menu.setApplicationMenu(menuBar);

}//Create window fn()


//Menu creation step 1: Creating a Template 
    const menuTemplate =[
    {
      label:"File",
      submenu:[
            {
              label : 'Add item'
            },
            {
            label : 'Remove item',
            click(){
                    console.log('Remove pressed');
            }
            },
            {
            label : 'Quit',
            //what shoul dhappen when clicked
            click(){
                    app.quit();

            }
            },
        ]


    }
];
