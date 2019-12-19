window.onload = function(){
    console.log(1);
    // 导航
    // var Uls = document.getElementById('uls');
    // var Ulis = Uls.getElementsByTagName('li');
    // var i, j;
    // for (var i = 0; i < Ulis.length; i++) {
    //     Ulis[i].index = i;
    //     Ulis[i].onclick = function () {
    //         for (j = 0; j < Ulis.length; j++) {
    //             Ulis[j].className = "";
    //         }
    //         this.className = "active";
    //     }
    // }    


    // 东方视频
    var videoNav = document.getElementById('video-nav');
    var videoNavItem = document.getElementById('video-nav-item');
    videoNav.onmouseover = function () {
        videoNavItem.style.display = "block";
    };
    videoNav.onmouseout = function () {
        videoNavItem.style.display = "none";
    }

    // 图片故事
    var storyNav = document.getElementById('story-nav');
    var storyNavItem = document.getElementById('story-nav-item');
    storyNav.onmouseover = function () {
        storyNavItem.style.display = "block";
    };
    storyNav.onmouseout = function () {
        storyNavItem.style.display = "none";
    }

    // 媒介素养-下载中心
    var nav_item=document.getElementById('nav_item');
    var nav_two=document.getElementById('nav_two');
    if(nav_item) {
        nav_item.onmouseover=function (){
            nav_two.style.display = "block";
        };
        nav_item.onmouseout = function(){
            nav_two.style.display = "none";
        }
    }

    var span = document.getElementById('span');
    span.onmousedown = function(event){
        var event = event || window.event;
        var chaX = event.clientX - span.offsetLeft;
        var clientWidth = document.body.clientWidth;
        var chaY = event.clientY - span.offsetTop;
        document.onmousemove = function(event){
            var event = event || window.event;
            span.style.right = clientWidth - event.clientX - chaX +'px';
            span.style.top = event.clientY - chaY + 'px';
        }
        document.onmouseup = function(){
            document.onmousemove = null;
        }
    }
    // 浮窗关闭
    // 关闭
    var close = document.getElementById('close');
    var localClose = localStorage.getItem('close')
    if(!localClose) {
        span.style.display = "block";
    }
    if(close){
        close.onclick = function(){
            span.style.display = "none";
            localStorage.setItem('close','close')
        }
    }


}