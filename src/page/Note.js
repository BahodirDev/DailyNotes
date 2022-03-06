import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {ReactComponent as Down} from '../assets/arrow-left (1).svg';
function Note(props) {
    const [note,setNote] = useState(null);
    let {id} = useParams();
    const navigate = useNavigate();

    const SubmitNote =async()=>{
        await fetch(`http://localhost:3001/notes/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({...note, time :new Date()})
        })
    }

    const deleteNote=async()=>{
        await fetch(`http://localhost:3001/notes/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"appliction/json"
            },
            body:JSON.stringify(note)
        });
        navigate('/');

    }
    const addNews = async()=>{
        await fetch(`http://localhost:3001/notes`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({...note,time:new Date()})
        })
        navigate('/');
    }
    useEffect(()=>{
        getId()
    },[id])

    const getId = async ()=>{
       let response =  await fetch(`http://localhost:3001/notes/${id}`);
       let data = await response.json();
       setNote(data)
    }

   
    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                <Link to={`/`}><Down onClick={SubmitNote} /></Link>
                </h3>
                {
                    id !== 'new' ? (<button onClick={deleteNote}>DELETE</button>) : (<button onClick={addNews}>Add</button>)
                }
            </div>
            <textarea
            onChange={(e)=>setNote({...note,body:e.target.value})}
             value={note?.body}></textarea>
        </div>
    );
}

export default Note;