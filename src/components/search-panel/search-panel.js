import React from 'react'
import './search-panel.css'

export default class SearchPanel extends React.Component {

    state = {
      searchText: ''
    }

    onSearchChange = (text) => {
      this.setState({
        searchText: text
      })
      this.props.onSearch(text)
    }

    onSubmit = (event) => {
      event.preventDefault()
    }

    render() {

      // const { onSearch } = this.props
      const searchText = 'Type here to search'
      const searchStyle = {
        fontSize: 20
      }
    
      return (
        <form onSubmit={this.onSubmit}>
          <input className='form-control search-panel' 
              placeholder={searchText} 
              style={searchStyle}
              onChange={event => this.onSearchChange(event.target.value)}
              value={this.state.searchText}
              />
        </form>
    )}
  }

