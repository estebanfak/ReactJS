import React, { useRef } from "react";
import PropTypes from 'prop-types'
import { Contacto } from "../../../models/contacto.class";

export default function ContactForm({agregar}) {

    const nombreRef = useRef('')
    const apellidoRef = useRef('')
    const emailRef = useRef('')

    function addContact(e) {
      e.preventDefault();
      const newContact = new Contacto(nombreRef.current.value, apellidoRef.current.value, emailRef.current.value, true);
      agregar(newContact);

    }

  return (
    <form onSubmit={addContact} className="d-flex justify-content-center align-items-center mb-4">
        <input ref={nombreRef} id='inputNombre' type='text' className='form-control form-control-lg' required autoFocus placeholder='Nombre'/>
        <label>Nombre</label>
        <input ref={apellidoRef} id='inputApellido' type='text' className='form-control form-control-lg' required placeholder='Apellido'/>
        <label>Apellido</label>
        <input ref={emailRef} id='inputEmail' type='text' className='form-control form-control-lg' required placeholder='Email'/>
        <label>Email</label>
        <button type='submit' className='btn btn-success btn-lg ms-2'>Nuevo contacto</button>

    </form>
  )
}

ContactForm.protoTypes = {
  agregar: PropTypes.func.isRequiered,
}