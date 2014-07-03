var mywindows = {};
var i = 0;



function MakeWindow(){
	
	var app_div = document.createElement('div');
	var test = document.createTextNode("A new window!");
	//app_div.appendChild(default_menu('menu' + i, closeWindow, maxWindow, ldockWindow, rdockWindow));
	app_div.appendChild(test);
	mywindows[i++] = wm.openElement(app_div, 600, 400, 'random', 'random', {}, {}, function(){self.settings_window_open = false;});
	//$( "#menu" + (i-1)).windowMenu();
	//$( "#111" ).windowMenu();
}

function debug(){
	var li = document.createElement('li');
	var a = document.createElement('a');
	var text = document.createTextNode("New Menu Item");
	a.appendChild(text);
	a.onclick = function(){ _this.close();};
	li.appendChild(a);
	//mywindows[0].add_menu_item(li);
	//mywindows[0].add_menu_item( bigMenu() );
	mywindows[0].add_item('turky', 'imgs/dock_left.png', 'icon', null, callthisfunction);
	mywindows[0].add_item('turky', 'imgs/dock_right.png', 'icon', null, callthisfunction);
	mywindows[0].add_item('turky', 'imgs/dock_left.png', 'icon', null, callthisfunction);
	mywindows[0].add_item('turky', 'imgs/dock_right.png', 'icon', null, callthisfunction);
	mywindows[0].add_item('turky', 'imgs/dock_left.png', 'icon', null, callthisfunction);
	mywindows[0].add_item('turky', 'imgs/dock_right.png', 'icon', null, callthisfunction);
	
}

function callthisfunction(){
	console.log("Some function was called");
}

function menu_html(MoreHtml){
	var html = '';// "<div class='dl-menuwrapper' id='window_menu'>";
	html += "<div class='dl-trigger' id='button-trigger'><img id='img-button' src='jswm_jquery/windowMenu/menubtn.png' height='40' width='40'></div>";
	html += "<ul id='ul-menu' class='menu'>";
	html += "<li><a href='#'>";
	html += "<img class='menu_img' src='imgs/close.png' height='15' width='15' onclick='closeWindow()'>";
	html += "<img class='menu_img' src='imgs/maximize_window.png' height='15' width='15' onclick='maxWindow()'>";
	html += "<img class='menu_img' src='imgs/dock_left.png' height='15' width='15'>";
	html += "<img class='menu_img' src='imgs/dock_right.png' height='15' width='15'>";
	html += "</a></li>";
	html += MoreHtml;
	html += "</ul>";
	//html += "</div>";
	return html;

}

function default_menu(menuid, closeFunc, maxFunc, ldockFunc, rdockFunc){
	var img_close = document.createElement("img");
	img_close.setAttribute('src', 'imgs/close.png');
	img_close.setAttribute('height', '15px');
	img_close.setAttribute('width', '15px');
	img_close.setAttribute('class', 'menu_img');
	img_close.onclick = closeFunc;
	
	var img_minmax = document.createElement("img");
	img_minmax.setAttribute('src', 'imgs/maximize_window.png');
	img_minmax.setAttribute('height', '15px');
	img_minmax.setAttribute('width', '15px');
	img_minmax.setAttribute('class', 'menu_img');
	img_minmax.onclick = maxFunc;
	
	var img_ldock = document.createElement("img");
	img_ldock.setAttribute('src', 'imgs/dock_left.png');
	img_ldock.setAttribute('height', '15px');
	img_ldock.setAttribute('width', '15px');
	img_ldock.setAttribute('class', 'menu_img');
	img_ldock.onclick = ldockFunc;
	
	var img_rdock = document.createElement("img");
	img_rdock.setAttribute('src', 'imgs/dock_right.png');
	img_rdock.setAttribute('height', '15px');
	img_rdock.setAttribute('width', '15px');
	img_rdock.setAttribute('onclick', rdockFunc);
	img_rdock.setAttribute('class', 'menu_img');
	img_rdock.onclick = rdockFunc;

	var a = document.createElement("a");
	a.setAttribute('href','#');
	a.appendChild(img_close);
	a.appendChild(img_minmax);
	a.appendChild(img_ldock);
	a.appendChild(img_rdock);
	
	var li = document.createElement("li");
	li.appendChild(a);
	
	var ul = document.createElement("ul");
	ul.setAttribute('class', 'menu');
	ul.setAttribute('id', 'ul-menu');
	ul.appendChild(li);
	
	var img_menu = document.createElement("img");
	img_menu.setAttribute('src', 'jswm_jquery/windowMenu/menubtn.png');
	img_menu.setAttribute('height', '40px');
	img_menu.setAttribute('width', '40px');
	img_menu.setAttribute('onclick', '');
	img_menu.setAttribute('class', 'img-button');
	
	var button = document.createElement("div");
	button.setAttribute('class', 'dl-trigger');
	//button.setAttribute('id', 'button-trigger');
	button.appendChild(img_menu);
	
	var wrapper = document.createElement("Div");
	wrapper.setAttribute('class', 'JSWM_window_handle');
	wrapper.setAttribute('id', menuid );
	wrapper.appendChild(button);
	wrapper.appendChild(ul);
	
	return wrapper;
}

function MenuHandle(menuid, MoreHtml){
	var wrapper = document.createElement("Div");
	wrapper.innerHTML = menu_html(MoreHtml);
	wrapper.setAttribute('class', 'JSWM_window_handle');
	wrapper.setAttribute('id', menuid );
	return  wrapper;

}


function closeWindow(){
	console.log("closeapp");
	mywindows[0].close();

};

function closefoo(){
	console.log("closeapp");
	mywindows[0].close();

};

function maxWindow(){
	mywindows[0].maximise();

}

function ldockWindow(){
	console.log("Docked Left");
}

function rdockWindow(){
	console.log("Docked Right");
}

function bigMenu(){
	var ul = document.createElement("ul");
	ul.setAttribute('class', 'sub_menu');
	ul.innerHTML = add_on();
	
	var a = document.createElement('a');
	var text = document.createTextNode("Big Menu");
	a.appendChild(text);
	
	
	var wrapper = document.createElement("li");
	wrapper.setAttribute('id', 'extra menu' );
	wrapper.appendChild(a);
	wrapper.appendChild(ul);
	
	
	return  wrapper;

}

function add_on(){
	var html = '';
	html += '<li><a class="backbtn" href="#">Back</a></li>';
	html += "<li><a href='#'>Pollo</a></li>";
	html += '<li><a href="#">Bird</a>';
	html += '	<ul class="sub_menu">';
	html += '		<li><a class="backbtn" href="#">Back</a></li>';
	html += '		<li><a href="#">Falcons</a></li>';
	html += '		<li><a href="#">Sparrows</a></li>';
	html += '		<li><a href="#">Hawks</a></li>';
	html += '		<li><a href="#">Doves</a></li>';
	html += '		<li><a href="#">Ducks</a></li>';
	html += '		<li><a href="#">Finches</a></li>';
	html += '		<li><a href="#">Crows</a></li>';
	html += '		<li><a href="#">Owls</a></li>';
	html += '	</ul>';
	html += '</li>';
	html += '<li><a href="#">Mammal</a>';
	html += '	<ul class="sub_menu">';
	html += '		<li><a class="backbtn" href="#">Back</a></li>';
	html += '		<li><a href="#">Humans</a>';
	html += '			<ul class="sub_menu">';
	html += '				<li><a class="backbtn" href="#">Back</a></li>';
	html += '				<li><a href="#">Mexicans</a></li>';
	html += '				<li><a href="#">Asians</a></li>';
	html += '				<li><a href="#">Africans</a></li>';
	html += '				<li><a href="#">Filipinos</a></li>';
	html += '			</ul>';
	html += '		</li>';
	html += '		<li><a href="#">Dogs</a></li>';
	html += '		<li><a href="#">Cats</a></li>';
	html += '	</ul>';
	html += '</li>';
	return html;
}
var wm;

$( document ).ready(function() {
	wm = new JSWM();
	//$( "#menuOne").windowMenu();
	//$( "#menuTwo").windowMenu();
	
	
	
});