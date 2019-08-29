
function news(){
  var variable = JSON.parse(window.localStorage.getItem('variable'));
  var prec = JSON.parse(window.localStorage.getItem('prec'));
  var fat = [-0.2,-0.4,-0.3,-0.2,-0.1,0,0.1,0.2];
  var pes = [-3,-2,-1,0,1,2,3,4];
  var min = 0;
  var max = 7;
  var random1 = Math.floor(Math.random() * (+max - +min)) + +min;

  var random2 = Math.floor(Math.random() * (+max - +min)) + +min;
  var random3 = Math.floor(Math.random() * (+max - +min)) + +min;

  variable.rand1 = pes[random2];
  variable.rand2= pes[random3];

  prec.colorido = prec.colorido + pes[random2];
  prec.lapis = prec.lapis + pes[random2];
  prec.completo = prec.completo + pes[random2];
  prec.madeira = prec.madeira + pes[random2];
  prec.grafite = prec.grafite + pes[random3];
  prec.grafcor = prec.grafcor + pes[random3];
  prec.borracha = prec.borracha + pes[random3];
  variable.prob = variable.prob + fat[random2];

  window.localStorage.setItem('variable', JSON.stringify(variable)); //guarda
  window.localStorage.setItem('prec', JSON.stringify(prec)); //guarda
}

function madeira(y){
  var player = JSON.parse(window.localStorage.getItem('player'));
  var merc = JSON.parse(window.localStorage.getItem('prec'));
  var estoque = JSON.parse(window.localStorage.getItem('estoque'));

  z = estoque.madeira;
  mon = player.cash;
  x = merc.madeira;

 if(y == true){ 
  if(mon - x >= 0 ){
    player.cash = mon-x;
   estoque.madeira++;
  }
  else{
	  alert("Dinheiro Insuficiente!");
  }
}
else{
  if(z > 0){
player.cash = mon+ (merc.madeira - (merc.madeira * 0.30)); // -30%
estoque.madeira--;
alert("Item vendido!");
}
else{
  alert("Item insuficiente");
}
}
window.localStorage.setItem('player', JSON.stringify(player)); //guarda
window.localStorage.setItem('estoque', JSON.stringify(estoque)); //guarda
}

function grafite(y){
  var player = JSON.parse(window.localStorage.getItem('player'));
  var merc = JSON.parse(window.localStorage.getItem('prec'));
  var estoque = JSON.parse(window.localStorage.getItem('estoque'));

  z = estoque.grafite;
  mon = player.cash;
  x = merc.grafite;

 if(y == true){ 
  if(mon - x >= 0 ){
    player.cash = mon-x;
    estoque.grafite++;
  }
  else{
	  alert("Dinheiro Insuficiente!");
  }
}
else{
  if(z > 0){
player.cash =  mon + (merc.grafite + merc.grafite * 0.30); // -30%
estoque.grafite--;
alert("Item vendido!");
}
else{
  alert("Item insuficiente");
}
}
window.localStorage.setItem('player', JSON.stringify(player)); //guarda
window.localStorage.setItem('estoque', JSON.stringify(estoque)); //guarda
}

function grafcor(y){
  var player = JSON.parse(window.localStorage.getItem('player'));
  var merc = JSON.parse(window.localStorage.getItem('prec'));
  var estoque = JSON.parse(window.localStorage.getItem('estoque'));

  z = estoque.grafcor;
  mon = player.cash;
  x = merc.grafcor;

 if(y == true){ 
  if(mon - x >= 0 ){
    player.cash = mon-x;
    estoque.grafcor++;
  }
  else{
	  alert("Dinheiro Insuficiente!");
  }
}
else{
  if(z > 0){
player.cash =  mon + (merc.grafcor + merc.grafcor * 0.30); // -30%
estoque.grafcor--;
alert("Item vendido");
}
else{
  alert("Item insuficiente");
}
}
window.localStorage.setItem('player', JSON.stringify(player)); //guarda
window.localStorage.setItem('estoque', JSON.stringify(estoque)); //guarda
}

function borracha (y){
  var player = JSON.parse(window.localStorage.getItem('player'));
  var merc = JSON.parse(window.localStorage.getItem('prec'));
  var estoque = JSON.parse(window.localStorage.getItem('estoque'));

  z = estoque.borracha;
  mon = player.cash;
  x = merc.borracha;

 if(y == true){ 
  if(mon - x >= 0 ){
    player.cash = mon-x;
   estoque.borracha++;
  }
  else{
	  alert("Dinheiro Insuficiente!")
  }
}
else{
  if(z > 0){
player.cash =  mon + (merc.borracha + merc.borracha * 0.30); // -30%
estoque.borracha--;
alert("Item vendido!");
}
else{
  alert("Item insuficiente");
}
}
window.localStorage.setItem('player', JSON.stringify(player)); //guarda
window.localStorage.setItem('estoque', JSON.stringify(estoque)); //guarda
}

function atualiza(){
  
  news();
  
  var player = JSON.parse(window.localStorage.getItem('player'));
  player.diasrest = player.diasrest -1;
  var x = player.diasrest;

  window.localStorage.setItem('player', JSON.stringify(player));
  document.getElementById("dias").innerHTML =x;
  onbuy();
  if(x == 0){
alert("Game over!");
alert("Score: " + player.cash);
Menu();
  }
  else if(player.cash < -5){
    alert("Game over! SALDO NEGATIVO");
alert("Score: " + player.cash);
Menu();
  }
  
}
function Menu(){
  varWindow = window.open (
  'login.html',
  'pagina');
  }

  function fabricarlap(){
    var player = JSON.parse(window.localStorage.getItem('player'));
    var merc = JSON.parse(window.localStorage.getItem('prec'));
    var estoque = JSON.parse(window.localStorage.getItem('estoque'));
  
    c = player.cash;
    x = estoque.madeira;
    y = estoque.grafite;

    if(c - 3 >=0 && estoque.madeira >0 && estoque.grafite >0){
    player.cash = c - 2;
    estoque.madeira--;
    estoque.grafite--;
    estoque.lapis++;
    }
    else{
      alert("Item ou dinheiro insuficiente");
    }
  
  window.localStorage.setItem('player', JSON.stringify(player)); //guarda
  window.localStorage.setItem('estoque', JSON.stringify(estoque)); //guarda
  }

  function fabricarcolor(){
    var player = JSON.parse(window.localStorage.getItem('player'));
    var estoque = JSON.parse(window.localStorage.getItem('estoque'));
  
    c = player.cash;
    x = estoque.madeira;
    y = estoque.grafcor;

    if(c - 5 >= 0 && x >0 && y>0){
    player.cash = c - 3;
    estoque.madeira--;
    estoque.grafcor--;
    estoque.colorido++;
    }
    else{
      alert("Item ou dinheiro insuficiente");
    }
    window.localStorage.setItem('player', JSON.stringify(player)); //guarda
    window.localStorage.setItem('estoque', JSON.stringify(estoque)); //guarda
    
  }

  function fabricarcom(){
    var player = JSON.parse(window.localStorage.getItem('player'));
    var merc = JSON.parse(window.localStorage.getItem('prec'));
    var estoque = JSON.parse(window.localStorage.getItem('estoque'));
  
    c = player.cash;

    if(c - 7 >=0 && estoque.madeira >0 && estoque.grafite && estoque.borracha > 0){
    player.cash = c - 4;
    estoque.madeira--;
    estoque.grafite--;
    estoque.borracha--;
    estoque.completo++;
    }
    else{
      alert("Item ou dinheiro insuficiente");
    }
  
  window.localStorage.setItem('player', JSON.stringify(player)); //guarda
  window.localStorage.setItem('estoque', JSON.stringify(estoque)); //guarda
  }

  function onbuy(){
  var variable = JSON.parse(window.localStorage.getItem('variable'));
  var prec = JSON.parse(window.localStorage.getItem('prec'));
  var estoque = JSON.parse(window.localStorage.getItem('estoque'));
  var player = JSON.parse(window.localStorage.getItem('player'));
  var x = estoque.lapis; 
  var y = estoque.colorido;
  var z = estoque.completo;
  var tot = variable.prob;

  if(tot>1){
   
    player.cash = player.cash + (x*prec.lapis)+ (y*prec.colorido)+ (z*prec.completo);

    estoque.lapis = 0 ; 
    estoque.colorido = 0; 
    estoque.completo = 0; 
    alert("Alta demanda!");
  }

  else if(tot<0){
    alert("Demanda Inexistente!");
  }

  else{
    player.cash = player.cash + (x*prec.lapis)+ (y*prec.colorido)+ (z*prec.completo);
    estoque.lapis = 0 ; 
    estoque.colorido = 0; 
    estoque.completo = 0; 
  }
window.localStorage.setItem('player', JSON.stringify(player)); //guarda
window.localStorage.setItem('estoque', JSON.stringify(estoque)); //guarda
  }