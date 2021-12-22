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
            if(request.readyState == 4 && request.status == 200) {
                   document.querySelector('#datos').innerHTML = request.responseText;
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
                   document.querySelector('#datos').innerHTML = request.responseText;
            }
        }
}