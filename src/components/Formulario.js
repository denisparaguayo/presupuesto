import React, {useState} from 'react'
import PropTypes from 'prop-types';
import shortid from 'shortid'
import Error from './Error'

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    
    //Cuando Un usuario agrega un gasto

    const agregarGasto = e =>{
        e.preventDefault();

        //Validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }
            guardarError(false);
        //construir el Gasto
        const gasto ={
            nombre,
            cantidad,
            id: shortid.generate()
        }
        
        //Pasar el Gasto al componente Principal

        guardarGasto(gasto);
        guardarCrearGasto(true);

        //Reset al Form
        guardarNombre('');
        guardarCantidad(0);
    }


    return ( 
        <form
                onSubmit={agregarGasto}
        >
            <h2>Agrega Tus Gastos Aquí</h2>
            { error ? <Error mensaje="Ambos Campos son Obligatorios o Presupuesto Incorrecto" /> :null }
            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Colectivo"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 5000"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                
                />
            </div>
            <input 
                    type="submit"
                    className="u-full-width button-primary"
                    value="Agregar Gasto"
            
            />
        </form>
     );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
export default Formulario;