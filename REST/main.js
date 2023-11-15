$(document).ready(function() {
    alert('¡Bienvenido a Lucio Caffe!');
});

$("p").on({
    mouseenter: function(){
      $(this).css("background-color", "blue");
     }, 
    mouseleave: function(){
       $(this).css("background-color", "red");
    }, 
    click: function(){
      $(this).css("background-color", "yellow");
    } 
  });

  $('#botonMostrar').on('click', function() {
    $('#seccionOculta').toggle();
});

$('#botonAgregar').on('click', function() {
    $('<p>Nuevo párrafo</p>').appendTo('#contenedor');
});

$('.misElementos').each(function(index) {
    $(this).text('Elemento ' + index);
});

$('#elementoAnimado').on('click', function() {
    $(this).stop();
});

$('#elementoCambioTamaño').on('click', function() {
    $(this).animate({ width: '+=50px', height: '+=50px' });
});

$('.elementosLista:not(:contains("Texto"))').hide();

$('#botonDesplazar').on('click', function() {
    $('#contenidoDesplazable').animate({ left: '+=100px' }, 'slow');
});

$('#elementoCambioColor').hover(
    function() {
        $(this).css('background-color', '#ff0000');
    },
    function() {
        $(this).css('background-color', '#ffffff');
    }
);