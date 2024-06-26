
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logout from '../components/Logout';

export default function Profile() {
    const [user, setUser] = useState({ name: '', email: '', logo: '' });
    const navigate = useNavigate();

    useEffect(() => {
        let id = JSON.parse(localStorage.getItem('id'));
        axios.get(`https://667b1b9fbd627f0dcc91b868.mockapi.io/api2/${id}`)
            .then(response => {
                if (response.data) {
                    setUser(response.data);
                }
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });
    }, []);

    const handleDeleteAccount = () => {
        let id = JSON.parse(localStorage.getItem('id'));
        axios.delete(`https://667b1b9fbd627f0dcc91b868.mockapi.io/api2/${id}`)
            .then(response => {
                localStorage.removeItem('id');
                navigate('/register');
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });
    };

    const handleLogout = () => {
        localStorage.removeItem('id');
        navigate('/login');
    };

    return (
        <Logout user={user} handleDeleteAccount={handleDeleteAccount} handleLogout={handleLogout} />
    );
}
