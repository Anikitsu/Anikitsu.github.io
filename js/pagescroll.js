var currentpage="navhome";
var currentnum=0;
var aimnum=0;
var headerpos=0;
var headeropa=1;
var colors = new Array(
	[0,127,127],
	[0,63,255],
	[127,0,255],
	[255,0,0],
	[255,127,0]);
var cR=colors[0][0], cG=colors[0][1], cB=colors[0][2];
var currentcolor="rgb("+cR+","+cG+","+cB+")";

document.getElementById("bgcolor").style.backgroundColor=currentcolor;
document.getElementById(currentpage).style.backgroundColor="rgba(255, 255, 255, 0.35)";

function bgfader () {
	if (cR==colors[aimnum][0] && cG==colors[aimnum][1] && cB==colors[aimnum][2]) {
		return;
	} else {
		if (cR<colors[aimnum][0]) {cR++;}
		if (cR>colors[aimnum][0]) {cR--;}
		if (cG<colors[aimnum][1]) {cG++;}
		if (cG>colors[aimnum][1]) {cG--;}
		if (cB<colors[aimnum][2]) {cB++;}
		if (cB>colors[aimnum][2]) {cB--;}
		currentcolor="rgb("+cR+","+cG+","+cB+")";
		document.getElementById("bgcolor").style.backgroundColor=currentcolor;
		setTimeout("bgfader()",10);
	}
}

function pagefocus(aim){
	var aimpage;
	switch (aim){
		case 0:
			aimpage="navhome";
			break;
		case 1:
			aimpage="nava";
			break;
		case 2:
			aimpage="navb";
			break;
		case 3:
			aimpage="navc";
			break;
		case 4:
			aimpage="navd";
			break;
	}
	document.getElementById(currentpage).style.backgroundColor="transparent";
	currentpage=aimpage;
	document.getElementById(currentpage).style.backgroundColor="rgba(255, 255, 255, 0.35)";
	return aimpage;
}
function inimousewheel(){
	//浏览器兼容
	if ((navigator.userAgent.toLowerCase().indexOf("firefox")!=-1)){
		document.addEventListener("DOMMouseScroll",scroller,false);
	}
	else if (document.addEventListener) {
		document.addEventListener("mousewheel",scroller,false);
	}
	else if (document.attachEvent) {
		document.attachEvent("onmousewheel",scroller);
	}
	else{
		document.onmousewheel = scroller;
	}
}
function clearmousewheel(){
	if ((navigator.userAgent.toLowerCase().indexOf("firefox")!=-1)){
		document.removeEventListener("DOMMouseScroll",scroller);
	}
	else if (document.removeEventListener) {
		document.removeEventListener("mousewheel",scroller);
	}
	else if (document.detachEvent) {
		document.detachEvent("onmousewheel",scroller);
	}
	else{
		document.onmousewheel = null;
	}
}


//滚动事件处理函数
function scroller(event){
	var delta = event.detail || (-event.wheelDelta);
	//mousewheel事件中的 “event.wheelDelta” 属性值：返回的如果是正值说明滚轮是向上滚动
	//DOMMouseScroll事件中的 “event.detail” 属性值：返回的如果是负值说明滚轮是向上滚动
	if(delta>0){
		//向下滚动
		if (currentnum==4) {
			return;
		}
	//滚动翻页双向清除很重要
		clearmousewheel();
		clearnaver();
		clearswitcher();
		scrollprogressa(true);
	}
	if(delta<0){
		//向上滚动
		if (currentnum==0) {
			return;
		}
	//重要的事情再说一遍
		clearmousewheel();
		clearnaver();
		clearswitcher();
		scrollprogressa(false);
	}
}
function jumppage(aim){
	aimnum=aim;
	scrollprogressa(null,true);
	//重要的事情说三遍
	clearnaver();
	clearmousewheel();
	clearswitcher();
}

function scrollprogressa(dir,jump){
	if (!jump) {
		if (dir) {
				headerpos-=0.5;
			} else{
				headerpos+=0.5;
			}
		document.getElementById("header").style.top=headerpos+'%';
	}
		headeropa-=0.01;
		document.getElementById("header").style.opacity=headeropa;
	if (headeropa>0) {
		if (!jump) {
			if (dir) {
				setTimeout("scrollprogressa(true)",5);
			} else{
				setTimeout("scrollprogressa(false)",5);
			}
		} else{
			if (dir) {
				setTimeout("scrollprogressa(true,true)",5);
			} else{
				setTimeout("scrollprogressa(false,true)",5);
			}
		}
	} else{
		headeropa=0;
		document.getElementById("header").style.opacity=headeropa;
		if (!jump) {
			if (dir) {
				headerpos=50;
				document.getElementById("header").style.top=headerpos+'%';
			} else{
				headerpos=-50;
				document.getElementById("header").style.top=headerpos+'%';
			}
		}
		scrollprogressb(dir,jump);
	}
}
function scrollprogressb(dir,jump){
	if (!jump){
		if (dir) {
			aimnum=currentnum+1;
		} else{
			aimnum=currentnum-1;
		}
	}
	bgfader(aimnum);
	pagefocus(aimnum);
	document.getElementById("header").innerHTML=pages[aimnum];
	currentnum=aimnum;
	scrollprogressc(dir,jump);
}
function scrollprogressc(dir,jump){
	if (!jump) {
		if (dir) {
			headerpos-=0.5;
		} else{
			headerpos+=0.5;
		}
		document.getElementById("header").style.top=headerpos+'%';
	}
	headeropa+=0.01;
	document.getElementById("header").style.opacity=headeropa;
	if (headeropa<1) {
		if (!jump) {
			if (dir) {
				setTimeout("scrollprogressc(true)",5);
			} else{
				setTimeout("scrollprogressc(false)",5);
			}
		} else{
			if (dir) {
				setTimeout("scrollprogressc(true,true)",5);
			} else{
				setTimeout("scrollprogressc(false,true)",5);
			}
		}
	} else{
		if (!jump) {
			headerpos=0;
			document.getElementById("header").style.top=headerpos+'%';
		}
		headeropa=1;
		document.getElementById("header").style.opacity=headeropa;
		inimousewheel();
		ininaver();
		iniswitcher();
	}
}

function ininaver(){
	document.getElementById("navhome").onclick=function(){jumppage(0)};
	document.getElementById("nava").onclick=function(){jumppage(1)};
	document.getElementById("navb").onclick=function(){jumppage(2)};
	document.getElementById("navc").onclick=function(){jumppage(3)};
	document.getElementById("navd").onclick=function(){jumppage(4)};
}
function clearnaver(){
	document.getElementById("navhome").onclick=function(){return};
	document.getElementById("nava").onclick=function(){return};
	document.getElementById("navb").onclick=function(){return};
	document.getElementById("navc").onclick=function(){return};
	document.getElementById("navd").onclick=function(){return};
}
