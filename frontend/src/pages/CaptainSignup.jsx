import React, {useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainSignup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [vehicleColor, setVehicleColor] = useState(""); 
    const [vehiclePlate, setVehiclePlate] = useState(""); 
    const [vehicleCapacity, setVehicleCapacity] = useState(""); 
    const [vehicleType, setVehicleType] = useState(""); 

    // const [captainData, setCaptainData] = useState({});

    const navigate = useNavigate();
    const {captain, setCaptain} = useContext(CaptainDataContext);

    const submitHandler = async(e) => {
        e.preventDefault();
        const captainData = ({
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                type: vehicleType
            }

        });

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

        if(response.status === 201){
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('token', data.token);
            navigate('/captain-home');
        }

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setVehicleColor("");
        setVehiclePlate("");
        setVehicleCapacity("");
        setVehicleType("");
    }

    return (
      <div className="p-5 flex flex-col justify-between h-screen">
        <div>
          <img
            className="mb-3 w-20"
            src="https://www.svgrepo.com/show/505031/uber-driver.svg"
            alt="Uber-Logo"
          />
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-lg w-full font-medium mb-2">What's our Captain's Name</h3>
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
            <h3 className="text-lg font-medium mb-2">What's our Captain's Email</h3>
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
            <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
            <div className="flex gap-4 mb-6">
              <input
                className="bg-[#eeeeee] w-1/2 rounded border px-4 py-2 text-lg placeholder:text-base"
                type="text"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                placeholder="Vehicle Color"
                required
              />
              <input
                className="bg-[#eeeeee] w-1/2 rounded border px-4 py-2 text-lg placeholder:text-base"
                type="text"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                placeholder="Vehicle Plate"
                required
              />
            </div>
            <div className="flex gap-4 mb-6">
              <input
                className="bg-[#eeeeee] w-1/2 rounded border px-4 py-2 text-lg placeholder:text-base"
                type="number"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                placeholder="Vehicle Capacity"
                required
              />

            <select
              className="bg-[#eeeeee] w-1/2 rounded border px-4 py-2 text-lg placeholder:text-base"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              required
            >
              <option value="">Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="auto">Auto</option>
            </select>
            </div>
            <button className="bg-[#111] mb-3 rounded px-4 py-2 w-full text-white font-semibold text-lg">
              Create Captain Account
            </button>
            <p className="text-center">
              Already a Captain?{" "}
              <Link to="/captain-login" className="text-blue-600">
                Login
              </Link>
            </p>
          </form>
        </div>
        <div>
          <p className="text-[10px] leading-tight mb-3 mt-3">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and{" "}
            <span className="underline">Terms of Privacy</span> apply.
          </p>
          {/* <Link to='/login' className="bg-[#d5622d] flex items-center justify-center mb-5 rounded px-4 py-2 w-full text-white font-semibold text-lg">
                    Sign in as User
                </Link> */}
        </div>
      </div>
    );
}

export default CaptainSignup;