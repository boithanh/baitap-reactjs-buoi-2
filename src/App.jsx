import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeaderComponent from './components/HeaderComponent'
import BodyComponent from './components/BodyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="__main mx-auto">
        <HeaderComponent />
        <BodyComponent />
      </div>
    </>
  )
}

export default App
