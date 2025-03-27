import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.setWaitingForDriver(false)}
        className="p-1 absolute top-0 w-[93%] text-center"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Waiting for a Driver</h3>

      <div className="flex items-center justify-between">
        <img
          className="h-10"
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
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">671/21 D</h3>
              <p className="text-gray-600 text-sm -mt-1">Zambapur, Rajasthan</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
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
    </div>
  );
}

export default WaitingForDriver