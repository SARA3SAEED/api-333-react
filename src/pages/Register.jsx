import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    const [user, setUser] = useState({ name: '', email: '', password: '', logo: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'logo') {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setUser({ ...user, logo: reader.result });
            };
            reader.readAsDataURL(file);
        } else {
            setUser({ ...user, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://667b1b9fbd627f0dcc91b868.mockapi.io/api2', user)
            .then(response => {
                localStorage.setItem('id', JSON.stringify(response.data.id));
                navigate('/login');
            })
            .catch(error => {
                console.error('There was an error registering!', error);
            });
    };

    return (
        <div className="bg-white relative lg:py-20">
            <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
                <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
                    <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                        <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                            <img src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png" className="btn-" alt="Background"/>
                        </div>
                    </div>
                    <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
                        <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
                            <p className="w-full text-4xl font-medium text-center leading-snug font-serif">Sign up for an account</p>
                            <form onSubmit={handleSubmit} className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                                <div className="relative">
                                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Username</p>
                                    <input 
                                        placeholder="John" 
                                        type="text" 
                                        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md" 
                                        name="name" 
                                        value={user.name} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                                <div className="relative">
                                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
                                    <input 
                                        placeholder="123@ex.com" 
                                        type="email" 
                                        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md" 
                                        name="email" 
                                        value={user.email} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                                <div className="relative">
                                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Password</p>
                                    <input 
                                        placeholder="Password" 
                                        type="password" 
                                        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md" 
                                        name="password" 
                                        value={user.password} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                                <div className="relative">
                                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Logo</p>
                                    <input 
                                        type="file" 
                                        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md" 
                                        name="logo" 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="relative">
                                    <button type="submit" className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease">Submit</button>
                                </div>
                            </form>

                            <div className="relative mt-2">
                                <Link to='/login' className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-indigo-500 bg-white rounded-lg border  transition duration-200 hover:bg-indigo-100 ease">Already have an account? Log in</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}




