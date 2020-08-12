import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import './app.css'
import ItemAddForm from "../item-add-form";


export default class App extends React.Component {

  state ={
    todoData: [
      {label: 'Drink Coffee', important: false, id: 1},
      {label: 'Learn React !', important: true, id: 2},
      {label: 'Have a lunch', important: false, id: 3},
    ]
  }


  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(element => element.id === id)
      const before = todoData.slice(0, idx)
      const after = todoData.slice(idx + 1)

      const newArr = [
        ...before, 
        ...after]
      return {
        todoData: newArr
      }
    })
  }

  addItem = (text) => {

    this.setState(({ todoData }) => {
      const id = Date.now().toString()
      console.log(id);
      const item = {
        label: text,
        important: false,
        id: id,
      }

      const newArrData = [...todoData, item]

      return {
        todoData: newArrData
      }
    })
  }

  render() {

    return(
      <div className='todo-app'>
        <AppHeader />
        <div className='top-panel d-flex'>
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData} 
          onDeleted={this.deleteItem}
          />
        <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    )
  }
}
