    console.log ('Main.js Started');
    //standard electron models required for start up  

    const electron = require("electron");
    const path = require("path");
    const url = require("url");
    //getting required default apps from electron
    const { app, BrowserWindow, Menu, ipcMain} = require('electron');

    //window declaration
    let mainWindow;
    let addWindow;

    //function to display a file in to the URL
   
         app.on('ready', function(){
        
                mainWindow = new BrowserWindow({});//window creation
                //loading HTML in to the window
                mainWindow.loadURL(url.format({
                pathname : path.join(__dirname, 'mainWindowhtml.html'),
                protocol :'file:',
                slashes :true
                                             
                }));        // this above piece of code just load this filrfile://dirname/mainwindowhtml.html                           )
                
                mainWindow.on('closed',function(){
                    app.quit();
                });
                
                
                //Menu creation Step 2 : Attaching template to electron  
                const menuBar = Menu.buildFromTemplate(menuTemplate);
                //Menu creation step 3: Inserting menu in the window
                Menu.setApplicationMenu(menuBar);                   
        });

    
        function createaddWindow(){
   
            addWindow = new BrowserWindow({
                width : 450,
                height : 200,
                title : 'Enter to do item'

            });//window creation
            //loading HTML in to the window
            addWindow.loadURL(url.format({
            pathname : path.join(__dirname, 'addwindowhtml.html'),
            protocol :'file:',
            slashes :true
            }));// this above piece of code just load this filrfile://dirname/mainwindowhtml.html
            //garbage collection
            addWindow.on('close',function(){
            addWindow=null;
            });

        }

         //cath item:add and send it back to main window
         
         ipcMain.on('item:add',function(e,item){
                  
            mainWindow.webContents.send('items:add',item);
            //addWindow.close();
            console.log(item +'this is from main.js');
         
         });

 
    
    //Menu creation step 1: Creating a Template 
    const menuTemplate =[
        {
      label:"File",
      submenu:[
                    {
                    label : 'Add item',
                    click(){
                        createaddWindow();
                            }
                    },
                    {
                    label : 'Remove item',
                    click(){
                            console.log('Remove pressed');
                             }
                    },
                    {
                    label : 'Quit',
                    //hot key assignment
                    // to make it work both in MAC & Windows
                    accelerator: process.platform == 'darwin' ? 'Command+Q' :
                    //else
                    'Ctrl+Q',
                                //what shoul dhappen when clicked
                    click(){
                            app.quit();
                            }
                    }
               ]
       }
    ];

// if mac, add empty object for menu - MUG
//this to fix some label issue in MAC
if(process.platform =='darwin'){
    menuTemplate.unshift({});
    
};
//this is for the developer tools
    if (process.env.NODE_ENV !== 'production'){
    menuTemplate.push({
        label: "Dev tools",
        submenu:[
            {
                label: 'Launch Dev tools',
                accelerator:process.platform =='darwin' ? 'Command+I' :
                'Ctrl+I',
                click(item,focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role:'reload'
            }
        ]
    });
    }

    ////start from here : 28:39 - developer tools