import React from 'react';
import ComponenteB from './componenteB';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


function componenteA ({contacto}) {

    return (
        <div>
            <div>
                <h1>Contacto: </h1>
                <h2>Nombre: {contacto.nombre}</h2>
                <h2>Apellido: {contacto.apellido}</h2>
                <h2>Email: {contacto.email}</h2>

            </div>

            <ComponenteB prop={contacto.conectado}></ComponenteB>

            
        </div>
    );


};


componenteA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
};

export default componenteA;
