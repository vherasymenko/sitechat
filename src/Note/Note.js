import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Note.css'


class Note extends Component{
    constructor(props){
        super(props);
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
    }
    render(){
        return(
            <div className='note fade-in'>
                <p className='noteContent'> {this.noteContent} </p>
            </div>
        )
    }
}

Note.protoTypes = {
    noteContent: PropTypes.toString
};

export default Note;