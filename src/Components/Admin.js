import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Admin(props) {
    const [data, setDate] = useState([]);
    useEffect(() => {
        getAllItems()
    }, [])

    const getAllItems = async () => {
        let result = await fetch('http://localhost:3001/notes');
        let data = await result.json();
        setDate(data)
    }

    return (
        <div className='notes-list'>
            {data.map((item, index) => {
                return (
                    <Link key={item.id} to={`/note/${item.id}`}>
                        <div  className='notes-list-item'>
                            <h4>{item.body}</h4>
                            <p>{item.time}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
}

export default Admin;