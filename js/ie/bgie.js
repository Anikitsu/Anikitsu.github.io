var userAgent = navigator.userAgent;
var isEdge = userAgent.indexOf("Edge") > -1;
function isIE() {
	if (!!window.ActiveXObject || "ActiveXObject" in window) return true;
		else return false;
}
if (isEdge||isIE()) {
	document.getElementById("bg").id="bgie";
	var bgieroll=setInterval("bgieanimationl()",100);
}
var bgiepos=0;
function bgieanimationl() {
	if (bgiepos>=99.9) {
		clearInterval(bgieroll);
		bgieroll=setInterval("bgieanimationr()",100);
	}
	bgiepos+=0.05;
	document.getElementById("bgie").style.left=-bgiepos+'%';
}
function bgieanimationr() {
	if (bgiepos<=0.1) {
		clearInterval(bgieroll);
		bgieroll=setInterval("bgieanimationl()",100);
	}
	bgiepos-=0.05;
	document.getElementById("bgie").style.left=-bgiepos+'%';
}
