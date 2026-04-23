import React from 'react'
import Counter from '../components/Counter'
import TodoList from '../components/TodoList'

const App = () => {
  return (
    <div>
      <h1>Using use state hook</h1>
      <hr />
      <Counter/>
      <TodoList/>
    </div>
  )
}

export default App
