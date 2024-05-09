/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { getWeatherData } from "../lib/api";

const CardSidebar = ({ locationData, current }) => {
  const location = locationData ? locationData : "";
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (locationData) {
      const fetchWeatherData = async () => {
        const data = await getWeatherData(locationData);
        setWeatherData(data);
      };

      fetchWeatherData();
    }
  }, [locationData]);

  // console.log(weatherData);
  const currentLocation = weatherData?.location.name;
  const localTime = weatherData?.location.localtime;
  const tanggal = localTime ? localTime.split(" ")[0] : "";
  const time = localTime ? localTime.split(" ")[1] : "";
  const date = new Date(tanggal);

  useEffect(() => {
    current(time);
  }, [time]);

  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const dayIndex = date.getDay();
  const dayName = days[dayIndex];

  const dateString = tanggal;
  const dateObject = new Date(dateString);

  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  const gambar = weatherData?.current.condition.icon;
  const kondisi = weatherData?.current.condition.text;
  const temp = weatherData?.current.temp_c;
  const feelsLike = weatherData?.current.feelslike_c;
  const sunrise = weatherData?.forecast.forecastday[0].astro.sunrise;
  const sunset = weatherData?.forecast.forecastday[0].astro.sunset;
  const humidity = weatherData?.current.humidity;
  const angin = weatherData?.current.wind_kph;
  const tekanan = weatherData?.current.pressure_mb;
  const awan = weatherData?.current.cloud;
  const visibility = weatherData?.current.vis_km;
  const uv = weatherData?.current.uv;

  const detailsCuaca = [
    {
      nama: "Sunrise",
      deskripsi: "Waktu matahari terbit.",
      icon: "./icon/icon _sunrise.svg",
      data: sunrise,
      info: "./icon/material-symbols_info-outline.svg"
    },
    {
      nama: "Kelembapan",
      deskripsi: " Kelembaban udara, dalam satuan persen.",
      icon: "./icon/icon _humidity.svg",
      data: `${humidity}%`,
      info: "./icon/material-symbols_info-outline.svg"
    },
    {
      nama: "Sunset",
      deskripsi: "Waktu matahari terbenam.",
      icon: "./icon/icon _sunset.svg",
      data: sunset,
      info: "./icon/material-symbols_info-outline.svg"
    },
    {
      nama: "Angin",
      deskripsi: "Kecepatan angin maksimum dalam kilometer per jam.",
      icon: "./icon/icon _strong wind.svg",
      data: `${angin} km/j`,
      info: "./icon/material-symbols_info-outline.svg"
    },
    {
      nama: "Tekanan",
      deskripsi: "Tekanan atmosfer dalam milibar.",
      icon: "./icon/cbi_air-presure.svg",
      data: `${tekanan} mb`,
      info: "./icon/material-symbols_info-outline.svg"
    },
    {
      nama: "Awan",
      deskripsi: "Persentase keberawan pada waktu tertentu, dalam satuan persen.",
      icon: "./icon/icon _cloudy.svg",
      data: `${awan}%`,
      info: "./icon/material-symbols_info-outline.svg"
    },
    {
      nama: "Visibility",
      deskripsi: "Jarak pandang dalam kilometer.",
      icon: "./icon/material-symbols_visibility-outline.svg",
      data: `${visibility} km`,
      info: "./icon/material-symbols_info-outline.svg"
    },
    {
      nama: "UV Index",
      deskripsi: "Indeks UV (Ultraviolet).",
      icon: "./icon/UV.svg",
      data: `${uv}`,
      info: "./icon/material-symbols_info-outline.svg"
    }
  ];

  return (
    <div className='px-8 py-5 max-w-96 bg-gradient-to-b from-[#2080BF] to-[#0F3C59] rounded-2xl text-white'>
      <h1 className='text-base'>
        Cuaca Hari Ini di <span className='block font-semibold capitalize'>{currentLocation}</span>
      </h1>
      <div className='mt-3 flex justify-center items-end gap-4'>
        <h1 className='text-4xl font-semibold'>{time}</h1>
        <h1 className='text-base'>
          {dayName}, {formattedDate}
        </h1>
      </div>
      <div className='mt-3 flex justify-center items-center gap-12'>
        <div className='flex flex-col justify-center items-center'>
          <img src={gambar} alt='logo' />
          <h3 className='font-semibold text-center w-full h-8 leading-4 content-center'>{kondisi}</h3>
        </div>
        <div>
          <h1 className='text-4xl font-black'>{temp}°C</h1>
          <div className='flex items-end gap-2'>
            <h3 className='mt-2 text-xs font-normal'>
              Terasa <span className='block'>Seperti</span>
            </h3>
            <h3>{feelsLike}°C</h3>
          </div>
        </div>
      </div>
      <div className='mt-2 flex flex-col items-center'>
        {/* <h3 className='text-lg font-extrabold w-full text-start'>Detail Cuaca</h3> */}
        <div className='grid grid-cols-3 gap-5 mt-4 text-sm'>
          {detailsCuaca.map((data, i) => (
            <div key={i} className='w-24 h-16 flex flex-col justify-center items-center'>
              <img src={data.icon} alt={data.nama} />
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSidebar;
