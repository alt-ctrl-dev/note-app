import React, { Component } from 'react';
import './Board.css';
import { PropTypes } from 'prop-types';
import '../node_modules/font-awesome/css/font-awesome.css';
import {Note} from './Note'

export class Board extends Component{
    constructor(props){
        super(props);
        this.state = {
            notes: [                      
                    {id: 0, note: 'Call Bob'},
                    {id: 1, note: 'Email Sarah'},
                    {id: 2, note: 'Eat Lunch'},
                    {id: 3, note: 'Finish proposal'}
                ]
        };
        this.eachNote = this.eachNote.bind(this)
        this.update = this.update.bind(this)
        this.remove = this.remove.bind(this)
    }
    update(newText, id) {
        var notes = this.state.notes.map(
            note => (note.id !== id) ?
            note : 
                {
                    ...note, 
                    note: newText
                }
        )
        this.setState({notes})
    }
    remove(id) {
        var notes = this.state.notes.filter(note => note.id !== id)
        this.setState({notes})
    }
    nextId() {
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    }
    eachNote(note) {
        return (<Note key={note.id}
                        id={note.id}
                        onChange={this.update}
                        onRemove={this.remove}>
                    {note.note}
                </Note>)
    }
    render() {
        return (
            <div className='board'>
                {this.state.notes.map(this.eachNote)}
                <button  className="btn-add btn btn-default" >
                    <i className="fa fa-plus fa-5x" aria-hidden="true" />
                </button>
            </div>
        )
    }
}

Board.defaultProps = {
  count: 10
};

Board.propTypes = {
  count: (props, propName, componentName) => {

    if(typeof props[propName] !== "number") {
        return new Error(`${propName} must be a number`)
    } 

    if(props[propName] > 100) {
        return new Error('Creating ' + props[propName] + ' notes is ridiculous')
    }
  }
};