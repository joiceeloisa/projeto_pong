//variàveis da bolinha
let XBolinha = 300;
let YBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

// velocidade da bolinha 
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6; 
let raqueteComprimento = 10; 
let raqueteAltura = 90;

//variáveis da raquete
let xraquete = 5;
let yraquete = 150;

// variáveis do oponente 
let xraqueteOponente = 585;
let yraqueteOponente = 150; 
let velocidadeYOponente;

let colidiu = false 

//placar do jogo 
let meuspontos = 0;
let pontosdoOponente = 0;
//sons do jogo
let ponto; 
let raquetada;
let trilha

function preload(){
  trilha = loadSound ("trilha.mp3" );
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound ("ponto.mp3");
}
   
function setup() {
   createCanvas (600,400)
   trilha.loop ();
}

function draw() {
    background(0)
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostrarRaquete(xraquete, yraquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
   verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaquete);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}
  


function mostraBolinha(){

  }

function movimentaBolinha(){
  XBolinha += velocidadeXBolinha;
    YBolinha += velocidadeYBolinha;
}
  
function verificaColisaoBorda(){
  if (XBolinha + raio > width ||
XBolinha - raio< 0){
   velocidadeXbolinha *= -1;
}
 if (YBolinha + raio > height ||
   YBolinha - raio < 0){
  velocidadeYBolinha *= -1;
   }
 }
  

function mostrarRaquete(x,y){
   rect(x,y, raqueteComprimento,
        raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
     yRaquete += 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  } 
}

function verificaColisaoRaquete(){
if (xbolinha-raio<xraquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
  velocidadeXBolinha *= -1;
  }
}
function verificaColisaoRaquete(x, y){
  colidiu =collideRectCircule(x,y, raqueteComprimento, raqueteAltura, 
 xBolinha, yBolinha, raio);
 if (colidiu){
   velocidadeXBolinha *= -1;
   raquetada.play();
 }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha -                                                                  yRaqueteOponente - raqueteComprimento / 2 - 30;                                              
 yRaqueteOponente += velocidadeYOponente
}
  
function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize (16);
  fill(color(255,140,0));
  rect(15010, 40, 20);
  fill (255);
  text(meusPontos, 170, 26);
  fill(color(255,140,0));
  rect(450,10,40,20);
  fill(255);
  text(pontosdoOponente, 470,26);
}

function marcaPonto(){
  if (xBolinha < 10590){
  meusPontos += 1;
    ponto.play ();
}
 if (xBolinha < 10){
  pontosDoOponente += 1;
   ponto.play();   
 }
  
}
