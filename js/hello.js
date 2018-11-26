
function showModalPromo(valor) {
  event.preventDefault();
  var busqueda = valor;
    $.ajax({
        url: globalVariable.url_json+ '/promos/'+busqueda
    }).then(function(data) {

      if (data.length > 0 && data != "[]") {
        $(data).each(function () {
            $('#promoModalLabel').append(this.nombre);
            $('#promoModalBody').append(this.descripcion);
            $('#promoModal').modal('show');
        });
      }else{
          $('#loSentimosModal').modal('show');
      }
    });
};

var listadoBares ;
var contador;
   $(function obtenerBares(genero) {
     console.log("Llega genero!"+genero);
     if ("geolocation" in navigator){ //check geolocation available
       //try to get user current location using getCurrentPosition() method
       navigator.geolocation.getCurrentPosition(function(position){
         var latitud = position.coords.latitude;
         var longitud = position.coords.longitude;
             //alert("Found your location Lat : "+position.coords.latitude+" Lang :"+ position.coords.longitude);
               });
             }else{
                 console.log("Browser doesn't support geolocation!");
             }
           $.ajax({
               url: globalVariable.url_json+ '/establecimiento',
               dataType: "json",
               success: function (data) {

             			 if (data.length > 0 && data != "[]") {
                     listadoBares =data;
                     var result = "";
                      contador = 1;
                     $(data).each(function () {

                           result = result + " <br><div class='col-sm-4'>";
                           result = result + " <div class='card' href='#portfolio-modal-1'>";
                           result = result + "<img class='card-img-top'  width='210' height='150' src='"+this.urlFoto+"'>";
                           result = result + " <div class='card-body'>";
                           result = result + " <h5 class='card-title'>"+this.nombre+"</h5>";
                           if(this.direccion != "null"){
                              result = result + " <p class='card-text'>"+this.direccion+"</p>";
                           }
                           result = result + " <p class='card-text'>"+this.dias+"</p>";
                           result = result + " <p class='card-text'>"+this.horaApertura+" - "+this.horaCierre+"</p>";
                           result = result + " <button type='button' class='btn btn-primary' id='botoncito"+contador+"' onclick='showModalPromo(\""+this._id+"\")'>Ver Promo</button>";
                           result = result + "</div></div></div><br>";
                           contador ++;
                     });
                     console.log('resultado'+ result);
                     $('.bares').append(result);
                     $('#contador').val(contador);
                   }
               }
           })
});

$("select").change(function(evento){
  var genero = $( this ).val();
  var arregloGeneros =[];
  var result = "";
  contador = 1;
  console.log('genero'+ genero);
  if(genero == "Rock"){
    $(listadoBares).each(function () {
        if(this.generoRock == true){
          arregloGeneros.push( this);
          console.log('resultado'+ this.nombre);
        }
    });
  }
  if(genero == "Salsa"){
    $(listadoBares).each(function () {
        if(this.generoSalsa == true){
          arregloGeneros.push( this);
          console.log('resultado'+ this.nombre);
        }
    });
  }
  if(genero == "Vallenato"){
    $(listadoBares).each(function () {
        if(this.generoVallenato == true){
          arregloGeneros.push( this);
          console.log('resultado'+ this.nombre);
        }
    });
  }
  if(genero == "Popular"){
    $(listadoBares).each(function () {
        if(this.generoPopular == true){
          arregloGeneros.push( this);
          console.log('resultado'+ this.nombre);
        }
    });
  }
  if(genero == "Crossover"){
    $(listadoBares).each(function () {
        if(this.generoCrossover == true){
          arregloGeneros.push( this);
          console.log('resultado'+ this.nombre);
        }
    });
  }
  $(arregloGeneros).each(function () {

        result = result + " <br><div class='col-sm-4'>";
        result = result + " <div class='card' href='#portfolio-modal-1'>";
        result = result + "<img class='card-img-top'  width='210' height='150' src='"+this.urlFoto+"'>";
        result = result + " <div class='card-body'>";
        result = result + " <h5 class='card-title'>"+this.nombre+"</h5>";
        if(this.direccion != "null"){
           result = result + " <p class='card-text'>"+this.direccion+"</p>";
        }
        result = result + " <p class='card-text'>"+this.dias+"</p>";
        result = result + " <p class='card-text'>"+this.horaApertura+" - "+this.horaCierre+"</p>";
        result = result + " <button type='button' class='btn btn-primary' onclick='showModalPromo(\""+this._id+"\")'>Ver Promo</button>";
        result = result + "</div></div></div><br>";
        contador ++;
  });
  $( ".bares" ).empty();
  console.log('resultado'+ result);
  $('.bares').append(result);
});


$(function() {
    $("#nombreForm input").jqBootstrapValidation({
      preventSubmit: true,
      submitError: function($form, event, errors) {
        // additional error messages or events
      },
      submitSuccess: function($form, event) {
        contador = 1;
          var name = $("input#nombreBar").val();
        //var nombre = req.body.nombreBar;
        event.preventDefault();
        $.ajax({
            url: globalVariable.url_json+ '/establecimiento/nombre/'+name
        }).then(function(data) {

          if (data.length > 0 && data != "[]") {
              var result = "";
              $(data).each(function () {
                result = result + " <br><div class='col-sm-4'>";
                result = result + " <div class='card' href='#portfolio-modal-1'>";
                result = result + "<img class='card-img-top'  width='210' height='150' src='"+this.urlFoto+"'>";
                result = result + " <div class='card-body'>";
                result = result + " <h5 class='card-title'>"+this.nombre+"</h5>";
                if(this.direccion != "null"){
                   result = result + " <p class='card-text'>"+this.direccion+"</p>";
                }
                result = result + " <p class='card-text'>"+this.dias+"</p>";
                result = result + " <p class='card-text'>"+this.horaApertura+" - "+this.horaCierre+"</p>";
                result = result + " <button type='button' class='btn btn-primary' onclick='showModalPromo(\""+this._id+"\")'>Ver Promo</button>";
                result = result + "</div></div></div><br>";
                contador ++;
              });
              $( ".bares" ).empty();
              console.log('resultado'+ result);
              $('.bares').append(result);
          }
        });
      },
  });
});
