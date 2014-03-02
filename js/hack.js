/**
 * Created by Administrator on 14-2-28.
 */
var x = 400;

var t = 0;

var lower1 = -300;
var lower2 = 200;
var upper = 700;
var referNewOne = window.open("hack.html","newOne","height=x,width=x,top=t,left=l,resizable=no");

function changeParameter()
{
    x = Math.floor(Math.random()*501+50);
    t = Math.floor(Math.random()*1000-300);
    referNewOne.resizeTo(x,x);
    referNewOne.moveTo(t,t);
}
function playWindow()
{
        setInterval(changeParameter,1000);//这里可以传递字符串, 例如"changeParameter()"
}
playWindow();