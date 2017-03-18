// JavaScript Document
//微信分享
var wimg = "分享图片网址123";
var wurl = "分享网址123";
var wdesc = '分享内容123';
var wtit = '分享标题123';
var wappid = '';

function shareQuan() { 
    WeixinJSBridge.invoke('shareTimeline',{
        "img_url": wimg,
        "img_width": "200",
        "img_height": "200",
        "link": wurl,
        "desc": wdesc,
        "title": wtit
    });
}
/*function shareMsg() {
    WeixinJSBridge.invoke('sendAppMessage',{
        "appid": wappid,
        "img_url": wimg,
        "img_width": "200",
        "img_height": "200",
        "link": wurl,
        "desc": wdesc,
        "title": wtit,
    })
}
function shareWeibo() {
    WeixinJSBridge.invoke('shareWeibo',{
        "content": wdesc,
        "url": wurl,
    });
}*/
// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    // 发送给好友
    WeixinJSBridge.on('menu:share:appmessage', function(argv){
        shareQuan();
    });
    // 分享到朋友圈
    WeixinJSBridge.on('menu:share:timeline', function(argv){
        shareQuan();
    });
    // 分享到微博
    WeixinJSBridge.on('menu:share:weibo', function(argv){
        shareQuan();
    });
}, false);