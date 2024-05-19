import React from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import { Store } from './app/Store'
import { Provider } from 'react-redux'
import TodoList from './components/TodoList'

function App() {
  
  return (
    <Provider store={Store}>
      <AddTodo />
      <TodoList />
    </Provider>
  )
}

  
  

export default App
