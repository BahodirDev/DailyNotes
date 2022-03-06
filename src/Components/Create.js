import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Add} from '../assets/add (1).svg';


function Create(props) {
    return (
        <Link to={`/note/new`}>
            <Add  className='floating-button' />
        </Link>
    );
}

export default Create;