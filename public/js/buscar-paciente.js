let salida = "";
let salidaB = "";
let salidaC = "";
var btn = document.getElementById('btn');
document.addEventListener('DOMContentLoaded',function(){
    
    total_datos();
    
});
btn.addEventListener('click',function(){
    var datoBusqueda = document.querySelector('#busqueda').value;
    
    if(datoBusqueda != ""){
        
        buscar_datos(datoBusqueda);
        
    } else {
        buffer.clear();
        total_datos();  
        
    }
    
}, true)

function buscar_datos(consulta) {
    
    var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

        var ajaxUrl = './api/patients/'+consulta;
        // var data = 'consulta='+consulta;
        request.open('GET',ajaxUrl,true);
        request.setRequestHeader('Content-type','Application/x-www-form-urlencoded');
        // request.send(data);
        request.send();
        request.onreadystatechange = function() {
            if(request.readyState == 4 && request.status == 200 ) {
                
                salidaB += `<table class="table table-bordered text-center">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">DNI</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Dirección</th>
                    <th scope="col">Enfermedad </th>
                    <th scope="col">Responsable</th>
                    <th scope="col">Cama</th>
                    
                  </tr>
                </thead>
                <tbody>`
                let pac = JSON.parse(request.responseText);
                                for(var i = 0; i<pac.length; i++){
                                    
                                    salidaB +=`<tr>
                            <td>`+pac[i].id+`</td>
                            <td>`+pac[i].first_name+`</td>
                            <td>`+pac[i].last_name+`</td>
                            <td>`+pac[i].DNI+`</td>
                            <td>`+pac[i].email+`</td>
                            <td>`+pac[i].direction+`</td>
                            <td>`+pac[i].disease_id+`</td>
                            <td>`+pac[i].family_id+`</td>
                            <td>`+pac[i].bed_id+`</td>
                            
                            </tr>`;

                                }
                                salidaB+=`</tbody></table>`
                                document.querySelector('#datos').innerHTML = salidaB;


                               
                                
                                
                                
            }
            if(JSON.parse(request.responseText) == 0){
                salidaC = `<table class="table table-bordered text-center">
                <thead class="thead-light">
                  <tr>

                  <th scope="col">ID</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">DNI</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Dirección</th>
                  <th scope="col">Enfermedad </th>
                  <th scope="col">Responsable</th>
                  <th scope="col">Cama</th>
                  
                  </tr>
                </thead>
                <tbody>
                <tr>
            <td colspan="9" class="text-center">NO HAY DATOS EN ESTA BUSQUEDA</td>
        </tr>
                </tbody></table>`
                document.querySelector('#datos').innerHTML = salidaC;  
        
            }
            
        }
}

function total_datos() {
    
    var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        var ajaxUrl = './api/patients/';
        request.open('GET',ajaxUrl,true);
        request.send();
        request.onreadystatechange = function() {
            if(request.readyState == 4 && request.status == 200) {
                salida += `<table class="table table-bordered text-center">
    <thead class="thead-light">
      <tr>

                  <th scope="col">ID</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">DNI</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Dirección</th>
                  <th scope="col">Enfermedad </th>
                  <th scope="col">Responsable</th>
                  <th scope="col">Cama</th>
      </tr>
    </thead>
    <tbody>`
    let pac = JSON.parse(request.responseText);
                    for(var i = 0; i<pac.length; i++){
                        
                        salida +=`<tr>
                        <td>`+pac[i].id+`</td>
                            <td>`+pac[i].first_name+`</td>
                            <td>`+pac[i].last_name+`</td>
                            <td>`+pac[i].DNI+`</td>
                            <td>`+pac[i].email+`</td>
                            <td>`+pac[i].direction+`</td>
                            <td>`+pac[i].disease_id+`</td>
                            <td>`+pac[i].family_id+`</td>
                            <td>`+pac[i].bed_id+`</td>
            </tr>`;
                    }
                    salida+=`</tbody></table>`
                    document.querySelector('#datos').innerHTML = salida;
                    
                    
                    
            }
            
        }
        
}
//doc[i].first_name

/*
function eliminar(paciente_id){


                        var myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
                        var urlencoded = new URLSearchParams();
                        urlencoded.append("id", paciente_id);    
                        var requestOptions = {
                            method: 'DELETE',
                            headers: myHeaders,
                            body: urlencoded,
                            redirect: 'follow'
                          };
                        fetch("http://localhost:5000/api/patients/"+paciente_id, requestOptions)
                        .then(response => response.text())
                        .then(result => console.log(result))
                        .catch(error => console.log('error', error));    
}

*/
/*
var btn = document.getElementById('btn-eliminar');
btn.addEventListener('click',function(){
    console.log("eliminar");
    
    
}, true)*/