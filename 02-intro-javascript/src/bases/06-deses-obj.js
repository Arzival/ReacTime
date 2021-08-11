const persona = {
          nombre: 'Armando',
          edad: 25,
          clave: 'Arzival',
}

const {nombre, edad, clave} = persona; // extre lo que esta entre las llaves de mi objeto persona, en caso de tener una variable igual la puedo renombrar poniendo :variable const {nombre:nombe2} = persona;

console.log(nombre)

const retornapErsona = (persona) => {
          //console.table(persona);
          return{
                    nombreClave: clave,
                    anios: edad,
                    latlng: {
                              lat: 14.2312,
                              lng: -13.3123,
                    }
          }
}
const {nombreClave, anios,latlng:{lat,lng}} = retornapErsona(persona);
//extrer parametros de un objeto que esta dentro de otro objeto

const avenger = retornapErsona(persona);

console.log(nombreClave,anios);