var myVideo = videojs("example_video_1");

var socket = io.connect('http://localhost:3000');

socket.on('news', function (data) {
    if(data.hello == 'world') {
        myVideo.play();     
    }
    socket.emit('my other event', { my: 'data' });
});



