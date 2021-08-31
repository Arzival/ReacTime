const apiKey = "2TCma5a9yfN4diCrYuHQYecNPQJQKfZm";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

peticion
  .then((resp) => resp.json()) // transformamos la respuesta y despues encadenamos esa respuesta a otra promesa
  .then(({ data }) => { //desestructuracion de la respuesta
    const { url } = data.images.original; //desestrcturacion del json
    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);
