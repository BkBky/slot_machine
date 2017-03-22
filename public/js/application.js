

// $(document).ready(function() {
//   // Este código corre después de que `document` fue cargado(loaded)
//   // completamente.
//   // Esto garantiza que si amarramos(bind) una función a un elemento
//   // de HTML, éste ya exista en la página.
//   $( "form" ).on( "submit", function( event ) {
//     //esta línea evita que se ejecute el envio de información de la 'forma' cuando presionamos 'submit'
//     event.preventDefault();
//     //serialize analiza los valores enviado en el formulario
//     var info = $( this ).serialize();

//     $.post('/rolls', info, function(data){
//       $('#die').html(data);
//     });
//   });

// });

$(document).ready(function(){
//cuando hagamos submit al formulario con id id_del_formulario
//se procesara este script javascript
  $( "form" ).on( "submit", function( event ) {
    //esta línea evita que se ejecute el envio de información de la 'forma' cuando presionamos 'submit'
    event.preventDefault();
    //console.log($(this).attr('action'));
    $.ajax({
      method: "POST",
      url: $(this).attr('action'),//action del formulario, ej:
      //http://localhost/mi_proyecto/mi_controlador/mi_funcion
      //type: $POST,//el método post o get del formulario
      data: $(this).serialize(),//obtenemos todos los datos del formulario
      //},
      success:function(data){
      //hacemos algo cuando finalice todo correctamente
      console.log("hola2");
      $('#die').html(data);
      }
   });

  });

});







