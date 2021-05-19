var canvas= new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
var player_object="";
var block_image_object="";
function player_update(){
    fabric.Image.fromURL("player(1).png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set(
    {
        top: player_y,
        left:player_x
    }
        );
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
    block_image_object=Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set(
    {
        top: player_y,
        left:player_x
    }
        );
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    if (e.shiftKey ==true && keypressed == '80') {
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    } 
     if (e.shiftKey ==true && keypressed == '77') {
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    } 
    if (keypressed =='38') {
        console.log("up");
        up();
    }
    if (keypressed =='40') {
        console.log("down");
        down();
    }
    if (keypressed =='37') {
        console.log("left");
        left();
    }
    if (keypressed =='39') {
        console.log("right");
        right();
    }
    if (keypressed =='73') {
        console.log("i");
        new_image('download.jpg');
    }
     if (keypressed =='69') {
        console.log("e");
        new_image('shild.png');
    }   
     if (keypressed =='72') {
        console.log("h");
        new_image('HulkL.png');
    }  
     if (keypressed =='83') {
        console.log("s");
        new_image('Spiderman.png');
    }
    if (keypressed =='84') {
        console.log("t");
        new_image('thorhand.png');
    }
}
function up(){
    if(player_y>=0){
        player_y=player_y-block_image_height;
        console.log("block image height=" + block_image_height);
        console.log("when up arrow key is pressed, X=" +player_x+",Y="+ player_y );
        canvas.remove(player_object);
player_update();
    }
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_image_height;
        console.log("block image height=" + block_image_height);
        console.log("when up arrow key is pressed, X=" +player_x+",Y="+ player_y );
        canvas.remove(player_object);
player_update();
    }
}
function left(){
    if(player_x>0){
        player_x=player_x-block_image_width;
        console.log("block image width=" + block_image_width);
        console.log("when up arrow key is pressed, X=" +player_x+",Y="+ player_y );
        canvas.remove(player_object);
player_update();
    }
}
function right(){
    if(player_x<=850){
        player_x=player_x+block_image_width;
        console.log("block image width=" + block_image_width);
        console.log("when up arrow key is pressed, X=" +player_x+",Y="+ player_y );
        canvas.remove(player_object);
player_update();
    }
}