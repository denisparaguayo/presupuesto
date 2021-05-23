import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';
import Error from './Error'
const Pregunta = ({guardarRestante, guardarPresupuesto, actualizarPregunta}) => {

    //definir el state 

    const  [ cantidad, guardarCantidad ] = useState(0);
    const [error, guardarError] = useState(false);

    //Funcion que lee el Presupuesto
    const definirPresupuesto = e =>{
        guardarCantidad(parseInt(e.target.value, 10));
    }

    //submit para definir Presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault();
        //Validar
        if(cantidad < 1 || isNaN(cantidad) ){
            guardarError(true);
            return;
        }
        //que se hace si pasa la Validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }


    return (  
        <Fragment>

            <h2>Coloca tu Presupuesto</h2>
            { error ? <Error mensaje="El Presupuesto es Incorrecto" /> :null }
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu Presupuesto"
                    onChange={definirPresupuesto}
                />
                <input 
                    type="submit"
                    className="u-full-width button-primary"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}


Pregunta.propTypes = {
    guardarRestante: PropTypes.func.isRequired,
    guardarPresupuesto: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}
export default Pregunta;