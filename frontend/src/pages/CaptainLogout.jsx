import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
            headers: {  
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if(response.status === 200){
                localStorage.removeItem('token');
                navigate('/captain-login');
            }
        }).catch((error) => {
            console.error('Logout failed:', error);
        });
    }, []);

    return (
        <div>CaptainLogout</div>
    );
}

export default CaptainLogout;