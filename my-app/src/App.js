import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>This dev environment is enable with dev continer.</p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ><button className="App-link">
          Learn React
          </button></a>
      </header>
    </div>
  );
}

export default App;
