import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Bienvenido a Licitaciones Colombia</h1>
      <p>Explora convocatorias públicas filtradas por tus criterios.</p>
    </div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
