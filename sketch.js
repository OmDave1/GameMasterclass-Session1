var splash
var gameState="wait"
var playbutton,soundonbutton,soundoffbutton

function preload(){
splash=loadImage("splash.gif")
}

function setup(){
    createCanvas(windowWidth,windowHeight)

    // playbutton = createImg("startbutton.png")
    // playbutton.position(width/2-100,height/2+height/4)
   
    // soundonbutton = createImg("soundOn.png")
    // soundonbutton.position(playbutton.x-200,height/2+height/5)
    // soundonbutton.size(150,150)
    
    // soundoffbutton = createImg("soundOff.png")
    // soundoffbutton.position(playbutton.x+250,height/2+height/5)
    // soundoffbutton.size(150,150)
    
}

function draw(){
    background("white")
    if(gameState==="wait"){
        background(splash) 
    }

    // playbutton.mousePressed(()=>{
    //  gameState="level1" 
    //  playbutton.hide() 
    // })

    // if(gameState=="level1"){
    //     background("red")
    // }
}