/* Se crea el componente form que se utiliza multiples veces -> componetización */
import React, {useState} from 'react'
import './formInput.css'

const FormInput = (props) => {

    const [focused, setFocused] = useState(false);
    const {label, mensajeError, onChange, id, ...inputProps} = props;
    
    const handleFocus = (e) => {
        setFocused(true)
    }

    return (
        
        <div className='formInput'>
            <label >{label}</label>
            <input 
                {...inputProps} 
                onChange={onChange} 
                onBlur={handleFocus}
                focused={focused.toString()}
                onFocus={() => 
                    inputProps.name === 'confirmPassword' && setFocused(true)
                }
            />
            <span>{mensajeError}</span>
        </div>
    )
}

export default FormInput
