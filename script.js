var mywindows = {};
var i = 0;

var windowObj = new Object();

function MakeWindow(){
	
	var app_div = document.createElement('div');
	var test = document.createTextNode("A new window!");
	//app_div.appendChild(default_menu('menu' + i, closeWindow, maxWindow, ldockWindow, rdockWindow));
	app_div.appendChild(test);
	mywindows[i] = wm.openElement(app_div, 600, 400, 'random', 'random', {}, {}, function(){self.settings_window_open = false;});

	mywindows[i].add_menu_item('turky', 'imgs/dock_right.png', 'icon', mywindows[i].menu, callthisfunction);
	mywindows[i].add_menu_item('turky', 'imgs/dock_left.png', 'icon', mywindows[i].menu, callthisfunction);
	mywindows[i].add_menu_item('turky', 'imgs/dock_right.png', 'icon', mywindows[i].menu, callthisfunction);
		mywindows[i].add_menu_item('turky', 'imgs/dock_right.png', 'icon', mywindows[i].menu, callthisfunction);
	mywindows[i].add_menu_item('turky', 'imgs/dock_left.png', 'icon', mywindows[i].menu, callthisfunction);
	mywindows[i].add_menu_item('turky', 'imgs/dock_right.png', 'icon', mywindows[i].menu, callthisfunction);
	mywindows[i].add_menu_item('Just Beans', 'imgs/dock_left.png', 'title', mywindows[i].menu, callthisfunction);
	mywindows[i].add_menu_item('Solo Frijoles', 'imgs/dock_right.png', 'title', mywindows[i].menu, callthisfunction);
	var nextlvl  = mywindows[i].add_menu_item('A Way', 'imgs/dock_right.png', 'icon_title', mywindows[i].menu, callthisfunction);
	mywindows[i].add_menu_item('Just Frijoles', 'imgs/dock_left.png', 'title', nextlvl, callthisfunction);
	mywindows[i].add_menu_item('One', 'imgs/dock_left.png', 'icon_title', nextlvl, callthisfunction);
	mywindows[i].add_menu_item('Two', 'imgs/dock_right.png', 'icon_title', nextlvl, callthisfunction);
	mywindows[i++].activate_menu();
}

function debug(){

	
}

function callthisfunction(){
	console.log("Some function was called");
}


var wm;

$( document ).ready(function() {
	wm = new JSWM();
	//$( "#menuOne").windowMenu();
	//$( "#menuTwo").windowMenu();
	
	
	
});
