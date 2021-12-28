let salida = "";
let salidaB = "";
let salidaC = "";
var btn = document.getElementById('btn');

document.addEventListener('DOMContentLoaded', function () {

    total_datos();

});
btn.addEventListener('click', function () {
    var datoBusqueda = document.querySelector('#busqueda').value;

    if (datoBusqueda != "") {

        buscar_datos(datoBusqueda);

    } else {
        buffer.clear();
        total_datos();

    }

}, true)

function buscar_datos(consulta) {

    var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    var ajaxUrl = './api/doctors/' + consulta;
    // var data = 'consulta='+consulta;
    request.open('GET', ajaxUrl, true);
    request.setRequestHeader('Content-type', 'Application/x-www-form-urlencoded');
    // request.send(data);
    request.send();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {

            salidaB += `<table class="table table-bordered text-center">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Especialidades</th>
                    
                  </tr>
                </thead>
                <tbody>`
            let doc = JSON.parse(request.responseText);
            
            for (var i = 0; i < doc.length; i++) {

                salidaB += `<tr>
                            <td>`+ doc[i].id + `</td>
                            <td>`+ doc[i].first_name + `</td>
                            <td>`+ doc[i].last_name + `</td>
                            <td>`+ doc[i].specialities + `</td>
                            
                        </tr>`;

            }
            salidaB += `</tbody></table>`
            document.querySelector('#datos').innerHTML = salidaB;



        }
        if (JSON.parse(request.responseText) == 0) {
            salidaC = `<table class="table table-bordered text-center">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Especialidades</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
            <td colspan="4" class="text-center">NO HAY DATOS EN ESTA BUSQUEDA</td>
        </tr>
                </tbody></table>`
            document.querySelector('#datos').innerHTML = salidaC;

        }



    }
}

function total_datos() {

    var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    var ajaxUrl = './api/doctors/';
    request.open('GET', ajaxUrl, true);
    request.send();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            salida += `<table class="table table-bordered text-center">
    <thead class="thead-light">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Especialidades</th>
      </tr>
    </thead>
    <tbody>`
            let doc = JSON.parse(request.responseText);
            for (var i = 0; i < doc.length; i++) {

                salida += `<tr>
                <td>`+ doc[i].id + `</td>
                <td>`+ doc[i].first_name + `</td>
                <td>`+ doc[i].last_name + `</td>
                <td>`+ doc[i].specialities + `</td>
            </tr>`;
            }
            salida += `</tbody></table>`
            document.querySelector('#datos').innerHTML = salida;



        }

    }

}