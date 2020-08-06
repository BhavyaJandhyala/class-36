var database;
var gameState = 0;
var playerCount;
var form;
var player;
var game;

function setup(){
    canvas = createCanvas(400,400);
    database = firebase.database();
    game = new Game();
    game.start();
    game.getData();
    
    
}

function draw(){
    background("white");
    
    drawSprites();
}


