$(function(){
	$(document).ready(function(){
		var to_main="<div  style='position: fixed; bottom: 200px; right: 30px; cursor: pointer; z-index: 999999; display: block; opacity: 1;'>"
			+"<a title='返回顶部' href='#'><img width='40px;' height='40px;' src='../images/to-top.png'/></a></div>";
		var to_top="<div style='position: fixed; bottom: 50px; right: 30px; cursor: pointer; z-index: 999999; display: block; opacity: 1;'>"
			+"<a title='博客主页' href='../'><img width='40px;' height='40px;' src='../images/to-home.png'/></a></div>";
		var to_leanote="<div style='position: fixed; bottom: 100px; right: 30px; cursor: pointer; z-index: 999999; display: block; opacity: 1;'>"
			+"<a title='leanote blog' href='http://blog.leanote.com/ggglllccc'><img width='40px;' height='40px;' src='../images/to-link.png'/></a></div>";
		var to_wechat="<div style='position: fixed; bottom: 150px; right: 30px; cursor: pointer; z-index: 999999; display: block; opacity: 1;'>"
			+"<a title='博主微信' target='_blank' href='../images/wechat.jpg'><img width='40px;' height='40px;' src='../images/to-wechat.png'/></a></div>";
		$(document.body).append(to_main);
		$(document.body).append(to_top);
		$(document.body).append(to_leanote);
		$(document.body).append(to_wechat);
	});
});
