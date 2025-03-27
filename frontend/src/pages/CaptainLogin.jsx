import React,{useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';


const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});
  const {captain, setCaptain} = useContext(CaptainDataContext); 
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = ({
      email: email,
      password: password
    });

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData);  

    if(response.status === 200){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-5 flex flex-col justify-between h-screen">
      <div>
        <img
          className="mb-3 w-20"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="Uber-Logo"
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">What's your Email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded border px-4 py-2 w-full text-lg placeholder:text-base"
            type="email"
            placeholder="Enter Email Here"
            required
          />
          <h3 className="text-lg font-medium mb-2">What's your Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded border px-4 py-2 w-full text-lg placeholder:text-base"
            type="password"
            placeholder="Enter Password Here"
            required
          />
          <button className="bg-[#111] mb-3 rounded px-4 py-2 w-full text-white font-semibold text-lg">
            Login (As Captain)
          </button>
          <p className="text-center">
            Want to be a Captain? <Link to="/captain-signup" className="text-blue-600">
              Create Account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link to='/login' className="bg-[#d5622d] flex items-center justify-center mb-5 rounded px-4 py-2 w-full text-white font-semibold text-lg">
          Sign in as User
        </Link>
      </div>
    </div>
    );
};



export default CaptainLogin;