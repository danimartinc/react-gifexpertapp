//Los helpers, funciones que hacen un trabajo en especifico, que reciben argumentos lo procesan y hacen un return de informacion
//No hace falta que renderizen el useState
  export const getGifs = async( category ) => {

    //Peticion HTTP para traer las iamgenes por una categoria
    //La categoria puede tener espacios, y para solucinarlo aplicamos encodeURI()
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=DcVIrDV8VPLxpv2hqIg6ZLVqhbFCxTnX`;
    const resp = await fetch( url );
    //Desectruturamos porque me interesa la data que viene dentro de la data
    const { data } = await resp.json();

    const gifs = data.map( img =>{
        //Transforma cada uno de los elementos que esta dentro del array data
        //Retorno un objeto con la informacion que me interesa a mi
        return{
            id: img.id,
            title: img.title,
            //Con ?, indicamos que pregunte si tiene las imagenes y si es asi lo utilice
            url: img.images?.downsized_medium.url
        }
    });
   //Como la funcion es async() no devuelve directamnte los gifs si no que retorna una promesa que resuelve la colecion de las imagenes
   return gifs;
}