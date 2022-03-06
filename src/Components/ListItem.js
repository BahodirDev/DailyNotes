import React from 'react';
import { Link } from 'react-router-dom';

function ListItem(props) {
    const { id, body, time } = props;
    return (
            <Link to={`/note/${id}`}>
            <div className='notes-list-item'>
                <p>{body}</p>
            </div>
        </Link>

    );
}

export default ListItem;