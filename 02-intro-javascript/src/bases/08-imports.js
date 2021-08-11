import { heroes } from "../data/heroes"

console.table(heroes);

const getheroeByid = (id) => {
          return heroes.find(heroe => heroe.id === id);
}

console.log(getheroeByid(2));

const getheroeByOwner = (owner) => {
          return heroes.filter(heroe => heroe.owner === owner);
}

console.log(getheroeByOwner('DC'));