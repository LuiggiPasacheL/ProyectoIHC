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
        
        total_datos();  
        
    }
    
})

function buscar_datos(consulta) {
    
    var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

        var ajaxUrl = './api/doctors/'+consulta;
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
                  </tr>
                </thead>
                <tbody>`
                let doc = JSON.parse(request.responseText);
                                for(var i = 0; i<doc.length; i++){
                                    
                                    salidaB +=`<tr>
                            <td>`+doc[i].id+`</td>
                            <td>`+doc[i].first_name+`</td>
                            <td>`+doc[i].last_name+`</td>
                        </tr>`;
                        
                                }
                                salidaB+=`</tbody></table>`
                                document.querySelector('#datos').innerHTML = salidaB;
                                
                                
                                
            }
            
        }
}

function total_datos() {
    
    var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        var ajaxUrl = './api/doctors/';
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
      </tr>
    </thead>
    <tbody>`
    let doc = JSON.parse(request.responseText);
                    for(var i = 0; i<doc.length; i++){
                        
                        salida +=`<tr>
                <td>`+doc[i].id+`</td>
                <td>`+doc[i].first_name+`</td>
                <td>`+doc[i].last_name+`</td>
            </tr>`;
                    }
                    salida+=`</tbody></table>`
                    document.querySelector('#datos').innerHTML = salida;
                    
                    
                    
            }
            
        }
        
}
//doc[i].first_name