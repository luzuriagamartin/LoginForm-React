
import { useState } from 'react'
import './app.css'
import FormInput from './componentes/FormInput'

const App = () => {
  //Se declara un objeto -> valores -> 
  const [values, setValues] = useState({
    usuario:'',
    email: '',
    fechaNacimiento:'',
    password:'',
    confirmarPassword: '',
  })

  const inputs = [
    {
      id: 1,
      name: 'usuario',
      type: 'text',
      placeholder: '',
      mensajeError: 'El nombre de usuario deber tener entre 3-16 caracteres y no debe incluior caracteres especiales',
      label: 'Usuario',
      //Regex code para realizar las validaciones -> pattern
      pattern:'^[A-Za-z0-9]{3,16}$', 
      required: true
      
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: '',
      mensajeError: 'El correo electronico debe ser valido',
      label: 'Correo electronico',
      pattern:'', 
      required: true
      
    },
    {
      id: 3,
      name: 'fechaNacimiento',
      type: 'date', //cambio de interface.
      placeholder: '',
      label: 'Fecha de nacimiento'
      
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: '',
      mensajeError: 'La contraseña debe tener entre 8-20 caracteres y debe incluir al menos 1 letra, 1 numero y 1 caracter especial',
      label: 'Contraseña',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
      
    },
    {
      id: 5,
      name: 'confirmarPassword',
      type: 'password',
      placeholder: '',
      mensajeError: 'Las contraseñas no coinciden',
      label: 'Confirmar contraseña',
      pattern: values.password,
      required: true
       
    },
  ];

//Boton Submit 
const handleSubmit = (e)=>{
  e.preventDefault();
  //Permite visualizar en consola los datos ingresados en el form
  /* const data = new FormData(e.target)
  console.log(Object.fromEntries(data.entries())) */
}

//cambiar valores
const onChange = (e) => {
  setValues({...values, [e.target.name]: e.target.value})
}

  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <h1>Registrarse</h1>
        {inputs.map((input) => (
          <FormInput 
            key={input.id} 
            {...input} 
            value={values[input.name]} 
            onChange={onChange}
          />
        ))}
        <button>Aceptar</button>
      </form>    
    </div>
  )
}

export default App




