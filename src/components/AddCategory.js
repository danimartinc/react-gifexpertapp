import React, { useEffect, useState } from "react";
//Recibimos las props, desestructurando los argumentos
import PropTypes from 'prop-types';



export const AddCategory = ({ setCategories }) => {

    //Estado, necesito saber lo que el usuario esta escribiendo
    const [ inputValue, setInputValue] = useState(''); 

    //Metodo que extrae el valor del input
    const handleInputChange = ( event ) => {
       //Tenemos el inputValue actualizado con lo ultimo que el usuario ha escrito
        setInputValue( event.target.value );
    }
    //Metodo que 
    const handleSubmit = (event) => {
        //Para prevenir el comportamiento por defecto del formulario
        event.preventDefault();
       //Validacion: 
        if( inputValue.trim().length > 2){
        //console.log('Sumbit hecho');
        //Llamamos a la props de setCategories de AddCategory
        //No tengo acceso a las categorias directamente porque no lo estoy pasando como argumento
        setCategories( catgs => [ inputValue, ...catgs] );
        //Borrar el valor para que no se pueda hacer un doble posteo
        setInputValue('');

        }
    }
    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value= { inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

//Implementar un propTypes para setCategorias, donde setCategorias sea una funcion requerida para este componente
//Obligamos a enviar esta funcions
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
