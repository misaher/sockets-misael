class  Sockets  {
  
    constructor(io){
         this.io= io;
         this.socketsEvents();
    }
    
    socketsEvents(){
          console.log('Ok iniciando sockets :)');
          // on  conexion 
     this.io.on('connection', (socket) => {  
      // Escuchar el evento:

    socket.on('mensaje-cliente',(data)=>{
          console.log('Ok data :)');
          console.log(data);
           
          socket.emit('mensajesg',{
               msg:data.msg
          });
    })
    socket.on('mensaje-clieJ',(data)=>{
     console.log('Ok data :)');
     console.log(data);
      
     socket.emit('mensajesJ',{
          msg:data.msg
     });
 })
 
    
  })
    }

}

module.exports = Sockets;