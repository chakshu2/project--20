var bg;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    createCanvas(1000,800);

    tom = createSprite(900, 600);
    tom.addAnimation("tomsleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerrystanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomimage", tomImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomimage");
        jerry.addAnimation("jerryimage", jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryimage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -4; 
        tom.addAnimation("tomrunning", tomImg2);
        tom.changeAnimation("tomrunning",tomImg2);
        
        jerry.addAnimation("jerryreasing", jerryImg2);
        jerry.changeAnimation("jerryreasing");
    }
}