
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

//Não havia declaração das variaveis
var ground, groundObj, leftSide, rightSide;

var world, engine;
function preload() {

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2

	}
	//um circulo possui posição x, y e o raio. Havia no seu código 180 que não pertence a circle.
	ball = Bodies.circle(260, 100, 50, ball_options);
	World.add(world, ball)
	//piso
	groundObj = new Ground(650, 690, width*2, 20);
	//left
	leftSide = new Ground(1100, 600, 20, 120);
	
	//criar uma parede right

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	//Não existe drawSrpites neste projeto! Ele usa exclusivamente a Matter.
	//drawSprites();

	groundObj.display();

	//exibir parede direita

	//exibir parede esquerda

	//criar ellipse pra passar as informações da bola.



}

function KeyPressed() {
	if (keyCode === UP_ARROW) {
		//ERRO AQUI!!Falta aplicar a força ao corpo!!! coloquei abaixo a função com a estrutura que tem aplicar ali... 
		//Dica: olha a aula 21!
		
		//Matter.Body.applyForce(VALOR,POSICAO,FORÇA A SER EXERCIDA)
	}
}

