var pages=new Array(5);
var pagesEn=new Array(5);
var pagesZh=new Array(5);
var lang="En"
var switcher=document.getElementById("switcher");
pagesEn[0]='<h1>Aniki-Chen</h1><p>This page still under constructing</p><nav id="lister"><ul><li><a href="https://github.com/Aniki-Chen" class="icon fa-github" title="Github"></a></li><li><a href="http://weibo.com/u/1237000977" class="icon fa-weibo" title="weibo"></a></li><li><a href="mailto:chenzhzh45@gmail.com" class="icon fa-envelope-o" title="Email"></a></li></ul></nav><p>This time<br/>Using IE/Edge browse this page wont be strange<br/>If still strange, try refresh</p>';
pagesEn[1]='<h1>This is page A</h1><p>For demos, please scroll down</p>';
pagesEn[2]='<h1>This is page B</h1><p>Continue scroll down</p>';
pagesEn[3]='<h1>This is page C</h1><p>Still scroll down</p>';
pagesEn[4]='<h1>Page Demo</h1><p>Oops! DEMOs havent put up yet!</p>';

pagesZh[0]='<h1>中哥</h1><p>页面还在建设中啊</p><nav id="lister"><ul><li><a href="https://github.com/Aniki-Chen" class="icon fa-github" title="鸡特哈不"></a></li><li><a href="http://weibo.com/u/1237000977" class="icon fa-weibo" title="微博"></a></li><li><a href="mailto:chenzhzh45@gmail.com" class="icon fa-envelope-o" title="伊妹儿"></a></li></ul></nav><p>这回用IE/Edge浏览这个不会看起来怪怪的了<br/>如果还是怪怪的，再刷新一次试试吧</p>';
pagesZh[1]='<h1>这里是页面 A</h1><p>想看DEMO的话，请往下翻</p>';
pagesZh[2]='<h1>这里是页面B</h1><p>继续往下翻</p>';
pagesZh[3]='<h1>这里是页面C</h1><p>还是往下翻</p>';
pagesZh[4]='<h1>Demo页</h1><p>哎哟喂！DEMO还没放上来呢</p>';

for (var i=0;i<5;i++) {
	pages[i]=pagesEn[i];
}

function langswitch (){
	if (lang=="En") {
		for (var i=0;i<5;i++) { pages[i]=pagesZh[i]; }
		switcher.className="icon fa-toggle-off";
		switcher.innerHTML=' 中'
		lang="Zh"
	} else{
		for (var i=0;i<5;i++) { pages[i]=pagesEn[i]; }
		switcher.className="icon fa-toggle-on";
		switcher.innerHTML=' En'
		lang="En"
	}
	clearnaver();
	clearmousewheel();
	clearswitcher();
	scrollprogressa(false,true);
}
 function iniswitcher (){
 	switcher.onclick=function (){ langswitch(); }
 }
 function clearswitcher (){
 	switcher.onclick=function (){ return; }
 }
