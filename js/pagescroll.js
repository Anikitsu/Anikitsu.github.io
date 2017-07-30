var currentpage="navhome";
var currentnum=0;
var headerpos=0;
var headeropa=1;
document.getElementById(currentpage).style.backgroundColor="rgba(255, 255, 255, 0.35)";
inimousewheel();

function pagefocus(aimpage){
	document.getElementById(currentpage).style.backgroundColor="transparent";
	currentpage=aimpage;
	document.getElementById(currentpage).style.backgroundColor="rgba(255, 255, 255, 0.35)";
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
		scrollprogressa(true);
		clearmousewheel();
	}
	if(delta<0){
		//向上滚动
		if (currentnum==0) {
			return;
		}
		scrollprogressa(false);
		clearmousewheel();
	}
}

function scrollprogressa(dir){
	if (dir) {
			headerpos-=0.5;
		} else{
			headerpos+=0.5;
		}
		headeropa-=0.01;
		document.getElementById("header").style.top=headerpos+'%';
		document.getElementById("header").style.opacity=headeropa;
	if (headeropa>0) {
		if (dir) {
			setTimeout("scrollprogressa(true)",5);
		} else{
			setTimeout("scrollprogressa(false)",5);
		}
	} else{
		headeropa=0;
		document.getElementById("header").style.opacity=headeropa;
		if (dir) {
			headerpos=50;
			document.getElementById("header").style.top=headerpos+'%';
		} else{
			headerpos=-50;
			document.getElementById("header").style.top=headerpos+'%';
		}
		scrollprogressb(dir);
	}
}
function scrollprogressb(dir){
	if (dir) {
		var aimnum=++currentnum;
	} else{
		var aimnum=--currentnum;
	}
	switch (aimnum){
		case 0:
			pagefocus("navhome");
			break;
		case 1:
			pagefocus("nava");
			break;
		case 2:
			pagefocus("navb");
			break;
		case 3:
			pagefocus("navc");
			break;
		case 4:
			pagefocus("navd");
			break;
	}
	document.getElementById("header").innerHTML=pages[aimnum];
	scrollprogressc(dir);
}
function scrollprogressc(dir){
	if (dir) {
			headerpos-=0.5;
		} else{
			headerpos+=0.5;
		}
		headeropa+=0.01;
		document.getElementById("header").style.top=headerpos+'%';
		document.getElementById("header").style.opacity=headeropa;
	if (headeropa<1) {
		if (dir) {
			setTimeout("scrollprogressc(true)",5);
		} else{
			setTimeout("scrollprogressc(false)",5);
		}
	} else{
		headeropa=1;
		document.getElementById("header").style.opacity=headeropa;
		headerpos=0;
		document.getElementById("header").style.top=headerpos+'%';
		inimousewheel();
	}
}
