function btn(){
var sUserAgent = navigator.userAgent.toLowerCase();  
var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";   
var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";   
var bIsAndroid = sUserAgent.match(/android/i) == "android";   
if(bIsIpad || bIsIphoneOs) {  
    window.location.href="https://itunes.apple.com/cn/app/shadowingy/id1330139332?mt=8&ign-mpt=uo%3D4";
} else if(bIsAndroid)
{
window.location.href="https://d.app6.cn/down/apprelease_legu_signed.apk";
}

 else {  
   window.location.href ="http://d.ipaicai.cn/wlzs1.2.zip" ;
}

}


function btnqq()
{
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.open("mqqwpa://im/chat?chat_type=wpa&uin=1951777307&version=1&src_type=web&web_src=oicqzone.com");
} else {
    window.open("http://wpa.qq.com/msgrd?v=3&uin=1951777307&site=qq&menu=yes");

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