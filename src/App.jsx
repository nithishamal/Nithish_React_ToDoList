import { useState } from 'react'
import "./App.css"
import Header from './components/Header'
import ToDoItem from './components/ToDoItem'
import ToDoList from './components/ToDoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ToDoItem />
      <ToDoList />
    </>
  )
}

export default App
