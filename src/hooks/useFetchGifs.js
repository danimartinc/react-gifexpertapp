//Un CustomHook que nos permite que cuando el componente carga, realizar la peticion fetch e indicar cuando estoy cargamdo y cuando termina la carga
//Custom Hooks, forma de extraer logica de algun componente o reutilizar logica o extraerla de tal manera que sea sencillo utilizarla nuevamente

//Importar React solo es necesario si devolvemos RXJS
import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        //El estado inicial es un objeto que tiene un array vacio
        data: [],
        //Cuando tenemos este Hook tenemos el estado cargando por defecto
        loading: true
    });

    //useEffect(), me permite usar un codigo de manera condicional. Puedo utilizarlo en los CustomHooks
    //NO PUEDEN SER ASYNC PORQUE ESPERAN ALGO SINCRONO
     useEffect(() =>{
        //Solo quiero que se ejecute esta funcion cuando el componente es renderizado por primera vez
        //Retorna una promesa
        getGifs( category )
               .then( imgs => {
                    setState({
                        data: imgs,
                        loading: false
                    });
               });
              
    },[//Mandamos una lista de dependencias en forma de array
       //Evaluo tan solo cuando la cateogira cambia
        category     
    ])

    return state; // { data:[], loading: true }


}