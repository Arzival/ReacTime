const nombre = 'Armando';
const apellido = 'Reyes';

//const nombreCompleto = nombre + ' ' + apellido; <- ya no se usa mucho esto
const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

function getSaludo(){
          return 'Hola mundo';    
}

console.log(`Este es un texto; ${getSaludo()}`);