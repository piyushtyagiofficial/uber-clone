import React from "react";

const LocationSearchPanel = (props) => {
  //array of location
  const location = [
    "34,KI, Pappa VIhar, Jono Kedar Agency, Panipat",
    "35,KI, Pappa VIhar, Reka Parking, Panipat",
    "36,KI, Pappa VIhar, Teko Car Agency, Panipat",
    "37,KI, Pappa VIhar, Jono Kedar Agency, Panipat",
  ];
  return (
    <div>
      {/*Sample Data */}
      {location.map(function (location, id) {
        return (
          <div
          key={id} 
          onClick={() => {
            props.setVehiclePanelOpen(true)
            props.setPanelOpen(false)
          }}
          className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center justify-start my-2">
            <h2 className="bg-[#eee] w-10 h-10 rounded-full flex items-center justify-center text-3xl">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">
              {location}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
