var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection',function(socket){
    console.log('一个用户建立了连接');
    socket.on('disconnect',function(){
        console.log('用户断开连接');  
    });
    //服务器端接收的chat message事件
    socket.on('chat message',function(msg){
        console.log('message:'+msg);
        io.emit('chat message',msg);
    });
});

http.listen(8899,function(){
    console.log('监听端口：xxx.xxx.xxx.xxx:8899');
});
