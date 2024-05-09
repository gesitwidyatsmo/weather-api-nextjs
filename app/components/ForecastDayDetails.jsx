import React, { useState } from "react";
import Grafik from "./Grafik";
import PerJam from "./PerJam";
import DetailLainnya from "./DetailLainnya";

const ForecastDayDetails = ({ dt, currentData }) => {
  const [navSelect, setNavSelect] = useState("grafik");

  const navs = [
    {
      key: "grafik",
      label: "Grafik",
      data: <Grafik />
    },
    {
      key: "PerJam",
      label: "Per Jam",
      data: <PerJam data={dt} currentData={currentData} />
    },
    {
      key: "DetailLainnya",
      label: "Detail Lainnya",
      data: <DetailLainnya data={dt} />
    }
  ];

  const handleNavClick = (key) => {
    setNavSelect(key);
  };

  const selectedNav = navs.find((nav) => nav.key === navSelect);

  return (
    <div className='p-4 mt-2 w-full h-80 rounded-xl bg-gradient-to-b from-[#2080BF] to-[#0F3C59]'>
      <div className='flex gap-5'>
        {navs.map((nav) => (
          <div key={nav.key} onClick={() => handleNavClick(nav.key)} className='relative'>
            <div className={`text-xs ${navSelect === nav.key ? "text-white font-semibold" : "text-slate-200"} cursor-pointer`}>{nav.label}</div>
            <div className={`absolute w-auto bg-white rounded-full mt-1 h-${navSelect === nav.key ? "1" : "0"} left-0 right-0`}></div>
          </div>
        ))}
      </div>
      <div className='border-b border-gray-400 mt-2'></div>
      <h1>{selectedNav.data}</h1>
    </div>
  );
};

export default ForecastDayDetails;
