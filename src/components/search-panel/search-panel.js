import React from 'react'
import './search-panel.css'

const SearchPanel = () => {

    const searchText = 'Type here to search'
    const searchStyle = {
      fontSize: 20
    }
  
    return (
  
      <input className='form-control search-panel' placeholder={searchText} style={searchStyle}/>
    )
  }

export default SearchPanel