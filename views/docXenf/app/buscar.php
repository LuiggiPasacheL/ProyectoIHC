<?php

require_once 'conexion.php';

$salida = "";

if(!empty($_POST['consulta'])) {
    $consulta = filter_var($_POST['consulta']) ;
    $sql = "SELECT * FROM doctors WHERE id LIKE '%".$consulta."%' OR first_name LIKE '%".$consulta."%' OR last_name LIKE '%".$consulta."%'";
    $query = $pdo->prepare($sql);
    $query->execute();
}

if($resultado = $query->rowCount() > 0) {
    $salida .= '<table class="table table-bordered text-center">
    <thead class="thead-light">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
      </tr>
    </thead>
    <tbody>';

    while($fila = $query->fetch(PDO::FETCH_ASSOC)) {
        $salida.="<tr>
                <td>".$fila['id']."</td>
                <td>".$fila['first_name']."</td>
                <td>".$fila['last_name']."</td>
            </tr>";
    }

    $salida.="</tbody></table>";

} else {
    $salida .= '<table class="table table-bordered text-center">
    <thead class="thead-light">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td colspan="3" class="text-center">NO HAY DATOS EN ESTA BUSQUEDA</td>
        </tr>
    </tbody></table>';
}
echo $salida;