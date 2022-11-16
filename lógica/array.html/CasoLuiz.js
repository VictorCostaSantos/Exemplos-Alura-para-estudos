//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let diametro = 20;
let raio = diametro/2;

//variáveis da raquete
let xRaquete = 0;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let velocidadeYRaquete = 8;

//variáveis do oponente
let xRaqueteOponente = 0;
let yRaqueteOponente = 150;
let raqueteComprimentoOponente = 10;
let raqueteAlturaOponente = 90;
let velocidadeYRaqueteOponente = 8;

//pontuação
var pontos = 0,pontosOponente = 0;
//inicia 1 vez
function setup() {
  createCanvas(600, 400);
  xRaqueteOponente = width - raqueteComprimentoOponente;

}

//desenha sempre
function draw() {
  background(0);
  bolinha();
  raquete();
  raqueteOponente();
  placar(pontos,  width/2-100, 50);
  placar(pontosOponente,  width/2+100, 50);
}  

//função da bolinha
function bolinha(){
  function visualBolinha(){
   circle(xBolinha, yBolinha, diametro);
}
  function funcionalBolinha(){
  //movimento da bolinha
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha

  //colisão com a borda
  if (xBolinha + raio > width){
    velocidadeXBolinha *= -1;
    pontos++;
  }
  if (xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
    pontosOponente++;
  }
  if (xBolinha < -2){
    xBolinha = width/2;
    yBolinha = height/2;
  }
  if (xBolinha > width+2){
    xBolinha = width/2;
    yBolinha = height/2;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }

  //colisão com a raquete
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
      velocidadeXBolinha *= -1;
      }
  if (xBolinha + raio > xRaqueteOponente && yBolinha - raio < yRaqueteOponente + raqueteAlturaOponente && yBolinha + raio > yRaqueteOponente){
      velocidadeXBolinha *= -1;
      }
}
  visualBolinha();
  funcionalBolinha();
}
function funcionalRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= velocidadeYRaquete;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += velocidadeYRaquete;
  }
}
function visualRaquete(){
  rect(xRaquete,yRaquete,raqueteComprimento,raqueteAltura);
}
function raquete(){
  visualRaquete();
  funcionalRaquete();
  }
  function visualRaqueteOponente(){
    rect(xRaqueteOponente,yRaqueteOponente,raqueteComprimentoOponente,raqueteAlturaOponente);
  
}
    function funcionalRaqueteOponente(){
  
      velocidadeYRaqueteOponente = yBolinha - 30 - yRaqueteOponente - raqueteComprimentoOponente / 2;
      yRaqueteOponente += velocidadeYRaqueteOponente;
  
    }
function raqueteOponente(){
  visualRaqueteOponente();
  funcionalRaqueteOponente();
  }
function placar(pontos,x,y){
  fill(255)
  text(pontos,x,y);
}