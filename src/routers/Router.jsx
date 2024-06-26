import React from 'react';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import { createBrowserRouter, RouterProvider} from "react-router-dom";

export default function Router() {
  const router = createBrowserRouter([
    { path: "/", element: <Home />},
    { path: "/register", element: <Register />},
    { path: "/login", element: <Login />},
    { path: "/profile", element: <Profile />}
])
    return ( <RouterProvider router={router} />)
}
