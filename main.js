const LiveDM = new dropMenu({
	id:"liveserver"
});

var server = null;

LiveDM.setList({
  "button": "LiveServer",
  "list":{
      "Run":{
        click:liveServer
      },
      "Stop":{
        click:()=>{
          if(!server ||!server._handle){
            new Notification({
              title:"Issue",
              content:"Server is not started"
            })
            return
          }
          new Notification({
            title:"Success",
            content:"Server has been stopped"
          })
          server.close();
        }
      }
  }
})
function liveServer(){
  const express = require("express")
  const app = express()
  app.use(express.static(graviton.getCurrentDirectory()));
  new Notification({
    title:"Success",
    content:"Open https://localhost:4500",
    buttons:{
      "Open":{
        click:()=>{
          shell.openExternal('http://localhost:4500/')
        }
      }
    }
  })
  server = app.listen(4500)
}

