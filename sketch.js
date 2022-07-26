/* O jogo terá como fundamento a resolução de equações básicas de matemática, onde o jogador deverá pegar os galões de combustivel que estiverem com o valor correto da equação proposta. Ainda não possui orientador.*/

var imgcarf = []
var imgcarf2 = []
var imgcare = []
var imgcard = []
var imgdes;
var imgpistad;
var imgcacto;
var imggalao;
var sompneu;
var somtop;
var somfim;
var imgmenu;
var imgmenu1;
var imggif;
var imggif2;
var myFont1;
var myFont2;


var yPo=260 // variaves para posição do car
var xPo= 350// variaves para posição do car

var status=0  // var status é para movimentação imagem car

var opcao=1 //Contadores para mudanças de telas
var tela=0
var contador=0
var rate=60
let cont=0
let contS=0

var rectx=245 /* variaveis para movimentação do 
retangulo que vai selecionar a opção de jogo*/
var larguraB=190
var xmaxB= rectx + larguraB
var recty=107
var alturaB=40
var ymaxB= recty + alturaB


var yPm=300 // variaveis para controle das opção no menu
var xPm=30

var vX=[]
var vY=[]
var vXe=[]
var vYe=[]
var quantcac=4
var vo=(3/2) // velocidade

var xr=[]
var xy=[] 
var quantga=2
var respoerra=[]

var indice=0
var xo=[]
var yo=[]
var respocerta=[]
var perguntas=[]
var pontos=0
var vidas=5
var distcoli=40

function preload(){
  soundFormats('mp3')
 sompneu=loadSound('Som de freada de carro - Efeito sonoro - Muscle Car Driving Skid Out.mp3')
  soundFormats('mp3')
  somtop=loadSound('Top Gear - Track 1 (Super Nintendo).mp3')
 soundFormats('mp3')
 somfim=loadSound('Ayrton Senna - Tema da vitória-1.mp3')
  imgcarf[0]=loadImage('imgcarf.png');
  imgcare[0]=loadImage('imgcare.png');
  imgcard[0]=loadImage('imgcard.png');
  imgdes = loadImage('desertopaiseagem.jpg')
  imgpistad = loadImage('pistadeserto.jpg')
   imgcacto = loadImage('cactos.png');
   imggalao = loadImage('galao.png')
  myFont = loadFont('Pretendo.ttf')
   imgmenu = loadImage('2bx79gp.jpg');
  imggif = loadImage('1IXU.gif');
 imggif2= loadImage('tumblr_inline_nufdylO8JX1tq3x2w_500.gif');
   imgmenu1 = loadImage('Epqi.gif');
  imgfim = loadImage('Sem título1.png');
   imggif3= loadImage('TopGear.gif');
   imggif4 = loadImage('8c6b2dbd37985c1117763f7d81731dc8.gif');
 imgover = loadImage('gameover.jpg');
   
 
}

function setup() {
  createCanvas(700, 400);
  frameRate(rate);
    somtop.play();
  
  
  perguntas[0]= '15+20'
  respocerta[0]=35
  perguntas[1]= '9+2'
  respocerta[1]=11
  perguntas[2]= '17+19'
  respocerta[2]=36
  perguntas[3]= '5+28'
  respocerta[3]=33
  
  perguntas[4]= '14-9'
  respocerta[4]=5
  perguntas[5]= '15-12'
  respocerta[5]=3
  perguntas[6]= '45-20'
  respocerta[6]=20
  perguntas[7]= '39-17'
  respocerta[7]=22
  
  perguntas[8]= '2*2'
  respocerta[8]=4
  perguntas[9]= '15*3'
  respocerta[9]=45
  perguntas[10]= '17*4'
  respocerta[10]=68
  perguntas[11]= '15*6'
  respocerta[11]=90
  
  perguntas[12]= '21/3'
  respocerta[12]=7
  perguntas[13]= '20/4'
  respocerta[13]=5
  perguntas[14]= '27/9'
  respocerta[14]=3
  perguntas[15]= '15/5'
  respocerta[15]=3
  
    yo=random(50,100)
  xo=random(270,350)
  
  
 for(g=0; g<quantga; g++){
  xy[g] = random(50, 100)//posição do galão
  xr[g] = random(270, 340)
  respoerra[g] =parseInt(random(200))
    while(respoerra[g] == respocerta[indice]){
       respoerra[g]= parseInt(random(200))
    } 
 }
  
  for(i=0; i<quantcac; i++){
   vX[i]=random(200,270)
   vY[i]=-random(10,400)
   vXe[i]=random(350,500)
   vYe[i]=-random(10,400)
  } 
}

function draw() {
    if(tela==0)
    menu();
  if(tela==1)
    transicao1();
  if(tela==2)
    instrucoes();
  if(tela==3)
    creditos();
  if(tela==4)
    fase1();
   if(tela==5)
    transicao2();
  if(tela==6)
    fase2();
   if(tela==7)
    transicao3();
  if(tela==8)
    fase3();
   if(tela==9)
    transicao4();
  if(tela==10)
    fase4();
  if(tela==11)
    fim();
  if(tela==12)
    gameover();
  

}

function transicao1(){
  image(imggif3, 0, 0, 700, 420)
  textSize(60)
  fill(0)
  textFont(myFont)
  text('PRIMEIRA FASE', 100, 70)
  textFont(myFont)
  textSize(25)
  text('Voce esta perto de comecar uma grande corrida matematica. Para isso, prepare-se, esteja atento e pise fundo! Na fase 1, seu objetivo e resolver as equacoes de adicao e somar 40 pontos para pode avancar para a fase 2. Mas lembre-se: voce so tem CINCO vidas.', 20 ,190, 650)
  text('PRESSIONE ENTER PARA INCIAR', 20, 120, 650)

}
  
function transicao2(){
  image(imggif4, 0, 0, 700, 420)
  textSize(60)
  fill(0)
  textFont(myFont)
  text('PRIMEIRA FASE', 100, 70)
  textFont(myFont)
  textSize(25)
  text('Paramos para abastecer. Voce chegou ate a fase dois. Agora seu desafio será de subtracao.', 20 ,190, 650)
  text('PRESSIONE ENTER PARA INCIAR', 20, 120, 650)
  
}

function transicao3(){
  
   image(imggif4, 0, 0, 700, 420)
  textSize(60)
  fill(0)
  textFont(myFont)
  text('PRIMEIRA FASE', 100, 70)
  textFont(myFont)
  textSize(25)
  text('Paramos para abastecer. Voce chegou ate a fase tres. Agora seu desafio será mais dificil, teremos multiplicacao.', 20 ,190, 650)
  text('PRESSIONE ENTER PARA INCIAR', 20, 120, 650)
}

function transicao4(){

  image(imggif4, 0, 0, 700, 420)
  textSize(60)
  fill(0)
  textFont(myFont)
  text('PRIMEIRA FASE', 100, 70)
  textFont(myFont)
  textSize(25)
  text('Paramos para abastecer pela ultima vez. Voce chegou ate a fase quatro, seu ultimo desafio antes de ser o campeao mundial de de Math Race. Agora seu desafio será mais dificil, teremos divisao.', 20 ,190, 650)
  text('PRESSIONE ENTER PARA INCIAR', 20, 120, 650)
}

function painel(){
 
    cont=cont+1
  contS = parseInt(cont/rate);
  fill(0)
  textSize(39);
  text('tempo: '+contS, 575, 40);
  text('vidas: '+vidas, 50, 40);
  text('Pergunta: '+ perguntas[indice], 200, 40);
  text('Pontos: '+pontos, 400, 40 )
}

function obstcerto(){

  image(imggalao, xo, yo, 50, 50)
   
    yo=yo+vo
  if(yo>450){
  yo=random(50,100)
  xo=random(270,350)   
  }  if(xo<310){
  xo= xo-3/4
  }  else if(xo>=315) {
         xo = xo + 3/4
  }   
   if(dist(yo, yo, xPo, yPo) < distcoli){
     for(l=0; l<2; l++){
        yo = random(50, 100)
       xo= random(270, 300)
       
     }pontos=pontos+10
     indice++
   }   fill(0)
        text(respocerta[indice], xo+5, yo+40)
        textFont(myFont)
        textSize(15)
}

function cactos(){
 
   for(i=0; i<quantcac; i++){
    image(imgcacto, vX[i], vY[i], 120, 120)
   vY[i]=vY[i]+vo
  vX[i]=vX[i]-(3/2)
    image(imgcacto, vXe[i], vYe[i], 120, 120)
    vYe[i]=vYe[i]+vo
    vXe[i]=vXe[i]+(3/2)
     if(vY[i]>450 && vYe[i]>450){
     vX[i]=random(200,250)
     vY[i]=-random(10,450)
    vXe[i]=random(350,500)
    vYe[i]=-random(10,450)
  }
   }
}

function menu(){
  
  background("#D05E2B");
   image(imgmenu1, 0, 0, 700, 420)
    
  noFill()
    rect(190, 35, 315, 60, 30, 40, 80)

  noFill()
  rect(rectx, recty, larguraB ,alturaB,150)
  fill(0)
  textSize(45)
  textFont(myFont)
  text('Math Race', 220,80)
  textSize(50)
  textFont(myFont)
  text('%', 330, 60)
  textSize(25)
  fill('#ECF1F0')
  text('INICIO',300, 137)
  text('INSTRUCOES', 250, 220)
  text('CREDITOS', 272, 307)
  }

function instrucoes(){

 background("#D05E2B");
   image(imggif, 0, 0, 700,400)
  textSize(60)
  fill('#ECF0F1')
  textFont(myFont)
  text('INSTRUCOES', 125, 70)
  textFont(myFont)
  textSize(30)
  text('Use as setas direta e esquerda para mover o carro, ENTER para avançar as transicoes de fases e ESC para voltar ao menu. Voce tera cinco vidas e 200 segundos para concluir o jogo', 50 ,140, 650)
 
}

function creditos(){
 
   background("#D05E2B");
   image(imggif2, 0, 0, 700,400)
  textSize(60)
  textFont(myFont)
  text('Creditos', 200, 130)
  textSize(30)
  fill('#ECF0F1')
  text('LUCAS GOMES', 120, 170)
  textSize(20)
  text('Funcao:  Estudante', 120, 200)
  textSize(20)
  text('Estudante do bacharelado de Ciencias e Tecnologia na UFRN', 120, 230, 300)

}

function movimentocar(){
      
if(status==0)
  image(imgcarf[contador%1], xPo, yPo, 100, 110);
if(status==1)
  image(imgcard[contador%1], xPo, yPo, 150, 112);
if(status==2)
  image(imgcare[contador%1], xPo, yPo, 140, 140);
 

  if (keyIsDown(RIGHT_ARROW ) && xPo<600){
    xPo=xPo+3
   status=1
  
  }   else{
    status=0}
  
  if(keyIsDown(LEFT_ARROW) && xPo>20){
    xPo=xPo-3
    status=2
  }
}

function fase1(){
   
   image(imgpistad, 0, 100, 700, 300);
  
  fill(230);
  triangle(330, 65, 53, 400, 652, 400);
  fill(150);
   triangle(330, 73, 92, 400, 615, 400);
   fill(230)
  rect(328, 102, 10, 35, 0, 0, 0, 0);
   rect(325, 152, 15, 50, 0, 0, 0, 0);
    rect(322, 218, 20, 65, 0, 0, 0, 0);
   rect(319, 300, 25, 80, 0, 0, 0, 0);
  
    obsterrado();
  
  obstcerto();
  
  cactos();
       
   image(imgdes, 0, 0, 700, 100)  
  
  
movimentocar();
painel();
  
  if(pontos>=40){
    tela=5
  }
}

function fase2(){
     
   image(imgpistad, 0, 100, 700, 300);
  
  fill(230);
  triangle(330, 65, 53, 400, 652, 400);
  fill(150);
   triangle(330, 73, 92, 400, 615, 400);
   fill(230)
  rect(328, 102, 10, 35, 0, 0, 0, 0);
   rect(325, 152, 15, 50, 0, 0, 0, 0);
    rect(322, 218, 20, 65, 0, 0, 0, 0);
   rect(319, 300, 25, 80, 0, 0, 0, 0);
  
    obsterrado();
  
  obstcerto();
  
  cactos();
       
   image(imgdes, 0, 0, 700, 100)  
  
  
movimentocar();
  
painel();
   if(pontos>=80){
    tela=7
  }
}

function fase3(){
    
    image(imgpistad, 0, 100, 700, 300);
  
  fill(230);
  triangle(330, 65, 53, 400, 652, 400);
  fill(150);
   triangle(330, 73, 92, 400, 615, 400);
   fill(230)
  rect(328, 102, 10, 35, 0, 0, 0, 0);
   rect(325, 152, 15, 50, 0, 0, 0, 0);
    rect(322, 218, 20, 65, 0, 0, 0, 0);
   rect(319, 300, 25, 80, 0, 0, 0, 0);
  
    obsterrado();
  
  obstcerto();
  
  cactos();
       
   image(imgdes, 0, 0, 700, 100)  
  
  
    
if(status==0)
  image(imgcarf[contador%1], xPo, yPo, 100, 110);
if(status==1)
  image(imgcard[contador%1], xPo, yPo, 150, 112);
if(status==2)
  image(imgcare[contador%1], xPo, yPo, 140, 140);
 
movimentocar();
  
painel();
   if(pontos>=120){
    tela=9
  }

}

function fase4(){

     image(imgpistad, 0, 100, 700, 300);
  
  fill(230);
  triangle(330, 65, 53, 400, 652, 400);
  fill(150);
   triangle(330, 73, 92, 400, 615, 400);
   fill(230)
  rect(328, 102, 10, 35, 0, 0, 0, 0);
   rect(325, 152, 15, 50, 0, 0, 0, 0);
    rect(322, 218, 20, 65, 0, 0, 0, 0);
   rect(319, 300, 25, 80, 0, 0, 0, 0);
  
    obsterrado();
  
  obstcerto();
  
  cactos();
       
   image(imgdes, 0, 0, 700, 100)  
  
  
    
movimentocar();
  
painel();
   if(pontos>=160){
    tela=11
  }
}

function fim(){
   image(imgfim, 0, 0, 700, 400); 
   
}

function gameover(){
   image(imgover, 0, 0, 700, 400);
    somtop.pause();
}

function keyPressed(){
  if(key=="ArrowUp" && recty>130){     
  recty=recty-85
  opcao=opcao-1
  }
  if(key=="ArrowDown" && recty<235){
    recty=recty+85
    opcao=opcao+1
  }
  if(key=="ArrowRight" && xPm<400){
    xPm=xPm+15
  }
   if(key=="ArrowLeft" && xPm>10){
xPm=xPm-15
   }
  
  if(key=="Enter"){
    if(tela==0){
    tela=opcao}
    else if(tela==1){
      tela=4
    }else if(tela==5){
      tela=6
    }else if(tela==7){
      tela=8
    }
  else if(tela==9){
      tela=10
    }
  }
  
  if(key=="Escape" || tela==12){
    tela=0
    vidas=5
  } 
   
  
}

function obsterrado(){
 for(g=0; g<quantga; g++){
     image(imggalao, xr[g], xy[g], 50, 50)
   
    fill(0)
    text(respoerra[g], xr[g]+5, xy[g]+40)
    textFont(myFont)
    textSize(15)
  xy[g]= xy[g] + vo
    if(xr[g]<310){
  xr[g]= xr[g]-3/4
  }  else if(xr[g]>=315) {
         xr[g] = xr[g] + 3/4
  }   
  if(xy[g]>450){
  xy[g] = random(50, 100)
  xr[g]= random(270, 350)
    respoerra[g]=parseInt(random(200))
  }
  if(dist(xr[g], xy[g], xPo, yPo) < distcoli){
     for(j=0; j<quantga; j++){
        xy[j] = random(50, 100)
       xr[j]= random(270, 300)
     }
    vidas=vidas-1
     if(vidas==0 || contS>=200){
      tela=12
     }
  }
 }  
}


