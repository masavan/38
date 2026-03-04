import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./components/Button.tsx";
import Input from "./components/Input.tsx";

interface User {
    name: string,
    imail: string
}

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<User>({name:'Grek', imail:"Grek12@gmai.com"} as User);
  const [tak , setTak] = useState(true);




  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
        { tak && <h2>Name {user.name} - {user.imail} </h2>}
      <div className="card">
        <Button count={count} setCount={setCount} />
          <br/>
          <Input user={user} setUser={setUser} />
          <br/>
          <button onClick={() => setTak((tak) => !tak)}>
              {tak ? "Hide" : "Show" }
          </button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
