import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
      <h5
        // onClick={() => props.setVehicleFound(false)}
        className="p-1 absolute top-0 w-[93%] text-center"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Confirm your Ride:
      </h3>

      <div className="flex gap-2 flex-col items-center justify-center">
        <img
          className="h-25"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt="car-png"
        />
        <div className='mt-5 w-full'>
            <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
                <i className='text-lg ri-map-pin-2-fill'></i>
                <div>
                    <h3 className='text-lg font-medium'>671/21 D</h3>
                    <p className='text-gray-600 text-sm -mt-1'>Zambapur, Rajasthan</p>
                </div>
            </div>
            <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
                <i className='text-lg ri-map-pin-user-fill'></i>
                <div>
                    <h3 className='text-lg font-medium'>61/8</h3>
                    <p className='text-gray-600 text-sm -mt-1'>Sitapur, Rajasthan</p>
                </div>
            </div>
            <div className='flex items-center gap-5 p-3'>
                <i className='text-lg ri-currency-fill'></i>
                <div>
                    <h3 className='text-lg font-medium'>₹212.45</h3>
                    <p className='text-gray-600 text-sm -mt-1'>Cash</p>
                </div>
            </div>

        </div>
        <button onClick={() => {
            props.setVehicleFound(true)
            props.setConfirmRidePanel(false)
            }} className='bg-green-500 mt-5 w-full text-white font-semibold p-2 rounded-lg'>Confirm</button>
      </div>
    </div>
  );
}

export default ConfirmRide