var auto1, auto1img;
var auto2, auto2img;
var auto3, auto3img;
var auto4, auto4img;
var carretera;
var canvas;
var pantallaDeInicio;
var pantallaFinal;
var database;
var cars = [];
var playerCount;
var playersCount;

function preload(){
    pantallaDeInicio = loadImage('./assets/background.png');
    carretera = loadImage('./assets/track.jpg');
    auto1img = loadImage('./assets/car1.png');
    auto2img = loadImage('./assets/car2.png');
    auto3img = loadImage('./assets/car3.png');
    console.log('preload si jala');
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    database = firebase.database();
    form = new Form();
    form.display();
    console.log("funciona la fincion setup")
}

function draw(){
    background(pantallaDeInicio);
    //Evalua el total de jugadores
    if(playersCount === 3){
        //mandar a llamar al game.update(1)
    }
}

/*function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function gameUpdate(){
}*/ 