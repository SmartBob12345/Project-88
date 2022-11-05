var canvas = new fabric.Canvas("myCanvas");
bally = 0;
ballx = 0;
holex = 800;
holey = 400;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(img){
		holeobject = img;
		holeobject.scaleToWidth(50);
		holeobject.scaleToHeight(50);
		holeobject.set({
			top:holey, 
			left:holex
		});
		canvas.add(holeobject);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ballobject = Img;
		ballobject.scaleToWidth(50);
		ballobject.scaleToHeight(50);
		ballobject.set({
			top:bally, 
			left:ballx
		});
		canvas.add(ballobject);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(ballx == holex && bally == holey){
		document.getElementById("hd3").innerHTML = "You got the ball in the hole!";
		document.getElementById("myCanvas").style.borderColor = "red";
		canvas.remove(ballobject)
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(bally >= 0){
			bally = bally - block_image_height
				console.log("block image width:", block_image_height);
				console.log("ballx = ", ballx);
				console.log("bally = ", bally);
				canvas.remove(ballobject);
				new_image();
		}
	}
	}

	function down()
	{
		if(bally <= 450){
			bally = bally + block_image_height
				console.log("block image width:", block_image_height);
				console.log("ballx = ", ballx);
				console.log("bally = ", bally);
				canvas.remove(ballobject);
				new_image();
		}
	}

	function left()
	{
		if(ballx >= 0)
		{
			ballx = ballx - block_image_width
			console.log("block image width:", block_image_width);
			console.log("ballx = ", ballx);
			console.log("bally = ", bally);
			canvas.remove(ballobject);
			new_image();
		}
	}

	function right()
	{
		if(ballx <= 1050)
		{
			ballx = ballx + block_image_width
			console.log("block image width:", block_image_width);
			console.log("ballx = ", ballx);
			console.log("bally = ", bally);
			canvas.remove(ballobject);
			new_image();
		}
	}
	


