import { useState } from 'react'

//Creando este componente podemos reutilizar cuantas veces sea necesario el Form y con diferentes valores
export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );

    //Pasamos target porque es lo que cambia en el event onChange, si ponemos event encontramos todo y event.target lo que esta sufriendo cambio
    const onInputChange = ({ target }) => {
        const {name, value} = target;

        //Esto nos permite cambiar los valores del formulario, se despliega el formstate y aca las llaves son una funcion de javascript que almacena la variable y cambia el valor
        setFormState({
            ...formState, [ name ]: value
        })

    }

    const onResetForm = () => {
        setFormState( initialForm )
    }

    return {
        //Si agregamos esto podemos devolver los valores sin necesidad de desetructurarlo con un const 
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}