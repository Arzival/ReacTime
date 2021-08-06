const persona = {
          nombre: 'Tony',
          apellido: 'Stark',
          edad: '45',
          addres: {
                    ciudad: 'NY',
                    zip: '1234512345',
                    lat: '09876',
                    lng: '67890',
          }
};

const persona2 = {...persona}; //crear un clon del objeto
persona2.nombre = 'Armando';

console.log(persona);
console.log(persona2);