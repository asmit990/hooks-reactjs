import { useState } from 'react'

import './App.css'
function countInitial() {
  console.log('run function')
  return 4
}

function App() {
  const [state, setState] = useState(() => countInitial())
    function minusCount(){
      setState( prevState => {
        return{...prevState, count: prevState.count -1}
      }
      )
    }
    function addCount(){
      setState (prevState => {
        return{ ...prevState, count: prevState.count -1}})
      
    }
  return (
    <>
    <button onClick={minusCount}>_</button>
    <span>{count}</span>
    <button onClick={addCount}>+</button>
    </>
  )
}

export default App
