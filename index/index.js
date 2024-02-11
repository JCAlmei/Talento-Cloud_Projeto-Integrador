function Avaliar(estrela) {
    var url = window.location;
    url = url.toString()
    url = url.split("index.html");
    url = url[0];
  
    var s1 = document.getElementById("s1").src;
    var s2 = document.getElementById("s2").src;
    var s3 = document.getElementById("s3").src;
    var s4 = document.getElementById("s4").src;
    var s5 = document.getElementById("s5").src;
    var avaliacao = 0;
  
  if (estrela == 5){ 
    if (s5 == url + "img/star0.png") {
    document.getElementById("s1").src = "/index/img/star1.png";
    document.getElementById("s2").src = "/index/img/star1.png";
    document.getElementById("s3").src = "/index/img/star1.png";
    document.getElementById("s4").src = "/index/img/star1.png";
    document.getElementById("s5").src = "/index/img/star1.png";
    avaliacao = 5;
    } else {
    document.getElementById("s1").src = "/index/img/star1.png";
    document.getElementById("s2").src = "/index/img/star1.png";
    document.getElementById("s3").src = "/index/img/star1.png";
    document.getElementById("s4").src = "/index/img/star1.png";
    document.getElementById("s5").src = "/index/img/star1.png";
    avaliacao = 4;
  }}
    
    //ESTRELA 4
  if (estrela == 4){ 
    if (s4 == url + "/index/img/star0.png") {
    document.getElementById("s1").src = "/index/img/star1.png";
    document.getElementById("s2").src = "/index/img/star1.png";
    document.getElementById("s3").src = "/index/img/star1.png";
    document.getElementById("s4").src = "/index/img/star1.png";
    document.getElementById("s5").src = "/index/img/star0.png";
    avaliacao = 4;
    } else {
    document.getElementById("s1").src = "/index/img/star1.png";
    document.getElementById("s2").src = "/index/img/star1.png";
    document.getElementById("s3").src = "/index/img/star1.png";
    document.getElementById("s4").src = "/index/img/star1.png";
    document.getElementById("s5").src = "/index/img/star0.png";
    avaliacao = 3;
  }}
  
  //ESTRELA 3
  if (estrela == 3){ 
    if (s3 == url + "/index/img/star0.png") {
    document.getElementById("s1").src = "/index/img/star1.png";
    document.getElementById("s2").src = "/index/img/star1.png";
    document.getElementById("s3").src = "/index/img/star1.png";
    document.getElementById("s4").src = "/index/img/star0.png";
    document.getElementById("s5").src = "/index/img/star0.png";
    avaliacao = 3;
    } else {
    document.getElementById("s1").src = "/index/img/star1.png";
    document.getElementById("s2").src = "/index/img/star1.png";
    document.getElementById("s3").src = "/index/img/star1.png";
    document.getElementById("s4").src = "/index/img/star0.png";
    document.getElementById("s5").src = "/index/img/star0.png";
    avaliacao = 2;
  }}
    
  //ESTRELA 2
  if (estrela == 2){ 
    if (s2 == url + "/index/img/star0.png") {
    document.getElementById("s1").src = "/index/img/star1.png";
    document.getElementById("s2").src = "/index/img/star1.png";
    document.getElementById("s3").src = "/index/img/star0.png";
    document.getElementById("s4").src = "/index/img/star0.png";
    document.getElementById("s5").src = "/index/img/star0.png";
    avaliacao = 2;
    } else {
    document.getElementById("s1").src = "/index/img/star1.png";
    document.getElementById("s2").src = "/index/img/star1.png";
    document.getElementById("s3").src = "/index/img/star0.png";
    document.getElementById("s4").src = "/index/img/star0.png";
    document.getElementById("s5").src = "/index/img/star0.png";
    avaliacao = 1;
  }}
    
    //ESTRELA 1
  if (estrela == 1){ 
    if (s1 == url + "/index/img/star0.png") {
    document.getElementById("s1").src = "/index/img/star1.png";
    document.getElementById("s2").src = "/index/img/star0.png";
    document.getElementById("s3").src = "/index/img/star0.png";
    document.getElementById("s4").src = "/index/img/star0.png";
    document.getElementById("s5").src = "/index/img/star0.png";
    avaliacao = 1;
    } else {
    document.getElementById("s1").src = "/index/img/star1.png";
    document.getElementById("s2").src = "/index/img/star0.png";
    document.getElementById("s3").src = "/index/img/star0.png";
    document.getElementById("s4").src = "/index/img/star0.png";
    document.getElementById("s5").src = "/index/img/star0.png";
    avaliacao = 0;
  }}
    
    document.getElementById('rating').innerHTML = avaliacao;
}

function Avaliar2(estrela) {
    var url = window.location;
    url = url.toString()
    url = url.split("index.html");
    url = url[0];
  
    var s2 = document.getElementById("b2").src;
    var s1 = document.getElementById("b1").src;
    var s3 = document.getElementById("b3").src;
    var s4 = document.getElementById("b4").src;
    var s5 = document.getElementById("b5").src;
    var avaliacao = 0;
  
  if (estrela == 5){ 
    if (s5 == url + "img/star0.png") {
    document.getElementById("b1").src = "/index/img/star1.png";
    document.getElementById("b2").src = "/index/img/star1.png";
    document.getElementById("b3").src = "/index/img/star1.png";
    document.getElementById("b4").src = "/index/img/star1.png";
    document.getElementById("b5").src = "/index/img/star1.png";
    avaliacao = 5;
    } else {
    document.getElementById("b1").src = "/index/img/star1.png";
    document.getElementById("b2").src = "/index/img/star1.png";
    document.getElementById("b3").src = "/index/img/star1.png";
    document.getElementById("b4").src = "/index/img/star1.png";
    document.getElementById("b5").src = "/index/img/star1.png";
    avaliacao = 4;
  }}
    
    //ESTRELA 4
  if (estrela == 4){ 
    if (s4 == url + "/index/img/star0.png") {
    document.getElementById("b1").src = "/index/img/star1.png";
    document.getElementById("b2").src = "/index/img/star1.png";
    document.getElementById("b3").src = "/index/img/star1.png";
    document.getElementById("b4").src = "/index/img/star1.png";
    document.getElementById("b5").src = "/index/img/star0.png";
    avaliacao = 4;
    } else {
    document.getElementById("b1").src = "/index/img/star1.png";
    document.getElementById("b2").src = "/index/img/star1.png";
    document.getElementById("b3").src = "/index/img/star1.png";
    document.getElementById("b4").src = "/index/img/star1.png";
    document.getElementById("b5").src = "/index/img/star0.png";
    avaliacao = 3;
  }}
  
  //ESTRELA 3
  if (estrela == 3){ 
    if (s3 == url + "/index/img/star0.png") {
    document.getElementById("b1").src = "/index/img/star1.png";
    document.getElementById("b2").src = "/index/img/star1.png";
    document.getElementById("b3").src = "/index/img/star1.png";
    document.getElementById("b4").src = "/index/img/star0.png";
    document.getElementById("b5").src = "/index/img/star0.png";
    avaliacao = 3;
    } else {
    document.getElementById("b1").src = "/index/img/star1.png";
    document.getElementById("b2").src = "/index/img/star1.png";
    document.getElementById("b3").src = "/index/img/star1.png";
    document.getElementById("b4").src = "/index/img/star0.png";
    document.getElementById("b5").src = "/index/img/star0.png";
    avaliacao = 2;
  }}
    
  //ESTRELA 2
  if (estrela == 2){ 
    if (s2 == url + "/index/img/star0.png") {
    document.getElementById("b1").src = "/index/img/star1.png";
    document.getElementById("b2").src = "/index/img/star1.png";
    document.getElementById("b3").src = "/index/img/star0.png";
    document.getElementById("b4").src = "/index/img/star0.png";
    document.getElementById("b5").src = "/index/img/star0.png";
    avaliacao = 2;
    } else {
    document.getElementById("b1").src = "/index/img/star1.png";
    document.getElementById("b2").src = "/index/img/star1.png";
    document.getElementById("b3").src = "/index/img/star0.png";
    document.getElementById("b4").src = "/index/img/star0.png";
    document.getElementById("b5").src = "/index/img/star0.png";
    avaliacao = 1;
  }}
    
    //ESTRELA 1
  if (estrela == 1){ 
    if (s1 == url + "/index/img/star0.png") {
    document.getElementById("b1").src = "/index/img/star1.png";
    document.getElementById("b2").src = "/index/img/star0.png";
    document.getElementById("b3").src = "/index/img/star0.png";
    document.getElementById("b4").src = "/index/img/star0.png";
    document.getElementById("b5").src = "/index/img/star0.png";
    avaliacao = 1;
    } else {
    document.getElementById("b1").src = "/index/img/star1.png";
    document.getElementById("b2").src = "/index/img/star0.png";
    document.getElementById("b3").src = "/index/img/star0.png";
    document.getElementById("b4").src = "/index/img/star0.png";
    document.getElementById("b5").src = "/index/img/star0.png";
    avaliacao = 0;
  }}
    
    document.getElementById('rating').innerHTML = avaliacao;
}

function Avaliar3(estrela) {
  var url = window.location;
  url = url.toString()
  url = url.split("index.html");
  url = url[0];
 
  var s2 = document.getElementById("c2").src;
  var s1 = document.getElementById("c1").src;
  var s3 = document.getElementById("c3").src;
  var s4 = document.getElementById("c4").src;
  var s5 = document.getElementById("c5").src;
  var avaliacao = 0;
 
 if (estrela == 5){ 
  if (s5 == url + "img/star0.png") {
  document.getElementById("c1").src = "/index/img/star1.png";
  document.getElementById("c2").src = "/index/img/star1.png";
  document.getElementById("c3").src = "/index/img/star1.png";
  document.getElementById("c4").src = "/index/img/star1.png";
  document.getElementById("c5").src = "/index/img/star1.png";
  avaliacao = 5;
  } else {
  document.getElementById("c1").src = "/index/img/star1.png";
  document.getElementById("c2").src = "/index/img/star1.png";
  document.getElementById("c3").src = "/index/img/star1.png";
  document.getElementById("c4").src = "/index/img/star1.png";
  document.getElementById("c5").src = "/index/img/star1.png";
  avaliacao = 4;
 }}
  
  //ESTRELA 4
 if (estrela == 4){ 
  if (s4 == url + "/index/img/star0.png") {
  document.getElementById("c1").src = "/index/img/star1.png";
  document.getElementById("c2").src = "/index/img/star1.png";
  document.getElementById("c3").src = "/index/img/star1.png";
  document.getElementById("c4").src = "/index/img/star1.png";
  document.getElementById("c5").src = "/index/img/star0.png";
  avaliacao = 4;
  } else {
  document.getElementById("c1").src = "/index/img/star1.png";
  document.getElementById("c2").src = "/index/img/star1.png";
  document.getElementById("c3").src = "/index/img/star1.png";
  document.getElementById("c4").src = "/index/img/star1.png";
  document.getElementById("c5").src = "/index/img/star0.png";
  avaliacao = 3;
 }}
 
 //ESTRELA 3
 if (estrela == 3){ 
  if (s3 == url + "/index/img/star0.png") {
  document.getElementById("b1").src = "/index/img/star1.png";
  document.getElementById("b2").src = "/index/img/star1.png";
  document.getElementById("b3").src = "/index/img/star1.png";
  document.getElementById("b4").src = "/index/img/star0.png";
  document.getElementById("b5").src = "/index/img/star0.png";
  avaliacao = 3;
  } else {
  document.getElementById("c1").src = "/index/img/star1.png";
  document.getElementById("c2").src = "/index/img/star1.png";
  document.getElementById("c3").src = "/index/img/star1.png";
  document.getElementById("c4").src = "/index/img/star0.png";
  document.getElementById("c5").src = "/index/img/star0.png";
  avaliacao = 2;
 }}
  
 //ESTRELA 2
 if (estrela == 2){ 
  if (s2 == url + "/index/img/star0.png") {
  document.getElementById("c1").src = "/index/img/star1.png";
  document.getElementById("c2").src = "/index/img/star1.png";
  document.getElementById("c3").src = "/index/img/star0.png";
  document.getElementById("c4").src = "/index/img/star0.png";
  document.getElementById("c5").src = "/index/img/star0.png";
  avaliacao = 2;
  } else {
  document.getElementById("c1").src = "/index/img/star1.png";
  document.getElementById("c2").src = "/index/img/star1.png";
  document.getElementById("c3").src = "/index/img/star0.png";
  document.getElementById("c4").src = "/index/img/star0.png";
  document.getElementById("c5").src = "/index/img/star0.png";
  avaliacao = 1;
 }}
  
  //ESTRELA 1
 if (estrela == 1){ 
  if (s1 == url + "/index/img/star0.png") {
  document.getElementById("c1").src = "/index/img/star1.png";
  document.getElementById("c2").src = "/index/img/star0.png";
  document.getElementById("c3").src = "/index/img/star0.png";
  document.getElementById("c4").src = "/index/img/star0.png";
  document.getElementById("c5").src = "/index/img/star0.png";
  avaliacao = 1;
  } else {
  document.getElementById("c1").src = "/index/img/star1.png";
  document.getElementById("c2").src = "/index/img/star0.png";
  document.getElementById("c3").src = "/index/img/star0.png";
  document.getElementById("c4").src = "/index/img/star0.png";
  document.getElementById("c5").src = "/index/img/star0.png";
  avaliacao = 0;
 }}
  
  document.getElementById('rating').innerHTML = avaliacao;
  
}

function Avaliar4(estrela) {
  var url = window.location;
  url = url.toString()
  url = url.split("index.html");
  url = url[0];
 
  var s2 = document.getElementById("d2").src;
  var s1 = document.getElementById("d1").src;
  var s3 = document.getElementById("d3").src;
  var s4 = document.getElementById("d4").src;
  var s5 = document.getElementById("d5").src;
  var avaliacao = 0;
 
 if (estrela == 5){ 
  if (s5 == url + "img/star0.png") {
  document.getElementById("d1").src = "/index/img/star1.png";
  document.getElementById("d2").src = "/index/img/star1.png";
  document.getElementById("d3").src = "/index/img/star1.png";
  document.getElementById("d4").src = "/index/img/star1.png";
  document.getElementById("d5").src = "/index/img/star1.png";
  avaliacao = 5;
  } else {
  document.getElementById("d1").src = "/index/img/star1.png";
  document.getElementById("d2").src = "/index/img/star1.png";
  document.getElementById("d3").src = "/index/img/star1.png";
  document.getElementById("d4").src = "/index/img/star1.png";
  document.getElementById("d5").src = "/index/img/star1.png";
  avaliacao = 4;
 }}
  
  //ESTRELA 4
 if (estrela == 4){ 
  if (s4 == url + "/index/img/star0.png") {
  document.getElementById("d1").src = "/index/img/star1.png";
  document.getElementById("d2").src = "/index/img/star1.png";
  document.getElementById("d3").src = "/index/img/star1.png";
  document.getElementById("d4").src = "/index/img/star1.png";
  document.getElementById("d5").src = "/index/img/star0.png";
  avaliacao = 4;
  } else {
  document.getElementById("d1").src = "/index/img/star1.png";
  document.getElementById("d2").src = "/index/img/star1.png";
  document.getElementById("d3").src = "/index/img/star1.png";
  document.getElementById("d4").src = "/index/img/star1.png";
  document.getElementById("d5").src = "/index/img/star0.png";
  avaliacao = 3;
 }}
 
 //ESTRELA 3
 if (estrela == 3){ 
  if (s3 == url + "/index/img/star0.png") {
  document.getElementById("d1").src = "/index/img/star1.png";
  document.getElementById("d2").src = "/index/img/star1.png";
  document.getElementById("d3").src = "/index/img/star1.png";
  document.getElementById("d4").src = "/index/img/star0.png";
  document.getElementById("d5").src = "/index/img/star0.png";
  avaliacao = 3;
  } else {
  document.getElementById("d1").src = "/index/img/star1.png";
  document.getElementById("d2").src = "/index/img/star1.png";
  document.getElementById("d3").src = "/index/img/star1.png";
  document.getElementById("d4").src = "/index/img/star0.png";
  document.getElementById("d5").src = "/index/img/star0.png";
  avaliacao = 2;
 }}
  
 //ESTRELA 2
 if (estrela == 2){ 
  if (s2 == url + "/index/img/star0.png") {
  document.getElementById("d1").src = "/index/img/star1.png";
  document.getElementById("d2").src = "/index/img/star1.png";
  document.getElementById("d3").src = "/index/img/star0.png";
  document.getElementById("d4").src = "/index/img/star0.png";
  document.getElementById("d5").src = "/index/img/star0.png";
  avaliacao = 2;
  } else {
  document.getElementById("d1").src = "/index/img/star1.png";
  document.getElementById("d2").src = "/index/img/star1.png";
  document.getElementById("d3").src = "/index/img/star0.png";
  document.getElementById("d4").src = "/index/img/star0.png";
  document.getElementById("d5").src = "/index/img/star0.png";
  avaliacao = 1;
 }}
  
  //ESTRELA 1
 if (estrela == 1){ 
  if (s1 == url + "/index/img/star0.png") {
  document.getElementById("d1").src = "/index/img/star1.png";
  document.getElementById("d2").src = "/index/img/star0.png";
  document.getElementById("d3").src = "/index/img/star0.png";
  document.getElementById("d4").src = "/index/img/star0.png";
  document.getElementById("d5").src = "/index/img/star0.png";
  avaliacao = 1;
  } else {
  document.getElementById("d1").src = "/index/img/star1.png";
  document.getElementById("d2").src = "/index/img/star0.png";
  document.getElementById("d3").src = "/index/img/star0.png";
  document.getElementById("d4").src = "/index/img/star0.png";
  document.getElementById("d5").src = "/index/img/star0.png";
  avaliacao = 0;
 }}
  
  document.getElementById('rating').innerHTML = avaliacao;
  
}

function Avaliar5(estrela) {
  var url = window.location;
  url = url.toString()
  url = url.split("index.html");
  url = url[0];
 
  var s2 = document.getElementById("e2").src;
  var s1 = document.getElementById("e1").src;
  var s3 = document.getElementById("e3").src;
  var s4 = document.getElementById("e4").src;
  var s5 = document.getElementById("e5").src;
  var avaliacao = 0;
 
 if (estrela == 5){ 
  if (s5 == url + "img/star0.png") {
  document.getElementById("e1").src = "/index/img/star1.png";
  document.getElementById("e2").src = "/index/img/star1.png";
  document.getElementById("e3").src = "/index/img/star1.png";
  document.getElementById("e4").src = "/index/img/star1.png";
  document.getElementById("e5").src = "/index/img/star1.png";
  avaliacao = 5;
  } else {
  document.getElementById("e1").src = "/index/img/star1.png";
  document.getElementById("e2").src = "/index/img/star1.png";
  document.getElementById("e3").src = "/index/img/star1.png";
  document.getElementById("e4").src = "/index/img/star1.png";
  document.getElementById("e5").src = "/index/img/star1.png";
  avaliacao = 4;
 }}
  
  //ESTRELA 4
 if (estrela == 4){ 
  if (s4 == url + "/index/img/star0.png") {
  document.getElementById("e1").src = "/index/img/star1.png";
  document.getElementById("e2").src = "/index/img/star1.png";
  document.getElementById("e3").src = "/index/img/star1.png";
  document.getElementById("e4").src = "/index/img/star1.png";
  document.getElementById("e5").src = "/index/img/star0.png";
  avaliacao = 4;
  } else {
  document.getElementById("e1").src = "/index/img/star1.png";
  document.getElementById("e2").src = "/index/img/star1.png";
  document.getElementById("e3").src = "/index/img/star1.png";
  document.getElementById("e4").src = "/index/img/star1.png";
  document.getElementById("e5").src = "/index/img/star0.png";
  avaliacao = 3;
 }}
 
 //ESTRELA 3
 if (estrela == 3){ 
  if (s3 == url + "/index/img/star0.png") {
  document.getElementById("e1").src = "/index/img/star1.png";
  document.getElementById("e2").src = "/index/img/star1.png";
  document.getElementById("e3").src = "/index/img/star1.png";
  document.getElementById("e4").src = "/index/img/star0.png";
  document.getElementById("e5").src = "/index/img/star0.png";
  avaliacao = 3;
  } else {
  document.getElementById("e1").src = "/index/img/star1.png";
  document.getElementById("e2").src = "/index/img/star1.png";
  document.getElementById("e3").src = "/index/img/star1.png";
  document.getElementById("e4").src = "/index/img/star0.png";
  document.getElementById("e5").src = "/index/img/star0.png";
  avaliacao = 2;
 }}
  
 //ESTRELA 2
 if (estrela == 2){ 
  if (s2 == url + "/index/img/star0.png") {
  document.getElementById("e1").src = "/index/img/star1.png";
  document.getElementById("e2").src = "/index/img/star1.png";
  document.getElementById("e3").src = "/index/img/star0.png";
  document.getElementById("e4").src = "/index/img/star0.png";
  document.getElementById("e5").src = "/index/img/star0.png";
  avaliacao = 2;
  } else {
  document.getElementById("e1").src = "/index/img/star1.png";
  document.getElementById("e2").src = "/index/img/star1.png";
  document.getElementById("e3").src = "/index/img/star0.png";
  document.getElementById("e4").src = "/index/img/star0.png";
  document.getElementById("e5").src = "/index/img/star0.png";
  avaliacao = 1;
 }}
  
  //ESTRELA 1
 if (estrela == 1){ 
  if (s1 == url + "/index/img/star0.png") {
  document.getElementById("e1").src = "/index/img/star1.png";
  document.getElementById("e2").src = "/index/img/star0.png";
  document.getElementById("e3").src = "/index/img/star0.png";
  document.getElementById("e4").src = "/index/img/star0.png";
  document.getElementById("e5").src = "/index/img/star0.png";
  avaliacao = 1;
  } else {
  document.getElementById("e1").src = "/index/img/star1.png";
  document.getElementById("e2").src = "/index/img/star0.png";
  document.getElementById("e3").src = "/index/img/star0.png";
  document.getElementById("e4").src = "/index/img/star0.png";
  document.getElementById("e5").src = "/index/img/star0.png";
  avaliacao = 0;
 }}
  
  document.getElementById('rating').innerHTML = avaliacao;
  
}

function Avaliar6(estrela) {
  var url = window.location;
  url = url.toString()
  url = url.split("index.html");
  url = url[0];
 
  var s2 = document.getElementById("f2").src;
  var s1 = document.getElementById("f1").src;
  var s3 = document.getElementById("f3").src;
  var s4 = document.getElementById("f4").src;
  var s5 = document.getElementById("f5").src;
  var avaliacao = 0;
 
 if (estrela == 5){ 
  if (s5 == url + "img/star0.png") {
  document.getElementById("f1").src = "/index/img/star1.png";
  document.getElementById("f2").src = "/index/img/star1.png";
  document.getElementById("f3").src = "/index/img/star1.png";
  document.getElementById("f4").src = "/index/img/star1.png";
  document.getElementById("f5").src = "/index/img/star1.png";
  avaliacao = 5;
  } else {
  document.getElementById("f1").src = "/index/img/star1.png";
  document.getElementById("f2").src = "/index/img/star1.png";
  document.getElementById("f3").src = "/index/img/star1.png";
  document.getElementById("f4").src = "/index/img/star1.png";
  document.getElementById("f5").src = "/index/img/star1.png";
  avaliacao = 4;
 }}
  
  //ESTRELA 4
 if (estrela == 4){ 
  if (s4 == url + "/index/img/star0.png") {
  document.getElementById("f1").src = "/index/img/star1.png";
  document.getElementById("f2").src = "/index/img/star1.png";
  document.getElementById("f3").src = "/index/img/star1.png";
  document.getElementById("f4").src = "/index/img/star1.png";
  document.getElementById("f5").src = "/index/img/star0.png";
  avaliacao = 4;
  } else {
  document.getElementById("f1").src = "/index/img/star1.png";
  document.getElementById("f2").src = "/index/img/star1.png";
  document.getElementById("f3").src = "/index/img/star1.png";
  document.getElementById("f4").src = "/index/img/star1.png";
  document.getElementById("f5").src = "/index/img/star0.png";
  avaliacao = 3;
 }}
 
 //ESTRELA 3
 if (estrela == 3){ 
  if (s3 == url + "/index/img/star0.png") {
  document.getElementById("f1").src = "/index/img/star1.png";
  document.getElementById("f2").src = "/index/img/star1.png";
  document.getElementById("f3").src = "/index/img/star1.png";
  document.getElementById("f4").src = "/index/img/star0.png";
  document.getElementById("f5").src = "/index/img/star0.png";
  avaliacao = 3;
  } else {
  document.getElementById("f1").src = "/index/img/star1.png";
  document.getElementById("f2").src = "/index/img/star1.png";
  document.getElementById("f3").src = "/index/img/star1.png";
  document.getElementById("f4").src = "/index/img/star0.png";
  document.getElementById("f5").src = "/index/img/star0.png";
  avaliacao = 2;
 }}
  
 //ESTRELA 2
 if (estrela == 2){ 
  if (s2 == url + "/index/img/star0.png") {
  document.getElementById("f1").src = "/index/img/star1.png";
  document.getElementById("f2").src = "/index/img/star1.png";
  document.getElementById("f3").src = "/index/img/star0.png";
  document.getElementById("f4").src = "/index/img/star0.png";
  document.getElementById("f5").src = "/index/img/star0.png";
  avaliacao = 2;
  } else {
  document.getElementById("f1").src = "/index/img/star1.png";
  document.getElementById("f2").src = "/index/img/star1.png";
  document.getElementById("f3").src = "/index/img/star0.png";
  document.getElementById("f4").src = "/index/img/star0.png";
  document.getElementById("f5").src = "/index/img/star0.png";
  avaliacao = 1;
 }}
  
  //ESTRELA 1
 if (estrela == 1){ 
  if (s1 == url + "/index/img/star0.png") {
  document.getElementById("f1").src = "/index/img/star1.png";
  document.getElementById("f2").src = "/index/img/star0.png";
  document.getElementById("f3").src = "/index/img/star0.png";
  document.getElementById("f4").src = "/index/img/star0.png";
  document.getElementById("f5").src = "/index/img/star0.png";
  avaliacao = 1;
  } else {
  document.getElementById("f1").src = "/index/img/star1.png";
  document.getElementById("f2").src = "/index/img/star0.png";
  document.getElementById("f3").src = "/index/img/star0.png";
  document.getElementById("f4").src = "/index/img/star0.png";
  document.getElementById("f5").src = "/index/img/star0.png";
  avaliacao = 0;
 }}
  
  document.getElementById('rating').innerHTML = avaliacao;
  
}

function Avaliar7(estrela) {
  var url = window.location;
  url = url.toString()
  url = url.split("index.html");
  url = url[0];
 
  var s2 = document.getElementById("g2").src;
  var s1 = document.getElementById("g1").src;
  var s3 = document.getElementById("g3").src;
  var s4 = document.getElementById("g4").src;
  var s5 = document.getElementById("g5").src;
  var avaliacao = 0;
 
 if (estrela == 5){ 
  if (s5 == url + "img/star0.png") {
  document.getElementById("g1").src = "/index/img/star1.png";
  document.getElementById("g2").src = "/index/img/star1.png";
  document.getElementById("g3").src = "/index/img/star1.png";
  document.getElementById("g4").src = "/index/img/star1.png";
  document.getElementById("g5").src = "/index/img/star1.png";
  avaliacao = 5;
  } else {
  document.getElementById("g1").src = "/index/img/star1.png";
  document.getElementById("g2").src = "/index/img/star1.png";
  document.getElementById("g3").src = "/index/img/star1.png";
  document.getElementById("g4").src = "/index/img/star1.png";
  document.getElementById("g5").src = "/index/img/star1.png";
  avaliacao = 4;
 }}
  
  //ESTRELA 4
 if (estrela == 4){ 
  if (s4 == url + "/index/img/star0.png") {
  document.getElementById("g1").src = "/index/img/star1.png";
  document.getElementById("g2").src = "/index/img/star1.png";
  document.getElementById("g3").src = "/index/img/star1.png";
  document.getElementById("g4").src = "/index/img/star1.png";
  document.getElementById("g5").src = "/index/img/star0.png";
  avaliacao = 4;
  } else {
  document.getElementById("g1").src = "/index/img/star1.png";
  document.getElementById("g2").src = "/index/img/star1.png";
  document.getElementById("g3").src = "/index/img/star1.png";
  document.getElementById("g4").src = "/index/img/star1.png";
  document.getElementById("g5").src = "/index/img/star0.png";
  avaliacao = 3;
 }}
 
 //ESTRELA 3
 if (estrela == 3){ 
  if (s3 == url + "/index/img/star0.png") {
  document.getElementById("g1").src = "/index/img/star1.png";
  document.getElementById("g2").src = "/index/img/star1.png";
  document.getElementById("g3").src = "/index/img/star1.png";
  document.getElementById("g4").src = "/index/img/star0.png";
  document.getElementById("g5").src = "/index/img/star0.png";
  avaliacao = 3;
  } else {
  document.getElementById("g1").src = "/index/img/star1.png";
  document.getElementById("g2").src = "/index/img/star1.png";
  document.getElementById("g3").src = "/index/img/star1.png";
  document.getElementById("g4").src = "/index/img/star0.png";
  document.getElementById("g5").src = "/index/img/star0.png";
  avaliacao = 2;
 }}
  
 //ESTRELA 2
 if (estrela == 2){ 
  if (s2 == url + "/index/img/star0.png") {
  document.getElementById("g1").src = "/index/img/star1.png";
  document.getElementById("g2").src = "/index/img/star1.png";
  document.getElementById("g3").src = "/index/img/star0.png";
  document.getElementById("g4").src = "/index/img/star0.png";
  document.getElementById("g5").src = "/index/img/star0.png";
  avaliacao = 2;
  } else {
  document.getElementById("g1").src = "/index/img/star1.png";
  document.getElementById("g2").src = "/index/img/star1.png";
  document.getElementById("g3").src = "/index/img/star0.png";
  document.getElementById("g4").src = "/index/img/star0.png";
  document.getElementById("g5").src = "/index/img/star0.png";
  avaliacao = 1;
 }}
  
  //ESTRELA 1
 if (estrela == 1){ 
  if (s1 == url + "/index/img/star0.png") {
  document.getElementById("g1").src = "/index/img/star1.png";
  document.getElementById("g2").src = "/index/img/star0.png";
  document.getElementById("g3").src = "/index/img/star0.png";
  document.getElementById("g4").src = "/index/img/star0.png";
  document.getElementById("g5").src = "/index/img/star0.png";
  avaliacao = 1;
  } else {
  document.getElementById("g1").src = "/index/img/star1.png";
  document.getElementById("g2").src = "/index/img/star0.png";
  document.getElementById("g3").src = "/index/img/star0.png";
  document.getElementById("g4").src = "/index/img/star0.png";
  document.getElementById("g5").src = "/index/img/star0.png";
  avaliacao = 0;
 }}
  
  document.getElementById('rating').innerHTML = avaliacao;
  
}

function Avaliar8(estrela) {
  var url = window.location;
  url = url.toString()
  url = url.split("index.html");
  url = url[0];
 
  var s2 = document.getElementById("h2").src;
  var s1 = document.getElementById("h1").src;
  var s3 = document.getElementById("h3").src;
  var s4 = document.getElementById("h4").src;
  var s5 = document.getElementById("h5").src;
  var avaliacao = 0;
 
 if (estrela == 5){ 
  if (s5 == url + "img/star0.png") {
  document.getElementById("h1").src = "/index/img/star1.png";
  document.getElementById("h2").src = "/index/img/star1.png";
  document.getElementById("h3").src = "/index/img/star1.png";
  document.getElementById("h4").src = "/index/img/star1.png";
  document.getElementById("h5").src = "/index/img/star1.png";
  avaliacao = 5;
  } else {
  document.getElementById("h1").src = "/index/img/star1.png";
  document.getElementById("h2").src = "/index/img/star1.png";
  document.getElementById("h3").src = "/index/img/star1.png";
  document.getElementById("h4").src = "/index/img/star1.png";
  document.getElementById("h5").src = "/index/img/star1.png";
  avaliacao = 4;
 }}
  
  //ESTRELA 4
 if (estrela == 4){ 
  if (s4 == url + "/index/img/star0.png") {
  document.getElementById("h1").src = "/index/img/star1.png";
  document.getElementById("h2").src = "/index/img/star1.png";
  document.getElementById("h3").src = "/index/img/star1.png";
  document.getElementById("h4").src = "/index/img/star1.png";
  document.getElementById("h5").src = "/index/img/star0.png";
  avaliacao = 4;
  } else {
  document.getElementById("h1").src = "/index/img/star1.png";
  document.getElementById("h2").src = "/index/img/star1.png";
  document.getElementById("h3").src = "/index/img/star1.png";
  document.getElementById("h4").src = "/index/img/star1.png";
  document.getElementById("h5").src = "/index/img/star0.png";
  avaliacao = 3;
 }}
 
 //ESTRELA 3
 if (estrela == 3){ 
  if (s3 == url + "/index/img/star0.png") {
  document.getElementById("h1").src = "/index/img/star1.png";
  document.getElementById("h2").src = "/index/img/star1.png";
  document.getElementById("h3").src = "/index/img/star1.png";
  document.getElementById("h4").src = "/index/img/star0.png";
  document.getElementById("h5").src = "/index/img/star0.png";
  avaliacao = 3;
  } else {
  document.getElementById("h1").src = "/index/img/star1.png";
  document.getElementById("h2").src = "/index/img/star1.png";
  document.getElementById("h3").src = "/index/img/star1.png";
  document.getElementById("h4").src = "/index/img/star0.png";
  document.getElementById("h5").src = "/index/img/star0.png";
  avaliacao = 2;
 }}
  
 //ESTRELA 2
 if (estrela == 2){ 
  if (s2 == url + "/index/img/star0.png") {
  document.getElementById("h1").src = "/index/img/star1.png";
  document.getElementById("h2").src = "/index/img/star1.png";
  document.getElementById("h3").src = "/index/img/star0.png";
  document.getElementById("h4").src = "/index/img/star0.png";
  document.getElementById("h5").src = "/index/img/star0.png";
  avaliacao = 2;
  } else {
  document.getElementById("h1").src = "/index/img/star1.png";
  document.getElementById("h2").src = "/index/img/star1.png";
  document.getElementById("h3").src = "/index/img/star0.png";
  document.getElementById("h4").src = "/index/img/star0.png";
  document.getElementById("h5").src = "/index/img/star0.png";
  avaliacao = 1;
 }}
  
  //ESTRELA 1
 if (estrela == 1){ 
  if (s1 == url + "/index/img/star0.png") {
  document.getElementById("h1").src = "/index/img/star1.png";
  document.getElementById("h2").src = "/index/img/star0.png";
  document.getElementById("h3").src = "/index/img/star0.png";
  document.getElementById("h4").src = "/index/img/star0.png";
  document.getElementById("h5").src = "/index/img/star0.png";
  avaliacao = 1;
  } else {
  document.getElementById("h1").src = "/index/img/star1.png";
  document.getElementById("h2").src = "/index/img/star0.png";
  document.getElementById("h3").src = "/index/img/star0.png";
  document.getElementById("h4").src = "/index/img/star0.png";
  document.getElementById("h5").src = "/index/img/star0.png";
  avaliacao = 0;
 }}
  
  document.getElementById('rating').innerHTML = avaliacao;
  
}


 console.log("O arquivo JavaScript foi carregado!");