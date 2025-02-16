import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://containers.dev/" target="_blank">
          <img src="https://ms-vscode-remote.gallerycdn.vsassets.io/extensions/ms-vscode-remote/remote-containers/0.398.0/1738859433725/Microsoft.VisualStudio.Services.Icons.Default" className="logo dev container" alt="Dev container logo" />
        </a>
      </div>
      <h1>Vite + React + Dev Containers</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>
          This project is enabled with dev containers.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the logos to learn more
      </p>
    </>
  )
}

export default App
