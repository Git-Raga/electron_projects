const electron=require('electron')//importing election
const app=electron.app//importing app module inside electron
const BrowserWindow = electron.BrowserWindow
app.on('ready',_=>{//loading an event in app module
mainScreen=new BrowserWindow({
    height: 400,
    width:400
})

mainScreen.loadURL(`file://${__dirname}/index.html`)//file system access

mainScreen.on('closed',_=>{
console.log('Window Closed')
mainScreen=null
})

})

