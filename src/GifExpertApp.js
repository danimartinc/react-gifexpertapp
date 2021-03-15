import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    //Usamos el hook de useState
    const [categories, setCategories] = useState(['One Punch']);

    //Funcion que añade un elemento al array, con setCategories
    /*const handleAdd = () => {
       //Añadimos un elemento al array
       //NO ES BUENA PRACTICA HACERLO ASI, NO DEBEMOS USAR EL PUSH
       //categories.push('HunterXHunter');
       //console.log( categories );
       //Para cambiar las propiedades, y indicar a react que el estado cambió
       //Con el setCategories le cambiamos el estado anterior y creamos un nuevo estado

       //PRIMERA SOLUCION
       //setCategories( 'HunterXHunter', [...categories]);
       //SEGUNDA SOLUCION
       //Tiene un callback, en el cual el primer argumento es el valor del estado anterior y devuelve el nuevo estado
       setCategories( catgs => [...catgs, 'HunterXHunter'] );
    }*/

     
   //Podemos enviar funciones desde un componente padre a un componente hijo
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            <ol>
             {
                categories.map( category => (
                    <GifGrid
                        key= {category}
                        category={ category } 
                    />
                ))
             }
            </ol>
            
        </>
    )
}
