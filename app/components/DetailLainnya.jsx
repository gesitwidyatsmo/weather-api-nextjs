/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const DetailLainnya = ({ data }) => {
  const tanggal = data.data.date;
  const dateString = tanggal;
  const dateObject = new Date(dateString);
  const day = dateObject.getDate();

  const date = new Date(tanggal);
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const dayIndex = date.getDay();
  const dayName = days[dayIndex];

  const [currentMenu, setCurrentMenu] = useState("astronomy");
  const astronomyData = data.data.astro;
  const astroData = [
    {
      nama: "Fase Bulan",
      deskripsi: "Fase bulan.",
      icon: `./icon/MoonPhase/${astronomyData.moon_phase}.svg`,
      data: astronomyData.moon_phase,
      info: "./icon/material-symbols_info-outline.svg",
      class: "mr-3"
    },
    {
      nama: "Penerangan Bulan",
      deskripsi: "Persentase pencahayaan bulan.",
      icon: "./icon/lucide_sun-moon.svg",
      data: `${astronomyData.moon_illumination}%`,
      info: "./icon/material-symbols_info-outline.svg",
      class: "h-7"
    },
    {
      nama: "Sunrise",
      deskripsi: "Waktu matahari terbit.",
      icon: "./icon/icon _sunrise.svg",
      data: astronomyData.sunrise,
      info: "./icon/material-symbols_info-outline.svg",
      class: ""
    },
    {
      nama: "Sunset",
      deskripsi: "Waktu matahari terbenam.",
      icon: "./icon/icon _sunset.svg",
      data: astronomyData.sunset,
      info: "./icon/material-symbols_info-outline.svg",
      class: ""
    },
    {
      nama: "Moonrise",
      deskripsi: "Waktu bulan terbit.",
      icon: "./icon/moonrise.svg",
      data: astronomyData.moonrise,
      info: "./icon/material-symbols_info-outline.svg",
      class: "mr-2"
    },
    {
      nama: "Moonset",
      deskripsi: "Waktu bulan terbenam.",
      icon: "./icon/moonset.svg",
      data: astronomyData.moonset,
      info: "./icon/material-symbols_info-outline.svg",
      class: "mr-2"
    }
  ];
  const weatherData = data.data.day;
  const detailsCuaca = [
    {
      nama: "Kelembapan",
      deskripsi: "Kelembaban udara, dalam satuan persen.",
      icon: "./icon/icon _humidity.svg",
      data: `${weatherData.avghumidity}%`,
      info: "./icon/material-symbols_info-outline.svg",
      class: "mr-3"
    },
    {
      nama: "Angin",
      deskripsi: "Kecepatan angin maksimum dalam kilometer per jam.",
      icon: "./icon/icon _strong wind.svg",
      data: `${weatherData.maxwind_kph} km/j`,
      info: "./icon/material-symbols_info-outline.svg",
      class: "mr-0"
    },
    {
      nama: "Peluang Hujan",
      deskripsi: "Peluang hujan harian dalam persentase.",
      icon: "./icon/peluang hujan.svg",
      data: `${weatherData.daily_chance_of_rain}%`,
      info: "./icon/material-symbols_info-outline.svg",
      class: "mr-0"
    },
    {
      nama: "Curah Hujan",
      deskripsi: "Total curah hujan dalam inci.",
      icon: "./icon/curah hujan.svg",
      data: `${weatherData.totalprecip_in} in`,
      info: "./icon/material-symbols_info-outline.svg",
      class: "mr-3"
    },
    {
      nama: "Visibility",
      deskripsi: "Jarak pandang dalam kilometer.",
      icon: "./icon/material-symbols_visibility-outline.svg",
      data: `${weatherData.avgvis_km} km`,
      info: "./icon/material-symbols_info-outline.svg",
      class: "mr-3"
    },
    {
      nama: "UV Index",
      deskripsi: "Indeks UV (Ultraviolet).",
      icon: "./icon/UV.svg",
      data: `${weatherData.uv}`,
      info: "./icon/material-symbols_info-outline.svg",
      class: "mr-4"
    }
  ];

  const showWeatherMenu = () => {
    setCurrentMenu("weather");
  };

  const showAstronomyMenu = () => {
    setCurrentMenu("astronomy");
  };

  return (
    <div className='mt-1'>
      <div className='md:hidden'>
        {currentMenu === "astronomy" ? (
          <div className='mt-3'>
            <div className='flex items-center justify-between transition-all duration-500'>
              <h1 className='text-center text-lg font-bold flex-grow'>Astronomi</h1>
              <button onClick={showWeatherMenu} className='ml-auto'>
                <FaCaretRight />
              </button>
            </div>
            <div>
              <div className='flex justify-center items-center'>
                <div className='grid grid-cols-2 mt-2 text-xs'>
                  {astroData.map((data, i) => (
                    <div key={i} className='h-16 flex  justify-start items-center'>
                      <img src={data.icon} alt={data.nama} className={`${data.class}`} />
                      <div className='ml-2'>
                        <div className='group relative'>
                          <div className='flex gap-1 cursor-pointer'>
                            <h4 className='font-bold hover:underline'>{data.nama}</h4>
                            <img src={data.info} alt='info' />
                            <span className='absolute -top-16  w-[155px] left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-6 py-4 rounded-xl border border-gray-300 bg-white text-xs shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 text-black'>
                              {data.deskripsi}
                              <span></span>
                            </span>
                          </div>
                        </div>
                        <h5 className='text-xs'>{data.data}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='mt-3'>
            <div className='flex items-center justify-between transition-all duration-500'>
              <button onClick={showAstronomyMenu} className='mr-auto'>
                <FaCaretLeft />
              </button>
              <h1 className='text-center text-lg font-bold flex-grow'>Cuaca</h1>
            </div>
            <div>
              <div className='flex justify-center items-center'>
                <div className='grid grid-cols-2 mt-2 gap-x-10 text-xs'>
                  {detailsCuaca.map((data, i) => (
                    <div key={i} className='h-16 flex  justify-start items-center'>
                      <img src={data.icon} alt={data.nama} className={`${data.class}`} />
                      <div className='ml-2'>
                        <div className='group relative'>
                          <div className='flex gap-1 cursor-pointer'>
                            <h4 className='font-bold hover:underline'>{data.nama}</h4>
                            <img src={data.info} alt='info' />
                            <span className='absolute -top-16  w-[110px] left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-5 py-3 rounded-xl border border-gray-300 bg-white text-xs shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 text-black'>
                              {data.deskripsi}
                              <span></span>
                            </span>
                          </div>
                        </div>
                        <h5 className='text-xs'>{data.data}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='hidden md:block '>
        <div className='flex justify-center items-center'>
          <div className='mt-3'>
            <h1 className='text-center text-lg font-bold flex-grow'>Astronomi</h1>
            <div>
              <div className='flex justify-center items-center'>
                <div className='grid grid-cols-2 mt-2 text-xs'>
                  {astroData.map((data, i) => (
                    <div key={i} className='h-16 flex  justify-start items-center'>
                      <img src={data.icon} alt={data.nama} className={`${data.class}`} />
                      <div className='ml-2'>
                        <div className='group relative'>
                          <div className='flex gap-1 cursor-pointer'>
                            <h4 className='font-bold hover:underline'>{data.nama}</h4>
                            <img src={data.info} alt='info' />
                            <span className='absolute -top-16  w-[155px] left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-6 py-4 rounded-xl border border-gray-300 bg-white text-xs shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 text-black'>
                              {data.deskripsi}
                              <span></span>
                            </span>
                          </div>
                        </div>
                        <h5 className='text-xs'>{data.data}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='mx-5 border-dashed mt-0 border-x w-0.5 h-56'></div>
          <div className='mt-3'>
            <h1 className='text-center text-lg font-bold flex-grow'>Cuaca</h1>
            <div>
              <div className='flex justify-center items-center'>
                <div className='grid grid-cols-2 mt-2 gap-x-10 text-xs'>
                  {detailsCuaca.map((data, i) => (
                    <div key={i} className='h-16 flex  justify-start items-center'>
                      <img src={data.icon} alt={data.nama} className={`${data.class}`} />
                      <div className='ml-2'>
                        <div className='group relative'>
                          <div className='flex gap-1 cursor-pointer'>
                            <h4 className='font-bold hover:underline'>{data.nama}</h4>
                            <img src={data.info} alt='info' />
                            <span className='absolute -top-16  w-[110px] left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-5 py-3 rounded-xl border border-gray-300 bg-white text-xs shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 text-black'>
                              {data.deskripsi}
                              <span></span>
                            </span>
                          </div>
                        </div>
                        <h5 className='text-xs'>{data.data}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLainnya;
