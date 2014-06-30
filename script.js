var mywindows = {};
//var wm = new JSWM();
var i = 0;

function MakeWindow(){
	var wm = new JSWM();
	var app_div = document.createElement('div');
	var test = document.createTextNode("A new window!");
	app_div.appendChild(MenuHandle('menu' + i, add_on()));
	app_div.appendChild(test);
	mywindows[i++] = wm.openElement(app_div, 600, 400, 'random', 'random', {}, {}, function(){self.settings_window_open = false;});
	$( "#menu" + (i-1)).windowMenu();

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

function MenuHandle(menuid, MoreHtml){
	var wrapper = document.createElement("Div");
	wrapper.innerHTML = menu_html(MoreHtml);
	wrapper.setAttribute('class', 'JSWM_window_handle');
	wrapper.setAttribute('id', menuid );
	return  wrapper;

}


function closeWindow(){
	mywindows[0].close();

}

function maxWindow(){
	mywindows[0].maximise();

}

function add_on(){
	var html = '';
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


$( document ).ready(function() {
	$( "#menuOne").windowMenu();
	$( "#menuTwo").windowMenu();
	
});