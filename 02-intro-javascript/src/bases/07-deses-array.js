const personajes = ['kokuns','vegueta','donald tronks'];

const [, , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
          return ['adc',1234];
}

const [letras,numeros] = retornaArreglo();

console.log(letras,numeros);

const test1 = (valor) => {
          return[valor,()=>{console.log('hola mundo')}];
}

const [nombre , setNombre] = test1('goku');
console.log(nombre);
setNombre();