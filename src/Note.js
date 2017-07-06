import React, { Component } from 'react';
import './Note.css';
import '../node_modules/font-awesome/css/font-awesome.css';

export class Note extends Component{
    constructor(props){
        super(props);
        this.state = {
            editing: false
        };
        this.edit=this.edit.bind(this);
        this.save=this.save.bind(this);
        this.remove=this.remove.bind(this);
    }
    edit() {
        this.setState({ editing: true })
    }
    remove() {
        this.props.onRemove(this.props.id)
    }
    save() {
        this.props.onChange(this.refs.notetext.value, this.props.id)
        this.setState({ editing: false })
    }
    renderEditNote() {
        return ( 
            <div className="note">
                <div className="note-controls">
                    <span className="save-span">
                        <button className="btn-save" onClick = {this.save}> <i className="fa fa-check" aria-hidden="true"></i> </button>
                    </span>
                </div>
                <textarea defaultValue={this.state.note} ref="notetext" rows={4} cols={15}></textarea>
            </div>
        );
    }
    renderDisplayNote() {
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
            
            <p > { this.props.children } </p> 
             
        </div>
        );
    }
    render() {
        return (this.state.editing) ? this.renderEditNote()
                                          : this.renderDisplayNote()
    }
}