
$(document).ready(function(){

	var pacman = {
		x: 5, 
		y: 5
	}

	var empty = pacman.x + pacman.y*10;

	var world = [
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
		0, 1, 0, 1, 1, 1, 1, 1, 1, 0,
		0, 1, 0, 1, 1, 1, 1, 1, 1, 0,
		0, 1, 0, 1, 1, 1, 1, 1, 1, 0,
		0, 1, 0, 1, 0, 0, 0, 1, 1, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	];

	function draw_world(){
		document.getElementById('world').innerHTML = "";
		for(var i = 0; i < world.length; i++){
			if(i === empty) {
				// starting point for pacman
			} else if(world[i] === 0){
				document.getElementById('world').innerHTML =
				 	document.getElementById('world').innerHTML + "<div class='brick' style='top:" + Math.floor(i/10) * 32 + "px; left:" + (i%10) * 32 + "px;'<div>"
			} else if(world[i] === 1){
				document.getElementById('world').innerHTML =
				 	document.getElementById('world').innerHTML + "<div class='coin' style='top:" + Math.floor(i/10) * 32 + "px; left:" + (i%10) * 32 + "px;'<div>"
			} else {
				// leave it blank
			}
		}
	}

	function draw_pacman(){
		document.getElementById('world').innerHTML =
			document.getElementById('world').innerHTML + "<div class='pacman' style='top:" + pacman.y*32 + "px; left:" +  pacman.x*32 + "px'<div>"
	}

	draw_world();
	draw_pacman();

	document.onkeydown = function(e){
		//console.log(e);
		// determine  if an arrow key was pressed and move pacman
		
		// go left
		if (e.keyCode == 37){
			if (world[(pacman.y*10) + (pacman.x-1)] === 0){
				pacman.x = pacman.x 
			}
			else{
				pacman.x = pacman.x - 1  
			}	
		} 
		// go right
		else if (e.keyCode == 39){
			if (world[(pacman.y*10) + (pacman.x+1)] === 0){
				pacman.x = pacman.x
			}
			else{
				pacman.x = pacman.x + 1   
			} 
		} 
        // go up
		else if (e.keyCode == 38) {
			// console.log("pacman.y*10", pacman.y*10)
			// console.log("pacman.x", pacman.x)
			if (world[((pacman.y*10)-10) + (pacman.x)] === 0){
				pacman.y = pacman.y
			}
			else{
				pacman.y = pacman.y - 1   
			} 
		}
		// go down
		else {
			if (world[((pacman.y*10)+10) + (pacman.x)] === 0){
				pacman.y = pacman.y
			}
			else{
				pacman.y = pacman.y + 1   
			} 
		}


		if(world[(pacman.y*10) + (pacman.x)] == 1){
			// there is a coin, remove it from the array
			world[(pacman.y*10) + (pacman.x)] = 2;
		}
		draw_world();
		draw_pacman();
	}
})