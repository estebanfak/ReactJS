import React, {useState} from 'react';
import { Contacto } from '../models/contacto.class';
import ContactComponent from '../components/pure/contactComponent'
import ContactForm from '../components/pure/forms/contactForm';

const ContactList = () => {

    const defaultContact1 = new Contacto('Esteban', 'Casile', 'esteban@gmail.com', false);
    const defaultContact2 = new Contacto('Roberto', 'Lopez', 'roberto@gmail.com', false);
    const defaultContact3 = new Contacto('Marcos', 'Castro', 'marcos@gmail.com', false);
    const defaultContact4 = new Contacto('Josefina', 'Eilish', 'josefina@gmail.com', false);
    const defaultContact5 = new Contacto('Lionel', 'Messi', 'lionel@gmail.com', false);

    const [contactos, setContactos] = useState([defaultContact1, defaultContact2, defaultContact3, defaultContact4, defaultContact5]);

    function cambiarConectado(contacto) {
        const index = contactos.indexOf(contacto);
        const tempList = [...contactos];
        tempList[index].conectado = !tempList[index].conectado;
        setContactos(tempList);
    }

    function removeContact(contacto) {
        const index = contactos.indexOf(contacto);
        const tempList = [...contactos];
        tempList.splice(index, 1);
        setContactos(tempList);
    }

    function agregarContacto(newContact) {
        const tempList = [...contactos];
        tempList.push(newContact);
        setContactos(tempList);
    }

    return (
        <div>
        <div className="col-12">
          <div className="card">
            {/* Card Header (titulo) */}
            <div className="card-header p-3">
              <h5>Tus contactos:</h5>
            </div>
            <div
              className="card-body"
              data-mdb-perfect-scrollbar="true"
              style={{ position: "relative", height: "400px" }}
            >
              <table>
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Conectado</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                
                  {contactos.map((contacto, index) => {
                    return (
                      <ContactComponent
                        key={index}
                        contacto={contacto}
                        conectado={cambiarConectado}
                        deleteContact={removeContact}
                      ></ContactComponent>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <ContactForm agregar={agregarContacto}></ContactForm>
      </div>
    );
}

export default ContactList;
