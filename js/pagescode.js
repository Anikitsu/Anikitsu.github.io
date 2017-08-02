var pages=new Array(5);
var pagesEn=new Array(5);
var pagesZh=new Array(5);
var lang="En"
var switcher=document.getElementById("switcher");
pagesEn[0]='<h1>Aniki-Chen</h1><h3>Write original code, build methodical world.</h3><nav id="lister"><ul><li><a href="https://github.com/Aniki-Chen" class="icon fa-github" title="Github"></a></li><li><a href="http://weibo.com/u/1237000977" class="icon fa-weibo" title="weibo"></a></li><li><a href="mailto:chenzhzh45@gmail.com" class="icon fa-envelope-o" title="Email"></a></li></ul></nav><p>At this time, using IE/Edge to browse this page,<br/>will show the motion and the details of this page correctly<br/>If there are still some problems,<br/>please try refreshing</p>';
pagesEn[1]='<h2>This is page A</h2><p>For demos, please scroll down</p>';
pagesEn[2]='<h2>This is page B</h2><p>Continue scroll down</p>';
pagesEn[3]='<h2>This is page C</h2><p>Still scroll down</p>';
pagesEn[4]='<h2>Demo</h2><div class="demo-cabinet"><div class="demo-container"><a href="demo/tetris.html" target="_blank"><img class="demo-img" src="demo/img/3dtetris.PNG" /><div>Classic game Tetris, rebuilt in 3D<br/><br/> (Honestly, it\'s stupid to fill a whole surface with tetris blocks...)</div><h3>Tetris in 3D</h3></a></div><div class="demo-container"><a ><img class="demo-img" /><div><p>Coming Soon</p></div><h3></h3></a></div></div>';

pagesZh[0]='<h1>你好，我是阿中</h1><h3 style="margin-top:0.5em;">无需精彩生活，只求北京工作</h3><nav id="lister"><ul><li><a href="https://github.com/Aniki-Chen" class="icon fa-github" title="鸡特哈不"></a></li><li><a href="http://weibo.com/u/1237000977" class="icon fa-weibo" title="微博"></a></li><li><a href="mailto:chenzhzh45@gmail.com" class="icon fa-envelope-o" title="伊妹儿"></a></li></ul></nav><p>这回用IE/Edge浏览这个不会看起来怪怪的了<br/>如果还是怪怪的，再刷新一次试试吧</p>';
pagesZh[1]='<h2>这里是页面 A</h2><p>想看DEMO的话，请往下翻</p>';
pagesZh[2]='<h2>这里是页面B</h2><p>继续往下翻</p>';
pagesZh[3]='<h2>这里是页面C</h2><p>之前D页写的是“哎哟喂！DEMO还没放上来”<br/>不过现在还是往下翻吧</p>';
pagesZh[4]='<h2>Demo</h2><div class="demo-cabinet"><div class="demo-container"><a href="demo/tetris.html" target="_blank"><img class="demo-img" src="demo/img/3dtetris.PNG" /><div>经典游戏俄罗斯方块，3D的<br/><br/> (说实话，用方块铺满一整个面，真的是个蠢主意)</div><h3>3D俄罗斯方块</h3></a></div><div class="demo-container"><a ><img class="demo-img" /><div><p>敬请期待</p></div><h3></h3></a></div></div>';

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
