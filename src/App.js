
import React, { useState, useEffect } from 'react';
import Pregunta  from './components/Pregunta'
import Formulario  from './components/Formulario'
import Listado  from './components/Listado'
import ControlPresupuesto  from './components/ControlPresupuesto'

function App() {

  //Definir el State
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ mostrarpregunta, actualizarPregunta ] = useState(true);
  const [ gastos, guardarGastos ] = useState([]);
  const [ gasto, guardarGasto] = useState({});
  const [ creargasto, guardarCrearGasto] = useState(false);

  //UseEffect que Actualiza en Restante

  useEffect( ()=>{
    if(creargasto){

      //Agrega en Nuevo Presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ]);

      //Resta del Presupuesto Actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      //Reset a False
      guardarCrearGasto(false);
    }
  }, [gasto, creargasto, gastos, restante] )


 

  return (
    <div className="container">
      <header>
      <h1>Gato Semanal</h1>
      <div className="contenido-principal contenido">

        {mostrarpregunta ?  
          (<Pregunta
            guardarPresupuesto = {guardarPresupuesto}
            guardarRestante = {guardarRestante}
            actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
                <div className="one-half column">
                  <Formulario 
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado 
                    gastos={gastos}                  
                  />
                  <ControlPresupuesto 
                    presupuesto={presupuesto}
                    restante={restante}
                  
                  />
                </div>
            </div>
          ) 
        }
       
      

      </div>
      </header>
    </div>
  );
}

export default App;