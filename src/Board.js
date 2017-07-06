import React, { Component } from 'react';
import './Board.css';
import { PropTypes } from 'prop-types';
import '../node_modules/font-awesome/css/font-awesome.css';

export class Board extends Component{
    constructor(props){
        super(props);
        this.state = {
            notes: []
        };
    }

    render() {
        return (
            <div className='board'>
                    <button  className="btn-add" >
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