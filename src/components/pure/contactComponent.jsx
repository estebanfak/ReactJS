import React from "react";

const ContactComponent = ({contacto, conectado, deleteContact}) => {



  function toggleConection() {
    if (contacto.conectado) {
      return <i onClick={()=>conectado(contacto)} className="bi-toggle-on task-action" style={{ color: "green" }}></i>;
    } else {
      return <i onClick={()=>conectado(contacto)} className="bi-toggle-off task-action" style={{ color: "grey" }}></i>;
    }
  }
  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{contacto.nombre}</span>
      </th>
      <td className="align-middle">
        <span>{contacto.apellido}</span>
      </td>
      <td className="align-middle">
        <span>{contacto.email}</span>
      </td>
      <td className="align-middle">
        <span>{contacto.conectado ? 'Conectado' : 'No conectado'}</span>
      </td>
      <td>
        {toggleConection()}
        <i onClick={()=> deleteContact(contacto)} className="bi-trash task-action" style={{ color: "tomato" }}></i>
      </td>
    </tr>
  );
};

export default ContactComponent;
