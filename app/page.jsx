"use client";
import CardSidebar from "./components/CardSidebar";
import ForecastDay from "./components/ForecastDay";
import Header from "./components/Header";
import React, { useState } from "react";

export default function Home() {
  const [locationData, setLocationData] = useState(null);
  const [currentData, setCurrentData] = useState(null);

  const handleLocationSearch = (searchTerm) => {
    setLocationData(searchTerm);
  };

  const handleCurrent = (currentTerm) => {
    setCurrentData(currentTerm);
  };

  return (
    <div>
      <Header onLocationData={handleLocationSearch} />
      <div className='bg-[f9f9f9]'>
        {locationData === null ? (
          <div className='w-full h-[calc(100vh-100px)] flex justify-center items-center px-20 text-center text-sm md:text-lg'>
            <div>
              Mohon masukkan lokasi yang valid untuk mendapatkan informasi cuaca di pencarian. Harap dicatat bahwa <span className='font-bold'>tidak semua lokasi</span> memiliki data cuaca yang dapat
              diakses. Anda mungkin akan ditampilkan lokasi yang lainnya.
            </div>
          </div>
        ) : (
          <div className='lg:flex p-5 xl:px-20 mx-auto'>
            <div className='flex flex-col justify-center items-center mx-auto'>
              <CardSidebar locationData={locationData} current={handleCurrent} />
            </div>
            <div className='overflow-hidden mt-5 lg:mt-0 lg:ml-5 xl:ml-0'>
              <ForecastDay locationData={locationData} currentData={currentData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
