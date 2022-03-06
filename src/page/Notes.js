
import React, { useEffect, useState } from 'react';
import Create from '../Components/Create';
import ListItem from '../Components/ListItem';

function Notes(props) {

    const [notes,setNotes] = useState([]);

    useEffect(()=>{
        getElement()
    },[])

    const getElement= async()=>{
        let response = await fetch('http://localhost:3001/notes')
        let data =  await response.json();
        setNotes(data);
    }

    return (
        <div className='App'>
            <div className='notes-header'>
                <h2 className='notes-title'>&#9782; Daily notes </h2>
                <p className='notes-count'>{notes.length}</p>
            </div>
            <div className='notes-list'>
                {notes.map(s => (
                    <ListItem key={s.id} {...s} />
                ))}
            </div>
            <Create />
        </div>
    );
}

export default Notes;