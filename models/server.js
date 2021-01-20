const  express = require('express') 
const Sockets  =  require('./sockets');
const  cors  = require('cors');

/// Servidor de sockets 
const http = require('http');
const socketio = require('socket.io');
const  path  = require('path')
class Server{

  constructor(){
      this.app =   express();
      this.port =   process.env.PORT;
//// httpt (Configuracionn del servidor  http)
    this.server =http.createServer(this.app)  
    ///Configuracion de socket

      this.io = socketio(this.server,{ /*Configuraciones*/});
  }
  midelwares(){

    this.app.use(express.static(path.resolve(__dirname, '../public')));
     // cors
    this.app.use(cors()); 

  }
   /////
   configuracionesSockets(){
        new Sockets(this.io);
        
   }
  //////// Metodo encargado de arrancar todo
  execute(){
   ////Inicializar midelwares 
     this.midelwares();
    ///////inicalizar el server
        this.server.listen(this.port ,()=>{
        console.log('Servidor corriendo en el puerto',this.port);
     
     });
     this.configuracionesSockets();



    
  }
   

}

module.exports = Server