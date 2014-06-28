var mywindow = null;

function MakeWindow(){
	var wm = new JSWM();
	var app_div = document.createElement('div');
	var test = document.createTextNode("A new window!");
	app_div.appendChild(MenuHandle());
	app_div.appendChild(test);
	console.log("app_div: " + app_div.getElementsByClassName("JSWM_window_handle")[0] );
	mywindow = wm.openElement(app_div, 600, 400, 'random', 'random', {}, {}, function(){self.settings_window_open = false;});
	$( ".JSWM_window_handle").multLvlMenu();

}


function menu_html(){
	var html = '';// "<div class='dl-menuwrapper' id='window_menu'>";
	html += "<div class='dl-trigger' id='button-trigger'><img id='img-button' src='MultiLvlMenuPlugin/menubtn.png' height='40' width='40'></div>";
	html += "<ul id='ul-menu' class='menu'>";
	html += "<li><a href='#'>";
	html += "<img class='menu_img' src='imgs/close.png' height='15' width='15' onclick='closeWindow()'>";
	html += "<img class='menu_img' src='imgs/maximize_window.png' height='15' width='15'>";
	html += "<img class='menu_img' src='imgs/dock_left.png' height='15' width='15'>";
	html += "<img class='menu_img' src='imgs/dock_right.png' height='15' width='15'>";
	html += "</a></li>";
	html += "</ul>";
	//html += "</div>";
	return html;

}

function MenuHandle(){
	var wrapper = document.createElement("Div");
	wrapper.innerHTML = menu_html();
	wrapper.setAttribute('class', 'JSWM_window_handle');
	wrapper.setAttribute('id', 'window_menu' );
	return  wrapper;

}

function closeWindow(){
	mywindow.close();

}