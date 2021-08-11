// Funciones

const saludar = function (nombre) {
  return `hola ${nombre}`;
};

const saludar2 = (nombre) => {
  return `hola ${nombre}`;
};

const saludar3 = (nombre) => `hola ${nombre}`;

console.log(saludar("Goku"));

const getUser = () => ({
  uid: "ASDFA",
  username: "Arzivalito",
});

console.log(getUser());

const getUserActivate = (nombre) => ({
  uid: "ASD123",
  username: nombre,
});

const userActivo = getUserActivate("Armando");
console.log(userActivo);
