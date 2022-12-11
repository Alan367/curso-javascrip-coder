//preentrega 1
//funcion de acceso a usuario 
function entradaVIP() {
  
  do {
    usuario = prompt("Ingrese su nombre de usuario : ");
    if (usuario === "usuario1") {
      clave = prompt("Ingrese la clave para tener acceso a los descuentos");
    if (clave === "perro"){
      alert("tiene acceso!")
    }else{
      alert("clave incorrecta")
    }} else { alert("usuario incorrecto")
  }
    } while(usuario!=="usuario1" ||  clave!=="perro" )
  
  console.log("su usuario es:", usuario,"su clave es: ",clave)
}

//entradaVIP();

//funcion de descuentos para socios registrados y no registrados
function descuento() {
  let total = parseInt(prompt("Ingrese el monto total de su compra"));
  let esSocio = prompt(
    "Esta registrado en el sitio? ingrese el numero 1 en caso de estarlo o 2 en caso de no estarlo"
  );

  if (esSocio == "1") {
    if (total >= 200) {
      total = total - 10;
    }
    if (total >= 400) {
      total = total * 0.9;
    }
    if (total >= 1100) {
      total = total - 150;
    }
  } else {
    if (total >= 1100) {
      total = total - 10;
    }
    alert("usted tiene un descuento de $10 exclusivo para nuestros clientes no registrados!!")
  }
  console.log("su precio final es de:  $", total);
}
//descuento();

//preentrega 2


let articulos=[
 buzo1={
  nombre:"buzo",
  precio:900,
  color:"verde",
  id:1,},
 camisa={id:2,
    nombre:"camisa",
    precio:500,
    color:"celeste",
  },
 campera1={id:3,
    nombre:"campera-algodon",
    precio:1200,
    color:"gris",
  },
  campera2={
    id:4,
    nombre:"campera-inflable",
    precio:800,
    color:"rojo", 
  },
  chomba={
    id:5,
    nombre:"chomba-polo",
    precio:550,
    color:"gris", 
  },
  buzo2={
    id:6,
    nombre:"buzo-capucha",
    precio:900,
    color:"celeste", 
  },
  remera={
    id:7,
    nombre:"remera",
    precio:450,
    color:"celeste", 
  },
  zapatillas1={
    id:8,
    nombre:"zapatillas-cuerina",
    precio:1500,
    color:"negra", 
  },
  zapatillas2={
    id:9,
    nombre:"zapatillas-deportivas",
    precio:1450,
    color:"negra", 
  }
]
let valoringresado= prompt("INGRESE EL NUMERO DE ARTICULO PARA MAS DETALLES");

switch(valoringresado){
  case "1":
  console.log(buzo1);
  break;
  case "2":
  console.log(camisa);
  break;
  case "3":
  console.log(campera1);
  break;
  case "4":
  console.log(campera2);
  break;
  case "5":
  console.log(chomba);
  break;
  case "6":
  console.log(buzo2);
  break;
  case "7":
  console.log(remera);
  break;
  case "8":
  console.log(zapatillas1);
  break;
  case "9":
  console.log(zapatillas2);
  break;
}





