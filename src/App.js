import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note'
import NoteForm from './NoteForm/NoteForm'
import { DB_CONFIG } from "./Config/config";
import firebase from 'firebase/app';

class App extends Component {

    constructor(props){
        super(props);

    this.addNote = this.addNote.bind(this);
    this.app = firebase.initializeApp(DB_CONFIG);
    this.db = this.app.database().ref().child('notes');

    this.state = {
            notes: [],
        }
    }

    addNote(note){
        const previousNotes = this.state.notes;
        console.log(previousNotes);
        previousNotes.push({ id: previousNotes.length + 1, noteContent: note});
        console.log('24', previousNotes);
        this.setState ({
            notes: previousNotes
        });
    }

    render() {
    return (
        <div className='notesWrapper'>
            <div className='notesHeader'>
                <div className='heading'>React and Firebase TodoList</div>
            </div>
            <div className='notesBody'>
                {
                    this.state.notes.map((note) => {
                        return (
                            <Note noteContent={note.noteContent} noteId={note.id} key={note.id}/>
                        )
                    })
                }
            </div>
            <div className='notesFooter'>
                <NoteForm addNote={this.addNote} />
            </div>
        </div>
    );
  }
}

export default App;
