var text = "the width of this window is ";
text +=window.screen.width;
text +="<br /> the height of this window is ";
text +=window.screen.height;
text +="<br />the screenleft is ";
text +=window.screenX;
text +="<br />the screenTop is ";
text +=window.screenY;

document.write(text);


var url =document.URL;
var domain = document.domain;
var referrer = document.referrer;

document.write("<br />url is "+url+"<br />domain is  "+domain+"<br /> referrer is "+referrer);
/*位置操作,禁止返回当前页面*/
/*setTimeout(function(){location.replace("www.baidu.com");},1000);*/

/*位置操作,立即打开新的URL*/
/*location.assign("http://www.baidu.com");
*window.location("http://www.baidu.com"
* location.href="http://www.baidu.com";
* */
