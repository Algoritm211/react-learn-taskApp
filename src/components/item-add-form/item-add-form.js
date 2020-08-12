import React from 'react'
import './item-add-form.css'

export default class ItemAddForm extends React.Component {

    render() {

        const { onItemAdded } = this.props

        return (
            <div className='item-add-form'>
                <button
                    className='btn btn-outline-secondary'
                    onClick={() => onItemAdded('Hello')}
                    >
                    Add Element
                </button>
            </div>

        )

    }
}