canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
canvas_height="800";
canvas_width="400";

gc_width = 75 ;
gc_hight = 199 ;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

gc_x = 5 ;
gc_y = 225 ;

function add() {
	
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	background_imgTag.src = greencar_image;
}

function uploadBackground() {
	
	ctx.drawImage(background_imgTag, 0,0, canvas_width , canvas_height);

}

function uploadgreencar() {
	
	ctx.drawImage(greencar_imgTag, gc_x , gc_y , gc_hight , gc_hight);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
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
		if (gc_y>=0){
		   gc_y-=10;
		   uploadBackground();
		     uploadgreencar();
		}
}

function down()
{
	if (gc_y<=510){
		gc_y+=10;
		uploadBackground();
		uploadgreencar();
	 }
}

function left()
{
	if (gc_x>0){
		gc_x-=10;
		uploadBackground();
		uploadgreencar();
	 }
}

function right()
{
	if (gc_x<=700){
		gc_x+=10;
		uploadBackground();
		uploadgreencar();
	 }
}
