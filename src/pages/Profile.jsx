import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logout from '../components/Logout';

export default function Profile() {
    const [user, setUser] = useState({ name: '', email: '', logo: '' });
    const navigate = useNavigate();

    const generateUniqueLogoUrl = (id) => {
        const uniqueImages = [
            'https://images.pexels.com/photos/5469028/pexels-photo-5469028.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            'https://images.pexels.com/photos/8522024/pexels-photo-8522024.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            'https://images.pexels.com/photos/17071339/pexels-photo-17071339/free-photo-of-cup-of-cappuccino-cup-and-pink-and-green-macaron-pastry-cut-in-half.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            'https://images.pexels.com/photos/8227532/pexels-photo-8227532.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            'https://images.pexels.com/photos/15907849/pexels-photo-15907849/free-photo-of-chocolate-cake-snack-and-coffee.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            'https://images.pexels.com/photos/8274760/pexels-photo-8274760.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        ];
        const index = parseInt(id, 10) % uniqueImages.length;
        return uniqueImages[index];
    };

    useEffect(() => {
        let id = JSON.parse(localStorage.getItem('id'));
        axios.get(`https://667b1b9fbd627f0dcc91b868.mockapi.io/api2/${id}`)
            .then(response => {
                if (response.data) {
                    const userData = response.data;

                    if (!userData.logo) {
                        const uniqueLogo = generateUniqueLogoUrl(id);
                        userData.logo = uniqueLogo;

                        axios.put(`https://667b1b9fbd627f0dcc91b868.mockapi.io/api2/${id}`, { logo: uniqueLogo })
                            .then(() => {
                                setUser(userData);
                            })
                            .catch(error => {
                                console.error('Error updating user profile with unique logo', error);
                            });
                    } else {
                        setUser(userData);
                    }
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
        <Logout 
            user={user} 
            handleDeleteAccount={handleDeleteAccount} 
            handleLogout={handleLogout} 
        />
    );
}
