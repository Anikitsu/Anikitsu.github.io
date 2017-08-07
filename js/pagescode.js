var pages=new Array(5);
var pagesEn=new Array(5);
var pagesZh=new Array(5);
var lang="En"
var switcher=document.getElementById("switcher");
pagesEn[0]='<h1>Aniki-Chen</h1><h3>Write original code, build methodical world.</h3>'+
			'<nav id="lister">'+
				'<ul><li><a href="https://github.com/Aniki-Chen" class="icon fa-github" title="Github"></a></li>'+
				'<li><a href="http://weibo.com/u/1237000977" class="icon fa-weibo" title="weibo"></a></li>'+
				'<li><a href="mailto:chenzhzh45@gmail.com" class="icon fa-envelope-o" title="Email"></a></li></ul>'+
			'</nav>'+
			'<p>Every line of code, is a creation of art<br/>Every meet with bug, is a step to nut</p>';

pagesEn[1]='<h2>Attribute</h2>'+
			'<div class="article">'+
				'<div class="article-container">'+
					'<p class="icon fa-circle"> Living in China</p>'+
					'<p class="icon fa-circle"> Born in Aug 1990 (Leo)</p>'+
					'<p class="icon fa-circle"> Graduate of HEU, major in Nuclear Technology</p>'+
					'<p class="icon fa-circle"> DIY fan</p>'+
					'<p class="icon fa-circle"> Music producer (amateur)</p>'+
					'<div class="img-container" style="bottom: -1em; right: 0em;">'+
						'<img class="img-inset" src="css/images/painset.png" style="left: 0em; top: 0em;"/>'+
						'<img class="img-outset fa-pulse" src="css/images/paoutset.png" style="left: 36%; top: 10%;"/>'+
						'<img class="img-outset" src="css/images/paoutset.png" style="width: 19%; height: 19%; left: 37%; top: 55%;"/>'+
						'<img class="img-cloud" src="css/images/pacloud.png" style="width: 20%; height: 20%; left: 46%; top: 5%;"/>'+
						'<img class="img-cloud" src="css/images/pacloud.png" style="width: 16%; height: 16%; left: 15%; top: 25%;"/>'+
						'<img class="img-cloud" src="css/images/pacloud.png" style="width: 16%; height: 16%; left: 76%; top: 35%;"/>'+
					'</div>'+
				'</div>'+
			'</div>';

pagesEn[2]='<h2>Braggart</h2>'+
			'<div class="article">'+
				'<div class="article-container">'+
					'<p class="icon fa-circle"> Fan of Javascript(native)</p>'+
					'<p class="icon fa-circle"> Fan of canvas & WebGL</p>'+
					'<p class="icon fa-circle"> SPA favor (Single-Page-Application of course)</p>'+
					'<p class="icon fa-circle"> Have a mobile APP-  <a href="https://github.com/Aniki-Chen/Mobile-Geolocaton-to-Server">GeoSafty</a></p>'+
					'<p class="icon fa-circle"> Know how to use Photoshop (check Ch version for more)</p>'+
					'<div class="img-container" style="bottom: -1em; right: 0em;">'+
						'<img class="img-inset" src="css/images/painset.png" style="left: 0em; top: 0em;"/>'+
						'<img class="img-outset fa-pulse" src="css/images/paoutset.png" style="left: 36%; top: 10%;"/>'+
						'<img class="img-outset fa-pulse" src="css/images/paoutset.png" style="width: 19%; height: 19%; left: 37%; top: 55%;"/>'+
						'<img class="img-cloud" src="css/images/pacloud.png" style="width: 20%; height: 20%; left: 46%; top: 5%;"/>'+
						'<img class="img-cloud" src="css/images/pacloud.png" style="width: 16%; height: 16%; left: 15%; top: 25%;"/>'+
						'<img class="img-cloud" src="css/images/pacloud.png" style="width: 16%; height: 16%; left: 76%; top: 35%;"/>'+
					'</div>'+
				'</div>'+
			'</div>';

pagesEn[3]='<h2>Cooperation</h2>'+
			'<div class="article">'+
				'<div class="article-container">'+
					'<p>Free for cooperation:</p>'+
					'<p>If you have needs</p>'+
					'<p>Please contact me betimes</p>'+
					'<p>I\'ll answer the call as you wish</p>'+
					'<p>Then, we can be friends ♂</p>'+
					'<div class="img-container" style="bottom: -1em; right: 0em;">'+
						'<img class="img-inset" src="css/images/painset.png" style="left: 0em; top: 0em;"/>'+
						'<img class="img-outset fa-pulse" src="css/images/paoutset.png" style="left: 36%; top: 10%;"/>'+
						'<img class="img-outset fa-pulse" src="css/images/paoutset.png" style="width: 19%; height: 19%; left: 37%; top: 55%;"/>'+
						'<img class="img-cloud cloudya" src="css/images/pacloud.png" style="width: 20%; height: 20%; left: 46%; top: 5%;"/>'+
						'<img class="img-cloud cloudy" src="css/images/pacloud.png" style="width: 16%; height: 16%; left: 15%; top: 25%;"/>'+
						'<img class="img-cloud cloudy" src="css/images/pacloud.png" style="width: 16%; height: 16%; left: 76%; top: 35%;"/>'+
					'</div>'+
				'</div>'+
			'</div>';

pagesEn[4]='<h2>Demo</h2>'+
			'<div class="demo-cabinet">'+
				'<div class="demo-container">'+
					'<a href="demo/tetris.html" target="_blank">'+
						'<img class="demo-img" src="demo/img/3dtetris.PNG" />'+
						'<div>Classic game Tetris, rebuilt in 3D<br/><br/> (Honestly, it\'s stupid to fill a whole surface with tetris blocks...)</div>'+
						'<h3>Tetris 3D</h3>'+
					'</a>'+
				'</div>'+
				'<div class="demo-container">'+
					'<a >'+
						'<img class="demo-img" src="demo/img/coming.PNG" />'+
						'<div><p>Coming Soon</p></div><h3></h3>'+
					'</a>'+
				'</div>'+
			'</div>';
				
pagesZh[0]='<h1>你好，我是小陈</h1><h3 style="margin-top:0.5em;">无需精彩生活，只求北京工作</h3>'+
			'<nav id="lister">'+
				'<ul><li><a href="https://github.com/Aniki-Chen" class="icon fa-github" title="鸡特哈不"></a></li>'+
				'<li><a href="http://weibo.com/u/1237000977" class="icon fa-weibo" title="微博"></a></li>'+
				'<li><a href="mailto:chenzhzh45@gmail.com" class="icon fa-envelope-o" title="伊妹儿"></a></li></ul>'+
			'</nav>'+
			'<p>这回用各种浏览器都不会看起来怪怪的了<br/>如果还是怪怪的，再刷新一次试试吧</p>';

pagesZh[1]='<h2>基本属性</h2>'+
			'<div class="article">'+
				'<div class="article-container">'+
					'<p class="icon fa-circle"> 生日90.08.18 (狮子座)</p>'+
					'<p class="icon fa-circle"> 2014年毕业于哈尔滨工程大学</p>'+
					'<p class="icon fa-circle"> 现居哈尔滨</p>'+
					'<p class="icon fa-circle"> 喜欢自己动手</p>'+
					'<p class="icon fa-circle"> 业余音乐制作人</p>'+
					'<div class="img-container" style="bottom: -1em; right: 0em;">'+
						'<img class="img-inset" src="css/images/painset.png" style="left: 0em; top: 0em;"/>'+
						'<img class="img-outset fa-pulse" src="css/images/paoutset.png" title="咳，这可不是动图" style="left: 36%; top: 10%;"/>'+
						'<img class="img-outset" src="css/images/paoutset.png" style="width: 19%; height: 19%; left: 37%; top: 55%;"/>'+
						'<img class="img-cloud" src="css/images/pacloud.png" style="width: 20%; height: 20%; left: 46%; top: 5%;"/>'+
						'<img class="img-cloud" src="css/images/pacloud.png" style="width: 16%; height: 16%; left: 15%; top: 25%;"/>'+
						'<img class="img-cloud" src="css/images/pacloud.png" style="width: 16%; height: 16%; left: 76%; top: 35%;"/>'+
					'</div>'+
				'</div>'+
			'</div>';

pagesZh[2]='<h2>一名修炼中的前端</h2>'+
			'<div class="article">'+
				'<div class="article-container">'+
					'<p class="icon fa-circle"> Javascript，原生的很6</p>'+
					'<p class="icon fa-circle"> Canvas和WebGL，喜欢</p>'+
					'<p class="icon fa-circle"> 单页Web应用最棒了</p>'+
					'<p class="icon fa-circle"> 做过一个手机APP-  <a href="https://github.com/Aniki-Chen/Mobile-Geolocaton-to-Server">GeoSafty</a></p>'+
					'<p class="icon fa-circle"> 诚接各类文件扫描件修改，不吹不黑，包无破绽</p>'+
					'<div class="img-container" style="bottom: -1em; right: 0em;">'+
						'<img class="img-inset" src="css/images/painset.png" style="left: 0em; top: 0em;"/>'+
						'<img class="img-outset fa-pulse" src="css/images/paoutset.png" style="left: 36%; top: 10%;"/>'+
						'<img class="img-outset fa-pulse" src="css/images/paoutset.png" style="width: 19%; height: 19%; left: 37%; top: 55%;"/>'+
						'<img class="img-cloud" src="css/images/pacloud.png" style="width: 20%; height: 20%; left: 46%; top: 5%;"/>'+
						'<img class="img-cloud" src="css/images/pacloud.png" style="width: 16%; height: 16%; left: 15%; top: 25%;"/>'+
						'<img class="img-cloud" src="css/images/pacloud.png" style="width: 16%; height: 16%; left: 76%; top: 35%;"/>'+
					'</div>'+
				'</div>'+
			'</div>';

pagesZh[3]='<h2>请雇我吧！</h2>'+
			'<div class="article">'+
				'<div class="article-container">'+
					'<p>希望工作地点在北京</p>'+
					'<p>能有好的成长空间</p>'+
					'<p>能有好的工作氛围</p>'+
					'<p>至于对薪金的最低要求:</p>'+
					'<p>够吃够住，能交上社保 Orz</p>'+
					'<div class="img-container" style="bottom: -1em; right: 0em;">'+
						'<img class="img-inset" src="css/images/painset.png" style="left: 0em; top: 0em;"/>'+
						'<img class="img-outset fa-pulse" src="css/images/paoutset.png" style="left: 36%; top: 10%;"/>'+
						'<img class="img-outset fa-pulse" src="css/images/paoutset.png" style="width: 19%; height: 19%; left: 37%; top: 55%;"/>'+
						'<img class="img-cloud cloudya" src="css/images/pacloud.png" style="width: 20%; height: 20%; left: 46%; top: 5%;"/>'+
						'<img class="img-cloud cloudy" src="css/images/pacloud.png" style="width: 16%; height: 16%; left: 15%; top: 25%;"/>'+
						'<img class="img-cloud cloudy" src="css/images/pacloud.png" style="width: 16%; height: 16%; left: 76%; top: 35%;"/>'+
					'</div>'+
				'</div>'+
			'</div>';

pagesZh[4]='<h2>Demo</h2>'+
			'<p>暂且就先摆这一个吧。。。</p>'+
			'<div class="demo-cabinet">'+
				'<div class="demo-container">'+
					'<a href="demo/tetris.html" target="_blank">'+
					'<img class="demo-img" src="demo/img/3dtetris.PNG" />'+
					'<div>经典游戏俄罗斯方块，3D的<br/><br/> (说实话，用方块铺满一整个面，真的是个蠢主意)</div>'+
					'<h3>3D俄罗斯方块</h3>'+
					'</a>'+
				'</div>'+
				'<div class="demo-container">'+
					'<a >'+
					'<img class="demo-img" src="demo/img/coming.PNG"/>'+
					'<div><p>敬请期待</p></div><h3></h3>'+
					'</a>'+
				'</div>'+
			'</div>';

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
