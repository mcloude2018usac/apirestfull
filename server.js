var port    = process.env.PORT || 3000,
    app 	= require('express')(),
	http 	= require('http').Server(app),
   io 		= require('socket.io')(http);
   var databaseConfig = require('./config/database');
   var mongoose = require('mongoose');
   mongoose.connect(databaseConfig.url);
   

   var Usermsg = require('./app/models/usermsg');


// Allow CORS support and remote requests to the service
app.use(function(req, res, next)
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    next();
});


// Set up route
app.get('/', (req, res) =>
{
   res.json({ message: 'hello world' });
});



io.on('connection', (socket) =>
{

    
  socket.on('disconnect', function(){
   io.emit('users-changed', {user: socket.nickname, event: 'left'});   
 });

 socket.on('set-nickname', (nickname) => {
   socket.nickname = nickname;
   io.emit('users-changed', {user: nickname, event: 'joined'});    
 });
 
 socket.on('add-message', (message) => {
   io.emit('message', {text: message.text, messageimg  	: message.imagen, from: socket.nickname, created: new Date()});   
 
   Usermsg.create({  userId :   message.userId ,
   toUserId:  	 message.toUserId,
   status	: 'Pendiente',
   message  	: message.text,
   messageimg  	: message.imagen,
   message2  	: message.text2,
   userId2 :   message.userId2 
      
     });

   
 });

 
 socket.on('add-image', (message)=>
 {
     io.emit('message', { image: message.image, sender: socket.nickname,  created: new Date() });
 });

 /*
 
   socket.on('disconnect', ()=>
   {
       io.emit('user-exited', { user: socket.alias });
   });




   socket.on('add-message', (message)=>
   {
       io.emit('message', { message: message.message, sender: socket.alias, tagline: socket.handle, location: socket.location, published: new Date() });
   });



   socket.on('add-image', (message)=>
   {
       io.emit('message', { image: message.image, sender: socket.alias, tagline: socket.handle, location: socket.location, published: new Date() });
   });



   socket.on('set-alias', (obj)=>
   {
      
   	  socket.alias 		= obj.alias;
   	  socket.handle 	= obj.handle;
   	  socket.location 	= obj.location;
      io.emit('alias-added', { user: obj.alias, tagline: obj.handle, location: obj.location });
   });

*/



});


// Instruct node to run the socket server on the following port
http.listen(port, function()
{
  console.log('listening on port ' + port);
});