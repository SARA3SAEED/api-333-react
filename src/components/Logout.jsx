import React from 'react';

export default function Logout({ user, handleDeleteAccount, handleLogout }) {
    return (
        <div className="navbar bg-base-200 rounded">
            <div className="navbar-start">
                <img 
                    src={user.logo || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85YAGkKUvD0ubpY7_wLaxA80-D0lAlmjZvg&s'} 
                    alt="User Logo"
                    style={{
                        borderRadius: '50%',
                        objectFit: 'cover',
                        width: '4.25rem', 
                        height: '4.25rem' 
                    }}
                />
                <div className="ml-4">
                    <h1 className="text-2xl font-semibold">{user.name}</h1>
                    <p className="text-gray-600">{user.email}</p>
                </div>
            </div>
            <div className="navbar-end">
                <button onClick={handleDeleteAccount} className="btn">Delete Account</button>
                <button onClick={handleLogout} className="btn">Log Out</button>
            </div>
        </div>
    );
}

