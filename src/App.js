import React from "react";
import logo from "./LCO-logo-white.png";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
    this.handleClick=this.handleClick.bind(this)
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: ""
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({ list: updatedlist });
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }
  handleClick(id)
  {
    console.log("changed",id);
    this.setState(prevState => {
      const updatedTodos = prevState.list.map(todo => {
          if (todo.id === id) {
              todo.isDone = !todo.isDone
          }
          return todo
      })
      return {
          list: updatedTodos
      }
  })
  }
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#cdcdcd",
      textDecoration: "line-through"
  }
    return (
      <div>
        <img src={logo} width="100" height="100" className="logo" alt="Not Found"/>
        <h1 className="app-title">ToDo App</h1>
        <div className="container">
          Add an Item....
          <br />
          <input
            type="text"
            className="input-text"
            placeholder="Write a Todo"
            required
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)}
          />
          <button
            className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >
            Add Todo
          </button>
          <div className="list">
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    <div style={item.isDone ? completedStyle: null}>
                    <input
                      type="checkbox"
                      name="idDone"
                      checked={item.isDone}
                      onChange={() => this.handleClick(item.id)}  
                    />
                      { item.value}
                    <button
                      className="btn"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      Delete
                    </button></div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
