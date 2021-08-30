import { getheroeByid } from "../src/bases/08-imports";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getheroeByid(2);
//     resolve(heroe);
//     reject(' No esta ese horoe');
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log(heroe);
//   })
//   .catch((err) => console.warn(err));

const getHeroreByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getheroeByid(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject(" No esta ese horoe");
      }
    }, 2000);
  });
};

getHeroreByIdAsync(1)
  .then((heroe) => console.log("heroe", heroe))
  .catch((err) => console.warn(err));
