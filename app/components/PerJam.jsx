/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoWaterSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const PerJam = ({ data, currentData }) => {
  // console.log(data);
  const tanggal = data.data.date;
  const dateString = tanggal;
  const dateObject = new Date(dateString);
  const day = dateObject.getDate();

  const date = new Date(tanggal);
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const dayIndex = date.getDay();
  const dayName = days[dayIndex];

  const hours = data.data.hour;
  const current = parseInt(currentData.split(":")[0]);

  const initialSlide = data.label === "Hari Ini" ? current : 0;

  return (
    <div>
      <div className='py-2 text-xs mt-1'>{data.label === "Hari Ini" ? "Hari Ini" : `${dayName} ${day}`}</div>
      <div className='swiper-wrapper flex gap-2'>
        <Swiper
          pagination={{
            dynamicBullets: true
          }}
          modules={[Pagination]}
          spaceBetween={10}
          initialSlide={initialSlide}
          breakpoints={{
            320: {
              slidesPerView: 3
            },
            540: {
              slidesPerView: 4
            },
            640: {
              slidesPerView: 5
            },
            768: {
              slidesPerView: 6
            },
            1024: {
              slidesPerView: 7
            }
          }}
          className=''
        >
          {hours.map((hour, i) => (
            <SwiperSlide key={i} className=''>
              <div className={`mt-1 w-24 h-52 bg-[#2482c0] rounded-lg p-2 flex flex-col items-center justify-between cursor-pointer ${i === current ? "border-y-2" : ""} `}>
                <div className='flex flex-col items-center gap-2'>
                  <div className='text-xs'>{i === current && data.label === "Hari Ini" ? "Sekarang" : `${hour.time.split(" ")[1]}`}</div>
                  <img src={hour.condition.icon} alt='icon' className='' />
                  <h3 className='text-xs text-center '>{hour.condition.text}</h3>
                </div>
                <div className='text-xs flex flex-col items-center gap-1'>
                  <div className='flex items-center gap-0.5'>
                    <IoWaterSharp />
                    {hour.chance_of_rain}%
                  </div>
                  <div>{hour.wind_kph}km/j</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PerJam;
