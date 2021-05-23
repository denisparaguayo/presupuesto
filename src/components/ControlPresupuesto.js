import React, { Fragment } from 'react'
import {revisarPresupuesto} from '../Helpers';
import PropTypes from 'prop-types';


const ControlPresupuesto = ({presupuesto, restante}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: Gs. {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: Gs. {restante}
            </div>

        </Fragment>
     );
}
ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
 
export default ControlPresupuesto;