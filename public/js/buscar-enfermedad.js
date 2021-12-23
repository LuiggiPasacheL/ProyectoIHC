let salida = "";
let salidaB = "";
document.addEventListener('DOMContentLoaded',function(){

    total_datos();
   
});
document.addEventListener('keyup',function(){
    var datoBusqueda = document.querySelector('#busqueda').value;
    if(datoBusqueda != ""){
        buscar_datos(datoBusqueda);     
    } else {
        buffer.clear();
        total_datos();  
    }
})

function buscar_datos(consulta) {
    
    var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        var ajaxUrl = './api/diseases/'+consulta;
        request.open('GET',ajaxUrl,true);
        request.setRequestHeader('Content-type','Application/x-www-form-urlencoded');
        request.send();
        request.onreadystatechange = function() {
            if(request.readyState == 4 && request.status == 200) {
                
                
                salidaB += `<table class="table table-bordered text-center">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Enfermedad</th>
                  </tr>
                </thead>
                <tbody>`
                let enf = JSON.parse(request.responseText);
                                for(var i = 0; i<enf.length; i++){
                                    
                                    salidaB +=`<tr>
                            <td>`+enf[i].id+`</td>
                            <td>`+enf[i].name+`</td>
                        </tr>`;
                        
                                }
                                salidaB+=`</tbody></table>`
                                document.querySelector('#datos').innerHTML = salidaB;
            }
        }
}

function total_datos() {
    
    var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        var ajaxUrl = './api/diseases/';
        request.open('GET',ajaxUrl,true);
        request.send();
        request.onreadystatechange = function() {
            if(request.readyState == 4 && request.status == 200) {
                
                
                salida += `<table class="table table-bordered text-center">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Enfermedad</th>
                  </tr>
                </thead>
                <tbody>`
                let enf = JSON.parse(request.responseText);
                                for(var i = 0; i<enf.length; i++){
                                    
                                    salida +=`<tr>
                            <td>`+enf[i].id+`</td>
                            <td>`+enf[i].name+`</td>
                        </tr>`;
                                }
                                salida+=`</tbody></table>`
                                document.querySelector('#datos').innerHTML = salida;
                                
                                
                                
            }
        }
}