$(function() {
    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
      preventSubmit: true,
      submitError: function($form, event, errors) {
        // additional error messages or events
      },
      submitSuccess: function($form, event) {
        event.preventDefault();
        $.ajax({
            url: "http://localhost:3001/establecimiento/"
        }).then(function(data) {

          if (data.length > 0 && data != "[]") {
              var result = "";
              $(data).each(function () {
                    result = result + "<tr>" ;
                    result = result + "<td>" + this.nombre + "</td>";
                    result = result + "<td>" + this.direccion + "</td>";
                    result = result + "<td>" + this.dias + "</td>";
                    result = result + "<td>" + this.horaApertura + "</td>";
                    result = result + "<td>" + this.horaCierre + "</td>";
                    result = result + "</tr>" ;
              });
               $('header').attr('hidden');
              console.log('resultado'+ result);
              $('.dataTable tbody').append(result);
              /*var fila = $("#dataTable tbody");
                        fila.append(result);*/
               $('header').attr('hidden');
          }
        });
      },
  });
});



$(function obtenerBares() {
        event.preventDefault();
        $.ajax({
            url: "http://localhost:3001/establecimiento/"
        }).then(function(data) {

          if (data.length > 0 && data != "[]") {
              var result = "";
              var contador = 1;
              $(data).each(function () {

                      //$('.card-title').append(this.nombre);
                      //$('.card-text').append(this.direccion);<div class="col-sm-6">
                    result = result + " <br><div class='col-sm-4'>";
                    result = result + " <div class='card' href='#portfolio-modal-1'>";
                    result = result + " <div class='card-body'>";
                    result = result + " <i class='fas fa-beer'></i> ";
                    result = result + " <h5 class='card-title'>"+this.nombre+"</h5>";
                    result = result + " <p class='card-text'>"+this.direccion+"</p>";
                    result = result + " <p class='card-text'>"+this.dias+"</p>";
                    result = result + " <p class='card-text'>"+this.horaApertura+" - "+this.horaCierre+"</p>";
                    //result = result + " <button type='button' class='btn btn-primary' id='botoncito' onclick='showModalPromo(\""+this._id+"\")'>Ver Promo</button>";
                    result = result + " <button type='button' class='btn btn-primary' id='botoncito"+contador+"' value="+this._id+">Ver Promo</button>";
                    result = result + "</div></div></div><br>";
                    contador ++;
              });
              console.log('resultado'+ result);
              $('.bares').append(result);
              $('#contador').val(contador);
              $("button").click(function(evento){
                  var contador = jQuery('#contador').val();
                 var nombre = $( this ).val();
                 if ( nombre != ""){
                   showModalPromo(nombre);
                 }
              });
          }
        });
});
