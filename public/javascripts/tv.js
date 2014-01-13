var myVideo = videojs("example_video_1");

var socket = io.connect('/');

myVideo.play();

//注册房间，方便与其他TV隔离
socket.emit('getRoom', { room: "room12345" });

//注册房间反馈
socket.on('gotRoom', function(data){
	console.log('tv is in room 【'+ data.room + '】 now');
})

//响应视频操作
socket.on('video', function (data){
	var args = data.args || [];
	console.log('video.'+data.fn);
	//TODO 安全性检查 白名单
	if(data.fn && myVideo[data.fn]){

		myVideo[data.fn].apply(myVideo, args);

	}
})

//TODO 展现送礼样式
socket.on('gift', function (data){
	console.log("展现送礼物:",data);
    if(data.id == 'gift1') {
        document.getElementById('gift').innerHTML = '礼物一赠送';    
    } else if(data.id = 'gift2') {
        document.getElementById('gift').innerHTML = '礼物二赠送';    
    }
})
