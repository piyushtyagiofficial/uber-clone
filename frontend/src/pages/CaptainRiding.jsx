import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import FinishRide from '../components/FinishRide'


const CaptainRiding = (props) => {

    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)

    useGSAP(function () {
        if(finishRidePanel){
          gsap.to(finishRidePanelRef.current, {
            transform: 'translateY(0)',
          })
        }else{
          gsap.to(finishRidePanelRef.current, {
            transform: 'translateY(100%)',
          })
        }
      }
      ,[finishRidePanel]);


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
      <div className="h-4/5">
        <img
          className="w-full h-full object-cover"
          src="https://s3-eu-west-1.amazonaws.com/adminjs-blog/2023/05/0_HzyjQ7h0baWklQeF.webp"
          alt="temporary image"
        />
      </div>
      {/* Ride Completion Details */}
      <div className="h-1/5 p-6 relative flex items-center justify-between bg-yellow-400"
      onClick={() => {setFinishRidePanel(true)}}>
        <h5
          className="p-1 absolute top-0 w-[90%] text-center"
        >
          <i className="text-3xl text-black-200 ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className='text-xl font-semibold'>4 KM Away</h4>
        <button className='bg-green-600 text-white font-semibold p-3 px-10  rounded-lg'>Complete Ride</button>
      </div>
      {/* Ride Finished */}
      <div ref={finishRidePanelRef} className="fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-10 pt-14">
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  )
}

export default CaptainRiding