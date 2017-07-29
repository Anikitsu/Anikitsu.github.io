var userAgent = navigator.userAgent;
var isEdge = userAgent.indexOf("Edge") > -1;
function isIE() {
	if (!!window.ActiveXObject || "ActiveXObject" in window) return true;
		else return false;
}
if (isEdge||isIE()) {
	document.getElementById("bg").id="bgie";
	setInterval("bgieanimation()",100);
}
var bgiepos=0;
function bgieanimation() {
	if (bgiepos==100) {
		bgiepos=0;
	}
	bgiepos+=0.05;
	document.getElementById("bgie").style.left=-bgiepos+'%';
}