/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { getForecastData } from "../lib/api";
import ForecastDayDetails from "./ForecastDayDetails";
import { IoWaterSharp } from "react-icons/io5";

const ForecastDay = ({ locationData, currentData }) => {
  const location = locationData ? locationData : "";
  const [selectedButton, setSelectedButton] = useState("hariIni");
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    if (location) {
      const fetchForecastData = async () => {
        const data = await getForecastData(location);
        setForecastData(data);
      };

      fetchForecastData();
    }
  }, [location]);

  const buttons = [
    {
      key: "hariIni",
      label: "Hari Ini",
      icon: forecastData ? forecastData[0].day.condition.icon : null,
      kondisi: forecastData ? forecastData[0].day.condition.text : null,
      rain: forecastData ? forecastData[0].day.daily_chance_of_rain : null,
      maxtemp: forecastData ? forecastData[0].day.maxtemp_c : null,
      mintemp: forecastData ? forecastData[0].day.mintemp_c : null,
      data: forecastData ? forecastData[0] : null
    },
    {
      key: "besok",
      label: "Besok",
      icon: forecastData ? forecastData[1].day.condition.icon : null,
      kondisi: forecastData ? forecastData[1].day.condition.text : null,
      rain: forecastData ? forecastData[1].day.daily_chance_of_rain : null,
      maxtemp: forecastData ? forecastData[1].day.maxtemp_c : null,
      mintemp: forecastData ? forecastData[1].day.mintemp_c : null,
      data: forecastData ? forecastData[1] : null
    },
    {
      key: "lusa",
      label: "Lusa",
      icon: forecastData ? forecastData[2].day.condition.icon : null,
      kondisi: forecastData ? forecastData[2].day.condition.text : null,
      rain: forecastData ? forecastData[2].day.daily_chance_of_rain : null,
      maxtemp: forecastData ? forecastData[2].day.maxtemp_c : null,
      mintemp: forecastData ? forecastData[2].day.mintemp_c : null,
      data: forecastData ? forecastData[2] : null
    }
  ];

  const handleButtonClick = (key) => {
    setSelectedButton(key);
  };

  const selectedData = buttons.find((button) => button.key === selectedButton);

  return (
    <div className='text-white max-w-[720px]'>
      <div className='flex gap-2'>
        {buttons.map((data) => (
          <div key={data.key} className={`flex flex-col justify-start items-center group ${selectedButton === data.key ? "w-80" : "w-48"} cursor-pointer`} onClick={() => handleButtonClick(data.key)}>
            <div className='w-full h-40 rounded-2xl bg-gradient-to-b from-[#2080BF] to-[#0F3C59]'>
              <div className='p-4'>
                <h2 className='font-bold  text-lg'>{data.label}</h2>
                <div className='md:flex justify-between items-center mt-3'>
                  <div className={`flex justify-between items-center ${selectedButton !== data.key ? "gap-12" : "gap-2"}`}>
                    <img src={data.icon} alt='icon' />
                    <div className={`text-xs font-bold flex flex-col gap-4 md:space-y-4 md:block  ${selectedButton !== data.key ? "hidden" : ""}`}>
                      <div>{data.maxtemp}°C</div>
                      <div>{data.mintemp}°C</div>
                    </div>
                  </div>
                  {selectedButton === data.key ? (
                    <div className='hidden md:block text-xs md:space-y-4'>
                      <div className={`line-clamp-1`}>{data.kondisi}</div>
                      <div className='flex justify-end items-center gap-1'>
                        <IoWaterSharp />
                        {data.rain}%
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            {selectedButton === data.key && <div className='segitiga'></div>}
          </div>
        ))}
      </div>
      <ForecastDayDetails dt={selectedData} currentData={currentData} />
    </div>
  );
};

export default ForecastDay;
