$(function(){
	$(document).ready(function(){
		var to_main="<div  style='position: fixed; bottom: 120px; right: 30px; cursor: pointer; z-index: 999999; display: block; opacity: 1;'>"
			+"<a title='返回顶部' href='#'><img width='50px;' height='50px;' src='../images/to-top.png'/></a></div>";
		var to_top="<div style='position: fixed; bottom: 50px; right: 30px; cursor: pointer; z-index: 999999; display: block; opacity: 1;'>"
			+"<a title='博客主页' href='../../'><img width='50px;' height='50px;' src='../images/to-home.png'/></a></div>";
		$(document.body).append(to_main);
		$(document.body).append(to_top);
	})
});
