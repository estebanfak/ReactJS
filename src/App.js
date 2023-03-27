import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/pure/componenteA';
import { Contacto } from './models/contacto.class';
import Clock2 from './components/pure/ejercicio4-5-6';
import ContactList from './container/contactList';
import Box from './components/pure/box';
import ChuckNorrisJokes from './components/pure/ChuckNorrisJokes';

function App() {

  const defaultContact = new Contacto('Esteban', 'Casile', 'esteban@gmail.com', false);

  return (
    <div className="App">

        {/* Ejercicio 1, 2, 3 */}
        {/* <ComponenteA contacto={defaultContact}></ComponenteA> */}

        {/* Ejercicio 4, 5, 6 */}
        {/* <Clock2></Clock2> */}

        {/* Ejercicio 7, 8, 9 */}
        {/* <ContactList></ContactList> */}

        {/* Ejercicio 10, 11, 12 */}
        {/* <Box></Box> */}

        {/* Ejercicio 19, 20, 21 */}
        <ChuckNorrisJokes/>

    </div>
  );
}

export default App;
