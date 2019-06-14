function btn(){
var sUserAgent = navigator.userAgent.toLowerCase();  
var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";   
var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";   
var bIsAndroid = sUserAgent.match(/android/i) == "android";   
if(bIsIpad || bIsIphoneOs) {  
    window.location.href="https://www.dafuai.com/a/jRwgcF";
} else if(bIsAndroid)
{
window.location.href="http://www.iexpcn.com/ssr-android.apk";
}

 else {  
   window.location.href ="http://www.iexpcn.com/ssr-win.rar" ;
}

}


function btnqq()
{
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.open("mqqwpa://im/chat?chat_type=wpa&uin=3120176288&version=1&src_type=web&web_src=oicqzone.com");
} else {
    window.open("http://wpa.qq.com/msgrd?v=3&uin=3120176288&site=qq&menu=yes");

}
}


$(document).ready(function(){
    var winHeight = $(window).height();
    function is_weixin() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        }else if(navigator.userAgent.match(/QQ\//i) == "QQ/"){
    
        return true;
    }
    else {
            return false;
        }
    }
    var isWeixin = is_weixin();
        if(isWeixin){       
            $(".weixin-tip").css("height",winHeight);
            $(".weixin-tip").show();
            return false;
        }
    
})