import React from 'react'
import './item-add-form.css'

export default class ItemAddForm extends React.Component {

    state = {
        label: ''
    }

    onLabelChange = (event) =>{
        this.setState({
            label: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault() //Чтобы не перезагружать страницу во время отправки формы
        this.props.onItemAdded(this.state.label)
        this.setState({
            label: '',
        })
    }

    render() {

        return (
            <form className='item-add-form d-flex'
                    onSubmit={this.onSubmit}>
                <input type='text'
                    value={this.state.label}
                    className='form-control' 
                    onChange={event => this.onLabelChange(event)}
                    placeholder='What needs to be done'/>
                <button
                    className='btn btn-outline-secondary'
                    >
                    Add
                </button>
            </form>

        )

    }
}