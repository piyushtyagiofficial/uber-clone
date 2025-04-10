import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
  return (
    <div>
    <h5
        onClick={() => props.setFinishRidePanel(false)}
        className="p-1 absolute top-0 w-[93%] text-center"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Finish this Ride</h3>
      {/* Driver Name and Nearest Ride */}
      <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg border-2 border-yellow-400 mt-4'>
        <div className='flex items-center gap-3'>
            <img className="w-12 h-12 rounded-full object-cover" src="https://www.tvinsider.com/wp-content/uploads/2025/02/severance-season-2-britt-lower-helly-1014x570.jpg" alt="Helly R." />
            <h2 className='text-lg font-medium'>Helly R.</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2 KM</h5>
      </div>
      <div className="flex gap-2 flex-col items-center justify-center">
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
        {/*  Finish Ride */}
        <div className='mt-6 w-full'>
          <Link to='/captain-home' className='bg-green-600 mt-5 text-lg w-full flex justify-center text-white font-semibold p-3 rounded-lg'>Finish Ride</Link>
          <p className='text-red-500 mt-10 text-xs'>Click on Finish Ride button if your Payment is completed.</p>
        </div>
      </div>
    </div>
  )
}

export default FinishRide