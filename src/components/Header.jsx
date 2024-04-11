import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='Header'>
            <Link to={``}><h1>Blogs Dummy API</h1></Link>
            <Link to={`/users`} className='button'>Usuarios</Link>
        </div>
    )
}

export default Header