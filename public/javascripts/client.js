jQuery(function($){
	var socket = io.connect('http://localhost:3000');

	var $play  = $('#play'),
		$pause = $('#pause'),
		$gift1 = $('#gift1'),
		$gift2 = $('#gift2');

	function debug(){
		var debug = true;
		if(debug)console.log.apply(console, arguments);
	}

	//TODO 从二维码获取来和TV端配对
	var room   = 'room12345';
	
	$play.on('click',function(){
		debug("点击play");
		socket.emit('video', { fn: "play", "room": room });
	})

	$pause.on('click',function(){
		debug("点击pause");
		socket.emit('video',{ fn: "pause", "room": room });
	})

	// 送礼物
	// ==========================

	$gift1.on('click',function(){
		debug("点击gift1");
		socket.emit('gift', { id: "gift1", "room": room });
	})

	$gift2.on('click',function(){
		debug("点击gift2");
		socket.emit('gift', { id: "gift2", "room": room });
	})
})