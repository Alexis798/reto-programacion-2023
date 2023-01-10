import { useState } from 'react'
import reactLogo from './assets/react.svg'
import githubLogo from './assets/github-mark.png'
import gitlabLogo from './assets/indice.png'
import './App.css'
import { leetChars } from './data/leetChars'
import { translate } from './helpers/translate'
import { InputTranslator } from './pages/InputTranslate'

function App() {

  const hola = translate('Andres Alexis')

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <img src={githubLogo} className="logo react" alt="React logo" />
        <img src={gitlabLogo} className="logo react" alt="React logo" />
      </div>

      <h1>Hacking Language</h1>
      <hr />

      <div className="card">
        <InputTranslator />
      </div>

      <hr />
      <p className="read-the-docs">
        {hola}
      </p>
    </div>
  )
}

export default App
