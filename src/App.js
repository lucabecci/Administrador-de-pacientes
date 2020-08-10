import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //Citas en localStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }
  //Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  //UseEffect para realizar ciertas operaciones cuando el state cambia
  useEffect( () =>{
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas, citasIniciales])
  //Funcion que tome las cita actuales y agrege una nueva
  const crearCita = cita =>{
    guardarCitas([...citas, cita]);
  }

  //Funcion que elimina una cita por su  ID
  const eliminarCita = id =>{
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas)
  }

  //Mensaje condicional de administra tus citas
  const titulo = citas.length === 0 ? 'No hay citas': 'Administra tus citas'; 
  return (
    <>
    <h1>Administrador De Pacientes</h1>

    <div className ='container'>
      <div className ='row'>
        <div className = 'one-half column'>
            <Formulario 
              crearCita = {crearCita}
            />
        </div>
        <div className = 'one-half column'>
            <h2>{titulo}</h2>
            { citas.map( cita => (
              <Cita
              key = {cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
              />
            ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
