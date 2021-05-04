import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className='Nav'>
            <Link to='/'>
                <p>Fashion Fits</p>
            </Link> 
        </div>
    )
}