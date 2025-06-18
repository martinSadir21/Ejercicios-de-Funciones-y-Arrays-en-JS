// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  return array.length;
}

function incrementarPorUno(array) {
  // Suma 1 a cada número. Ejemplo: goles de cada jugador + 1.
  var nuevoArray = [];
  for (var i = 0; i < array.length; i++) {
    nuevoArray.push(array[i] + 1);
  }
  return nuevoArray;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega jugador al final de la lista.
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega jugador al comienzo de la lista.
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // Une palabras tipo: ['Boca', 'campeón'] -> 'Boca campeón'
  return palabras.join(' ');
}

function arrayContiene(array, elemento) {
  // Verifica si un jugador está convocado.
  return array.includes(elemento);
}

function agregarNumeros(numeros) {
  // Suma goles de todos los partidos.
  var suma = 0;
  for (var i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // Promedio de goles por partido.
  var suma = 0;
  for (var i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i];
  }
  return suma / resultadosTest.length;
}

function numeroMasGrande(numeros) {
  // Mayor cantidad de goles de un jugador.
  var max = numeros[0];
  for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }
  return max;
}

function multiplicarArgumentos() {
  // Multiplica estadísticas: partidos * goles por partido
  if (arguments.length === 0) return 0;
  var producto = 1;
  for (var i = 0; i < arguments.length; i++) {
    producto *= arguments[i];
  }
  return producto;
}

function crearGato(nombre, edad) {
  // En fútbol: crear jugador.
  var gato = {
    nombre: nombre,
    edad: edad,
    meow: function() {
      return "Meow!";
    }
  };
  return gato;
}

function agregarPropiedad(objeto, property) {
  // Agregar nueva estadística al jugador.
  objeto[property] = null;
  return objeto;
}

function invocarMetodo(objeto, metodo) {
  // Ejecuta una táctica guardada.
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // Multiplica estadísticas secretas.
  return objetoMisterioso.numeroMisterioso * 5;
}

function eliminarPropiedad(objeto, propiedad) {
  // Borra estadística vieja.
  delete objeto[propiedad];
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
  // Crear perfil de hincha.
  var usuario = {
    nombre: nombre,
    email: email,
    password: password
  };
  return usuario;
}

function tieneEmail(usuario) {
  // Verifica si el hincha dejó su email.
  return !!usuario.email;
}

function tienePropiedad(objeto, propiedad) {
  // Verifica si el jugador tiene cierta estadística.
  return objeto.hasOwnProperty(propiedad);
}

function verificarPassword(usuario, password) {
  // Verifica clave del hincha.
  return usuario.password === password;
}

function actualizarPassword(usuario, nuevaPassword) {
  // Cambia clave del hincha.
  usuario.password = nuevaPassword;
  return usuario;
}

function agregarAmigo(usuario, nuevoAmigo) {
  // Agrega nuevo hincha amigo.
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}

function pasarUsuarioAPremium(usuarios) {
  // Todos los hinchas pasan a Premium.
  for (var i = 0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true;
  }
  return usuarios;
}

function sumarLikesDeUsuario(usuario) {
  // Suma todos los likes de publicaciones de fútbol.
  var suma = 0;
  for (var i = 0; i < usuario.posts.length; i++) {
    suma += usuario.posts[i].likes;
  }
  return suma;
}

function agregarMetodoCalculoDescuento(producto) {
  // Calcula descuento en camisetas.
  producto.calcularPrecioDescuento = function() {
    return this.precio - (this.precio * this.porcentajeDeDescuento);
  };
  return producto;
}

function invocarCallback(cb) {
  cb();
}

function sumarArray(numeros, cb) {
  var suma = 0;
  for (var i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  cb(suma);
}

function forEach(array, cb) {
  for (var i = 0; i < array.length; i++) {
    cb(array[i]);
  }
}

function map(array, cb) {
  var nuevoArray = [];
  for (var i = 0; i < array.length; i++) {
    nuevoArray.push(cb(array[i]));
  }
  return nuevoArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento,
  invocarCallback,
  sumarArray,
  forEach,
  map,
};
