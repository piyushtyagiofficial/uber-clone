import React, {useState, useRef} from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";
import ConfirmRidePopup from "../components/ConfirmRidePopup";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const CaptainHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)
  const ridePopupPanelRef = useRef(null)
  const confirmRidePopupPanelRef = useRef(null)

  useGSAP(function () {
    if(ridePopupPanel){
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(0)',
      })
    }else{
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }
  ,[ridePopupPanel]);

  useGSAP(function () {
    if(confirmRidePopupPanel){
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(0)',
      })
    }else{
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }
  ,[confirmRidePopupPanel]);

  return (
    <div className="w-screen h-screen">
      {/* Uber Logo and Logout */}
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt="Uber Logo"
        />
        <Link
          to="/captain-home"
          className="fixedh-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-login-box-line"></i>
        </Link>
      </div>
      {/* Uber map */}
      <div className="h-3/5">
        <img
          className="w-full h-full object-cover"
          src="https://s3-eu-west-1.amazonaws.com/adminjs-blog/2023/05/0_HzyjQ7h0baWklQeF.webp"
          alt="temporary image"
        />
      </div>
      {/* Captain Details */}
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      {/* Available Rides */}
      <div ref={ridePopupPanelRef} className="fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-10 pt-14">
        <RidePopup setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>
      {/* Confirm Ride */}
      <div ref={confirmRidePopupPanelRef} className="fixed w-full h-screen z-10 translate-y-full bottom-0 bg-white px-3 py-10 pt-14">
        <ConfirmRidePopup setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
      </div>
    </div>
  );
};

export default CaptainHome;
