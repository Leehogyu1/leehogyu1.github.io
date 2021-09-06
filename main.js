$(function(){
    $("#myWeb").fullpage({
        anchors:['m01', 'm02','m03','m04','m05','m06'],
		//navigation: true,
        afterLoad: function(origin, destination, direction){
            //console.log(destination.index);
            var idx=destination.index;
            console.log(idx)
            $(".section").eq(idx).addClass("on").siblings().removeClass("on");
            $("nav li").eq(idx).addClass("on").siblings().removeClass("on");
        },
    })


$ ("#intro").YTPlayer({
    containment:'.m01',
    autoPlay:true, 
    mute:true, 
    showControls: false,
    playOnlyIfVisible: true,
    //realfullscreen: false,
    anchor: 'center,center',
    ratio: '16/9',
});


//포폴동영상제어
$ ("#portfolio01").YTPlayer({
    containment:'.portfolio01',
    autoPlay:true, 
    mute:true, 
    showControls: false,
    playOnlyIfVisible: true,
    //realfullscreen: false,
    anchor: 'center,center',
    ratio: '16/9',
    optimizeDisplay:false,
});

$(".m02 .xi-pause").on("click", function(){
    $("#portfolio01").YTPPause()
})

$(".m02 .xi-play").on("click", function(){
    $("#portfolio01").YTPPlay()
})

//포폴동영상제어
$ ("#portfolio02").YTPlayer({
    containment:'.portfolio02',
    autoPlay:true, 
    mute:true, 
    showControls: false,
    playOnlyIfVisible: true,
    //realfullscreen: false,
    anchor: 'center,center',
    ratio: '16/9',
    optimizeDisplay:false,
});

$(".m03 .xi-pause").on("click", function(){
    $("#portfolio02").YTPPause()
})

$(".m03 .xi-play").on("click", function(){
    $("#portfolio02").YTPPlay()
})

//포폴동영상제어
$ ("#portfolio03").YTPlayer({
    containment:'.portfolio03',
    autoPlay:true, 
    mute:true, 
    showControls: false,
    playOnlyIfVisible: true,
    //realfullscreen: false,
    anchor: 'center,center',
    ratio: '16/9',
    optimizeDisplay:false,
});

$(".m03 .xi-pause").on("click", function(){
    $("#portfolio03").YTPPause()
})

$(".m03 .xi-play").on("click", function(){
    $("#portfolio03").YTPPlay()
})

//포폴동영상제어
$ ("#portfolio04").YTPlayer({
    containment:'.portfolio04',
    autoPlay:true, 
    mute:true, 
    showControls: false,
    playOnlyIfVisible: true,
    //realfullscreen: false,
    anchor: 'center,center',
    ratio: '16/9',
    optimizeDisplay:false,
});

$(".m03 .xi-pause").on("click", function(){
    $("#portfolio04").YTPPause()
})

$(".m03 .xi-play").on("click", function(){
    $("#portfolio04").YTPPlay()
})





})