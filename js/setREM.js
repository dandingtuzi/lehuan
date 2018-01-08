'use strict';
//初始化REM
var setFontSize = function(){  
    var width = document.documentElement.clientWidth;  
    width = width > 750 ? 750: width;  
    var fontSize = width/750 * 100;  
    document.getElementsByTagName("html")[0].style.fontSize = fontSize + "px";
}  
setFontSize();
window.onresize = setFontSize;