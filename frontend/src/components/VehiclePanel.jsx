import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
          <h5
            onClick={() => props.setVehiclePanelOpen(false)}
            className="p-1 absolute top-0 w-[93%] text-center"
          >
            <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
          </h5>
          <h3 className="text-2xl font-semibold mb-3">Choose a ride:</h3>
          <div onClick={() => {props.setConfirmRidePanel(true)}} className="flex active:border-black border-gray-200 select-none rounded-xl border-2 mb-2 w-full items-center justify-between p-3">
            <img
              className="h-10"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
              alt="car-png"
            />
            <div className="w-1/2">
              <h4 className="font-medium text-base">UberGo <span><i className="ri-user-3-fill"></i></span>4</h4>
              <h5 className="font-medium text-sm">2 min away</h5>
              <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
            </div>
            <h2 className="text-lg font-semibold">₹100.08</h2>
          </div>
          <div onClick={() => {props.setConfirmRidePanel(true)}} className="flex active:border-black border-gray-200 select-none rounded-xl border-2 mb-2 w-full items-center justify-between p-3">
            <img
              className="h-10"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
              alt="car-png"
            />
            <div className="ml-2 w-1/2">
              <h4 className="font-medium text-base">UberAuto <span><i className="ri-user-3-fill"></i></span>3</h4>
              <h5 className="font-medium text-sm">2 min away</h5>
              <p className="font-normal text-xs text-gray-600">Affordable Auto rides</p>
            </div>
            <h2 className="text-lg font-semibold">₹118.68</h2>
          </div>
          <div onClick={() => {props.setConfirmRidePanel(true)}} className="flex active:border-black border-gray-200 select-none rounded-xl border-2 mb-2 w-full items-center justify-between p-3">
            <img
              className="h-10"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
              alt="car-png"
            />
            <div className="-ml-2 w-1/2">
              <h4 className="font-medium text-base">Moto <span><i className="ri-user-3-fill"></i></span>1</h4>
              <h5 className="font-medium text-sm">2 min away</h5>
              <p className="font-normal text-xs text-gray-600">Affordable motorcycle rides</p>
            </div>
            <h2 className="text-lg font-semibold">₹65.5</h2>
          </div>
    </div>
  )
}

export default VehiclePanel