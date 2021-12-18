<?php

require_once 'conexion.php';

$salida = "";
$sql = "SELECT * FROM doctors";
$query = $pdo->prepare($sql);
$query->execute();


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
            <td colspan="3" class="text-center">NO HAY DATOS EN ESTA TABLA</td>
        </tr>
      </tbody></table>';
}
echo $salida;