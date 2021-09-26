canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
greencar_height = 150;
greencar_width = 80;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_x = 5;
greencar_y = 225;

function add() {
	background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadGreencar;
    greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadGreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38') {
			up();
			console.log("Up");
		}
	
		if(keyPressed == '40') {
			down();
			console.log("Down");
		}
		
		if(keyPressed == '37') {
			left();
			console.log("Left");
		}
	
		if(keyPressed == '39') {
			right();
			console.log("Right");
		}
}

function up() {
	if(greencar_y >=0) {
		greencar_y =  greencar_y - 10;
		console.log("When Up Arrow Key is Pressed, x = " + greencar_x + "and y = " + greencar_y);
		uploadBackground();
		uploadGreencar();
	}
}

function down() {
	if(greencar_y <= 500) {
		greencar_y =  greencar_y + 10;
		console.log("When Up Arrow Key is Pressed, x = " + greencar_x + "and y = " + greencar_y);
		uploadBackground();
		uploadGreencar();
	}
}

function left() {
	if(greencar_y >= 0) {
		greencar_y =  greencar_y - 10;
		console.log("When Left Arrow Key is Pressed, x = " + greencar_x + "and y = " + greencar_y);
		uploadBackground();
		uploadGreencar();
	}
}

function right() {
	if(greencar_y <= 700) {
		greencar_y =  greencar_y + 10;
		console.log("When Right Arrow Key is Pressed, x = " + greencar_x + "and y = " + greencar_y);
		uploadBackground();
		uploadGreencar();
	}
}