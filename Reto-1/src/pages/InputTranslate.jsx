import { useState } from "react";
import { translate } from "../helpers/translate";
import { useForm } from "../hooks/useForm"

export const InputTranslator = () => {

    const q = ''
    const [ translation, setTranslations ] = useState('') 

    const showSearch = (translation.length === 0);
    const showFind = (translation.length > 0);

    const { message, onInputChange } = useForm({
        message: q
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();

        if (message.trim().length <= 1) return;

        setTranslations(translate(message))

    }

    return (
        <>
            <hr />

            <div className="row">
                <div className="col-12">
                    <h4>Translate Message</h4>
                    <hr />

                    <form onSubmit={ onSearchSubmit }>
                        <input 
                            type="text" 
                            placeholder="Hide Message" 
                            className="form-control" 
                            name="message" 
                            autoComplete="off"
                            value={ message }
                            onChange={ onInputChange }
                        />

                        <button className="btn btn-outline-primary mt-2">
                            Translate
                        </button>
                    </form>

                </div>

                <div className="col-12 mt-3">
                    <hr />

                    <div className="alert alert-primary animate__animated animate__fadeIn" style={{display : showSearch ? '' : 'none'}}>
                        Let's hide a message
                    </div>

                    <h5>{translation}</h5>
                    <hr />

                    <div className="alert alert-success animate__animated animate__fadeIn" style={{display : showFind ? '' : 'none'}}>
                        This is your secret message
                    </div>
                    
                </div>
            </div>
        </>
    )
}