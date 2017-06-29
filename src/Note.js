import React from 'react';
import './Note.css';

var Note = React.createClass({
    edit() {
        alert("Editing Note")
    },
    remove() {
        alert("Removing Note")
    },
    render() {
        return ( 
        <div className = "note">
            <span className="Close-span">
                <button className="Btn-close" onClick = {this.remove} > X </button> 
            </span> 
            <p > {this.props.children} </p> 
            <span className="Edit-span">
                <button className="Btn-edit" onClick = {this.edit}> Edit </button>
            </span> 
        </div>
        )
    }
})

export default Note;