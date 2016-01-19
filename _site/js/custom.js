$(document).ready(function() {

  function renderContent() {
    // Para fotos de equipo
    $("div.persona").mouseenter(function(){
      $("div.persona img.mirando").removeClass("mostrar");
      $("div.persona img.mirando"+($(this).index())).addClass("mostrar");
    });
  }

  renderContent();
});
