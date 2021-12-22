<?php

require_once 'conexion.php';

$salida = "";

if(!empty($_POST['consulta'])) {
    $consulta = filter_var($_POST['consulta']) ;
    $sql = "SELECT * FROM diseases WHERE id LIKE '%".$consulta."%' OR name LIKE '%".$consulta."%'";
    $query = $pdo->prepare($sql);
    $query->execute();
}

if($resultado = $query->rowCount() > 0) {
    $salida .= '<table class="table table-bordered text-center">
    <thead class="thead-light">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Enfermedad</th>
      </tr>
    </thead>
    <tbody>';

    while($fila = $query->fetch(PDO::FETCH_ASSOC)) {
        $salida.="<tr>
                <td>".$fila['id']."</td>
                <td>".$fila['name']."</td>
            </tr>";
    }

    $salida.="</tbody></table>";

} else {
    $salida .= '<table class="table table-bordered text-center">
    <thead class="thead-light">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td colspan="3" class="text-center">NO HAY DATOS EN ESTA BUSQUEDA</td>
        </tr>
    </tbody></table>';
}
echo $salida;