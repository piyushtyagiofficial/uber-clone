import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className="w-screen h-screen">
      <Link to="/home" className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className='text-lg font-medium ri-home-5-line'></i>
        </Link>
      <div className='h-1/2'>
        <img
          className="w-full h-full object-cover"
          src="https://s3-eu-west-1.amazonaws.com/adminjs-blog/2023/05/0_HzyjQ7h0baWklQeF.webp"
          alt="temporary image"
        />
      </div>
      <div className='h-1/2 p-4'>
      <div className="flex items-center justify-between">
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt="car-png"
        />
        <div className='text-right'>
            <h2 className='text-lg font-medium'>Amit</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>MH 02 GH 0923</h4>
            <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
        </div>
      </div>

      <div className="flex gap-2 flex-col items-center justify-center">
        <div className="mt-5 w-full">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">61/8</h3>
              <p className="text-gray-600 text-sm -mt-1">Sitapur, Rajasthan</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-currency-fill"></i>
            <div>
              <h3 className="text-lg font-medium">₹212.45</h3>
              <p className="text-gray-600 text-sm -mt-1">Cash</p>
            </div>
          </div>
        </div>
      </div>
      <button className='bg-green-500 mt-5 w-full text-white font-semibold p-2 rounded-lg'>Make a payment</button>  
        </div>
    </div>
  );
}

export default Riding