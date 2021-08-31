const getImagen = async () => {
  try {
    // crea una funcion asyncrona y tienen que ir en try y caatch
    const apiKey = "2TCma5a9yfN4diCrYuHQYecNPQJQKfZm";
    const resp = await fetch(
      //espera la respusta del fetch
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json(); //espera a que se haga la conversion de la data
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {}
};

getImagen();
