import React, {useContext, useEffect, useState} from 'react';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const CaptainProtectWrapper = ({children}) => {
    const token=localStorage.getItem('token');
    const navigate = useNavigate();
    const { setCaptain } = useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(!token){
            navigate('/captain-login');
        }
        if (token) {
            axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, { 
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                if(response.status === 200){
                    const data = response.data;
                    setCaptain(data.captain);
                    setIsLoading(false);
                }
            }).catch((error) => {
                console.log(error);
                localStorage.removeItem('token');
                navigate('/captain-login');
            });
        }
    }, [token]);

    if(isLoading){
        return <div>Loading...</div>
    }

  return (
    <>
        {children}
    </>
  )
}

export default CaptainProtectWrapper