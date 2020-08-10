import React, { useState } from 'react'
import uuid from 'uuid/dist/v4'
import PropTypes from 'prop-types'

const Formulario = ({crearCita}) => {

    //Crear State De Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''           
    })

    const [error, actualizarError] = useState(false);
    //Funcion que se ejecuta cada vez que se escribe en un input
    const actualizarState = (e) =>{
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    //Ectraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;
    //Cuando el usuario presiona enviar cita
    const submitCita = e =>{
        e.preventDefault()
        //validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || 
        hora.trim() === '' || sintomas.trim() === ''){
                actualizarError(true)
                return;
            }

        //eliminar el mensaje previo
        actualizarError(false)    
        //asignar un ID
            cita.id = uuid();
        //crear la cita
            crearCita(cita)
        //resetear el form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''  
        })
    }

    return (
        <>   
        <h2>Crear Cita</h2>
        { error ? <p className = 'alerta-error'>TODOS LOS CAMPOS DEBEN DE ESTAR LLENOS</p>  : null}
        <form
            onSubmit = {submitCita}
        >
            <label>Nombre De La Mascota:</label>
            <input
                type = "text"
                name = "mascota"
                className = "u-full-width"
                placeholder = "Nombre De La Mascota "
                onChange = {actualizarState}
                value ={mascota}
            />
            <label>Nombre Del Dueño:</label>
            <input
                type = "text"
                name = "propietario"
                className = "u-full-width"
                placeholder = "Nombre Del Dueño"
                onChange = {actualizarState}
                value ={propietario}
            />
            <label>Fecha:</label>
            <input
                type = "date"
                name = "fecha"
                className = "u-full-width"
                onChange = {actualizarState}
                value ={fecha}
            />
            <label>Hora:</label>
            <input
                type = "time"
                name = "hora"
                className = "u-full-width"
                onChange = {actualizarState}
                value = {hora}
            />
            <label>Sintomas:</label>
            <textarea
                className = 'u-full-width'
                name = 'sintomas'
                onChange = {actualizarState}
                value = {sintomas}
            ></textarea>

            <button
                type = 'submit'
                className = 'u-full-width button-primary'
            >
                Agregar Cita.
            </button>
        </form>
        </>
    )
}
//PROPTYPES
Formulario.propTypes ={
    crearCita: PropTypes.func.isRequired
}

export default Formulario
