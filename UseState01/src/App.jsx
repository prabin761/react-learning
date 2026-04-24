import React from 'react'
import Counter from '../components/Counter'
import TodoList from '../components/TodoList'
import Profile from '../components/Profile'
import ShoppingList from '../components/ShoppingList'

const App = () => {
  return (
    <div>
      <h1>Using use state hook</h1>
      <hr />
      <Counter/>
      <TodoList/>
      <Profile />
      <ShoppingList />
    </div>
  )
}

export default App
