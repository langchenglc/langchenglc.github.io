$(function(){
	$(document).ready(function(){
		var to_main="<div style='position: fixed; bottom: 80px; right: 30px; cursor: pointer; z-index: 999999; display: block; opacity: 1;'>"
			+"<a style ='background:#d1d1d1 url(../images/to-top.png) no-repeat center center;' title='返回顶部' href='#'></a></div>";
		var to_top="<div style='position: fixed; bottom: 50px; right: 30px; cursor: pointer; z-index: 999999; display: block; opacity: 1;'>"
			+"<a style ='background:#d1d1d1 url(../images/to-home.png) no-repeat center center;' title='博客主页' href='../../'></a></div>";
		$(document.body).append(to_main);
		$(document.body).append(to_top);
	})
});
