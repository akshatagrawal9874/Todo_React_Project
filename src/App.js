import React from 'react';
import todos from "./Todosdata"
import TodoList from "./TodoList"

class App extends React.Component {
  constructor()
  {
    super()
    this.state={
      todos:todos
    }
    this.handleChange=this.handleChange.bind(this)
  }
   
   handleChange(id) {
    this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        })
        console.log(prevState.todos)
        console.log(updatedTodos)
        return {
            todos: updatedTodos
        }
    })
}
  render(){
   const todoscomponents= this.state.todos.map( task =><TodoList key={task.id} items={task} handleChange={this.handleChange}/>)
  return (
    <center>
    <div className="container">
    <h1>To do List</h1>
    {todoscomponents}
    </div>
    </center>
  );}
}

export default App;
