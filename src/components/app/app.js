import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import './app.css'
import ItemAddForm from "../item-add-form";


export default class App extends React.Component {

  maxId = 100

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Create React App !!!'),
      this.createTodoItem('Have a lunch')
    ],
    term: '',
    filter: 'all'
  }


  createTodoItem(label) {
    return {
      label: label,
      important: false,
      done: false,
      id: this.maxId ++
    }
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
        done: false,
        id: id
      }

      const newArrData = [...todoData, item]

      return {
        todoData: newArrData
      }
    })
  }

  toggleProperty(arr, id, propName) {
      const idx = arr.findIndex(element => element.id === id)

      const oldItem = arr[idx]
      const newItem = {...oldItem, [propName]: !oldItem[propName]}
      const before = arr.slice(0, idx)
      const after = arr.slice(idx + 1)

      return [
        ...before,
        newItem, 
        ...after
      ]
    
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  onSearch = (searchText) => {
    this.setState({
      term: searchText
    })
  };

  onFilterChange = (filter) => {
    this.setState({
      filter: filter
    })
  }

  filter = (items, filter) => {

    switch (filter) {
      case 'all': 
        return items
      case 'active':
        return items.filter((element) => !element.done)
      case 'done':
        return items.filter((element) => element.done)
      default:
        return items
    }

  }

  render() {
    const { todoData, term, filter } = this.state
    const doneCount = todoData.filter(item => item.done).length
    const todoCount = todoData.length - doneCount

    const visibleItems = this.filter(
      todoData.filter(element => element.label.includes(term)),
      filter
      )



    return(
      <div className='todo-app'>
        <AppHeader toDo={todoCount} done={doneCount}/>
        <div className='top-panel d-flex'>
          <SearchPanel onSearch={this.onSearch}/>
          <ItemStatusFilter 
            filter={filter}
            onFilterChange={this.onFilterChange}
            />
        </div>
        <TodoList todos={visibleItems} 
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          />
        <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    )
  }
}
