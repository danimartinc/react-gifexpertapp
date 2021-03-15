import React, { useState }  from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //Nos creamos un nuevo estado. Cuando se carga por primera vez el array esta vacio
    //const [images, setImages] = useState([]);

    //Uso el CustomHook. Desectructuramos
    const { data: images,loading } = useFetchGifs( category );

    return (
        <>
        <h3>{ category }</h3>

        { loading && <p className="animate__animated animate__fadeIn">Loading</p> }
        <div className="card-grid animate__animated animate__flash">
           {
                    //Desctruturamos el objeto img
                    images.map( img =>(
                        <GifGridItem
                           key={ img.id }
                           //Envio como argumento un nuevo objeto. Envio cada una de las propiedades de las imagenes como una propiedad independitne
                           { ...img } 
                        />
                    ))
            }
                   
        </div>
      </>
    )
}
