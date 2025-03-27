import React from "react";

const CaptainDetails = () => {
  return (
    <div>
      {/* name and money earned */}
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="w-10 rounded-full object-cover h-10"
            src="https://static1.srcdn.com/wordpress/wp-content/uploads/2025/01/severance-season-2-ep-1-31.jpg"
            alt="Mark S. Driver"
          />
          <h4 className="text-lg font-medium">Mark S.</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold"> ₹502.6</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>
      {/* stats */}
      <div className="flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-4 item-start">
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-time-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-speed-up-fill"></i>
          <h5 className="text-lg font-medium">15 KM</h5>
          <p className="text-sm text-gray-600">Total Distance</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
          <h5 className="text-lg font-medium">10</h5>
          <p className="text-sm text-gray-600">Total Rides</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
