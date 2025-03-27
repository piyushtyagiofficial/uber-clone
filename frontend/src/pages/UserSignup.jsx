import React,{useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';


const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  
  const navigate = useNavigate();
  const {user, setUser}=useContext(UserDataContext);


  const submitHandler = async(e) => {
    e.preventDefault();
    const newUser=({
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email:email, 
      password:password
    });

    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if(response.status===201){
      const data=response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="mb-10 w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt="Uber-Logo"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your Name</h3>
          <div className="flex gap-4 mb-6">
            <input
              className="bg-[#eeeeee] w-1/2 rounded border px-4 py-2 text-lg placeholder:text-base"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter First Name"
              required
            />
            <input
              className="bg-[#eeeeee] w-1/2 rounded border px-4 py-2 text-lg placeholder:text-base"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter Last Name"
              required
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What's your Email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-6 rounded border px-4 py-2 w-full text-lg placeholder:text-base"
            type="email"
            placeholder="Enter Email Here"
            required
          />
          <h3 className="text-lg font-medium mb-2">What's your Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-6 rounded border px-4 py-2 w-full text-lg placeholder:text-base"
            type="password"
            placeholder="Enter Password Here"
            required
          />
          <button className="bg-[#111] mb-3 rounded px-4 py-2 w-full text-white font-semibold text-lg">
            Create Account
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and
          <span className='underline'>Terms of Privacy</span> apply.
        </p>
      </div>
    </div>
  );
}

export default UserSignup;