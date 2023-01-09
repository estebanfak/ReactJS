import React, {useState} from 'react';
import PropTypes from 'prop-types';



function ComponenteB (prop) {

    const [estado, setEstado] = useState(prop);

    const cambiarEstado = () =>{
        setEstado(estado ? false : true)
    }

    return (
        <div>
            <div>
                <h2>Conectado: {estado ? 'Contacto En Línea' : 'Contacto No Disponible'}</h2>
            </div>
            <button onClick={cambiarEstado}>Cambiar estado</button>
        </div>
    );
};




ComponenteB.propTypes = {
    estado: PropTypes.bool,
};


export default ComponenteB;
