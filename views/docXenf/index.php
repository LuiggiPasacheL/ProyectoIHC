<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Doctores por enfermedad</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>
  <style>
    @import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;
      font-family: 'Josefin Sans', sans-serif;
    }

    body {
      background-color: #f3f5f9;
    }

    .wrapper {
      display: flex;
      position: relative;
    }

    .wrapper .sidebar {
      width: 320px;
      height: 100%;
      background: #7b7c80;
      padding: 30px 0px;
      position: fixed;
    }

    .wrapper .sidebar h2 {
      color: #fff;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 30px;
    }

    .wrapper .sidebar li {
      padding: 33.5px;
      border-bottom: 1px solid #bdb8d7;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .wrapper .sidebar li a {
      color: #fff;
      display: block;
    }

    .wrapper .sidebar li a .fas {
      width: 25px;
    }

    .wrapper .sidebar li:hover {
      background-color: #575758;
    }

    .wrapper .sidebar li:hover a {
      color: #fff;
    }

    .wrapper .sidebar .social_media {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
    }

    .wrapper .sidebar .social_media a {
      display: block;
      width: 40px;
      background: #575758;
      height: 40px;
      line-height: 45px;
      text-align: center;
      margin: 0 5px;
      color: #fff;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    .wrapper .main_content {
      width: 100%;
      margin-left: 300px;
    }

    .wrapper .main_content .header {
      padding: 20px;
      background: #fff;
      color: #717171;
      border-bottom: 1px solid #e0e4e8;
    }

    .wrapper .main_content .info {
      margin: 30px;
      color: #717171;
      line-height: 25px;
    }

    .wrapper .main_content .info div {
      margin-bottom: 20px;
    }

    .card {
      margin: 20px;
      text-align: center;
      overflow: hidden;
    }

    @media (max-height: 500px) {
      .social_media {
        display: none !important;
      }
    }
  </style>
</head>

<body>
  <div class="wrapper">
  <div class="sidebar">
    <h2>Menú</h2>
     <li><a href="/inicio" style="text-decoration: none;">Inicio</a></li>
     <li><a href="/inicio" style="text-decoration: none;">Doctores por enfermedad</a></li>
     <li><a href="/inicio" style="text-decoration: none;">Enfermedades por atender</a></li>
     <li><a href="/inicio" style="text-decoration: none;">Camas libres</a></li>
     <li><a href="/inicio" style="text-decoration: none;">Ingresar pacientes</a></li>
     <li><a href="/inicio" style="text-decoration: none;">Sobre Nosotros</a></li>
     <li><a href="/" style="text-decoration: none;">Salir</a></li>
    </div>
      <div class="main_content">
      <div class="header" style="padding: 10px;
                text-align: center; 
                font-style: normal;
                font-weight: normal;
                font-size: 38px;
                line-height: 45px;
                color: #000000;
                left: 37.5%;">Doctor por enfermedad<img src="./img/hospital-logo.png"
          style="width: 70px; margin-bottom: 10px; margin-left: 700px;">
        </div>
        <div class="info">
          <div class="container mt-5 bg-white shadow border">
            <div class="row mt-3">
                <div class="col-md-12 my-3">
                    <form class="form-inline justify-content-end">
                        <label class="mr-3" for="">Buscar:</label><input class="form-control mr-sm-2" type="search" id="busqueda" name="busqueda" aria-label="Search">
                      </form>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div id="datos">
    
                    </div>
                </div>
            </div>
        </div>
        <script src="js/buscar.js"></script>

        </div>
      </div>
    </div>
</body>

</html>