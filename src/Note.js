import React from 'react';
import './Note.css';
import '../node_modules/font-awesome/css/font-awesome.css';

var Note = React.createClass({
    edit() {
        alert("Editing Note")
    },
    remove() {
        alert("Removing Note")
    },
    render() {
        return ( 
        <div className="note">
            <div className="note-controls">
                <span className="edit-span">
                    <button className="btn-edit" onClick = {this.edit}> <i className="fa fa-pencil" aria-hidden="true"></i> </button>
                </span> 
                <span className="close-span">
                    <button className="btn-close" onClick = {this.remove} > <i className="fa fa-times" aria-hidden="true"></i> </button> 
                </span> 
            </div>
            
            <p > {this.props.children} </p> 
             
        </div>
        )
    }
})

export default Note;