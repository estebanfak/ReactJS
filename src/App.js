import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/pure/componenteA';
import { Contacto } from './models/contacto.class';

function App() {

  const defaultContact = new Contacto('Esteban', 'Casile', 'esteban@gmail.com', false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteA contacto={defaultContact}></ComponenteA>
      </header>
    </div>
  );
}

export default App;
