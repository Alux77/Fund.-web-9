$('ul.tabs').each(function(){

// Identifica la ficha activa y su contenido asociado
  var $active, $content, $links = $(this).find('a');

// Si location.hash coincide cn algún link, usar como pestaña activa, si no,
// usar el 1er vinculo como pestaña activa
  $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
  $active.addClass('active');

  $content = $($active[0].hash);

// Ocultar el contenido restante
  $links.not($active).each(function () {
    $(this.hash).hide();
  });

// Enlazar el controlador de eventos de clic
  $(this).on('click', 'a', function(e){

// Desactva la pestaña anterior
    $active.removeClass('active');
    $content.hide();

// Actualiza las variables con el nvo vínculo y contenido
    $active = $(this);
    $content = $(this.hash);

// Activa la pestaña
    $active.addClass('active');
    $content.show();

// Previene el click automatico del enlace
    e.preventDefault();
  });

  $(".tabs a").on('click', function(e){
    console.log("hola"); //BANDERA que indica si reacciona donde estamos denubicados

    $(this).parent('li').addClass('active').siblings().removeClass('active');

  });
});
