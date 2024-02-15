// Verifica se a consulta de mídia é atendida
// if (window.matchMedia("(max-width: 600px)").matches) {
//     // Se a consulta de mídia for atendida, adiciona os links ao dropdown
//     document.getElementById("dropdown-content2").innerHTML = `
//       <a href="cadastro3.html">Cadastro</a>
//       <a href="/login2.html">Login</a>
//     `;
//   }

  $(window).resize(function() {
    if ($(window).width() <= 600) {
      // Move os links para o dropdown
      $("#btn-1-2").appendTo("#dropdown-content2");
    } else {
      // Move os links de volta para fora do dropdown
      $("btn-1-2").appendTo("header");
    }
  }).resize();
