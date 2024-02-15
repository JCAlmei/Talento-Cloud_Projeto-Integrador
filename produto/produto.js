// function mudarImagem(id) {
//     const imagem = document.getElementById(id);
//     if (imagem.src.endsWith('livro-mares-sombrias-philippa-gregory-em-epub-pdf-mobi-ou-ler-online_large-1.svg')) {
//       imagem.src = '/produto/img/livro-real.svg';
//     } else {
//       imagem.src = '/produto/img/livro-mares-sombrias-philippa-gregory-em-epub-pdf-mobi-ou-ler-online_large-1.svg';
//     }
//   }

function mudarImagem1(id) {
    const imagemDiv2 = document.getElementById(id);
  
    // Verifica qual imagem está sendo exibida na div1
    if (imagemDiv2.src.endsWith('.svg')) {
      imagemDiv2.src = '/produto/img/livro-mares-sombrias-philippa-gregory-em-epub-pdf-mobi-ou-ler-online_large-1.svg';
    } else {
      imagemDiv2.src = '/produto/img/livro-real.svg';
    }
}

function mudarImagem2(id) {
    const imagemDiv2 = document.getElementById(id);
  
    // Verifica qual imagem está sendo exibida na div1
    if (imagemDiv2.src.endsWith('.svg')) {
      imagemDiv2.src = '/produto/img/contra-capa_tamanho-g.svg';
    } else {
      imagemDiv2.src = '/produto/img/livro-real.svg';
    }
}
  
function mudarImagem3(id) {
    const imagemDiv2 = document.getElementById(id);
  
    // Verifica qual imagem está sendo exibida na div1
    if (imagemDiv2.src.endsWith('.svg')) {
      imagemDiv2.src = '/produto/img/imagem-real_tamanho-grande.svg';
    } else {
      imagemDiv2.src = '/produto/img/livro-real.svg';
    }
}


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
    
    document.getElementById('rating1').innerHTML = avaliacao;
}

  
console.log ("código funcionando")