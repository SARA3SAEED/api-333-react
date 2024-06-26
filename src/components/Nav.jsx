import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="navbar bg-base-200 rounded">
        <div className="navbar-start">
        <Link to='/' className="btn btn-ghost text-xl">daisyUI</Link>
        </div>
    
        <div className="navbar-end">
        <Link to='/register' className="btn">Register</Link>
        <Link to='/login' className="btn">Login</Link>
        </div>
    </div>
  )
}
