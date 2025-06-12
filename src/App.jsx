import { useState } from 'react'
import "./components/style.css"
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
    </>
  )
}

export default App
