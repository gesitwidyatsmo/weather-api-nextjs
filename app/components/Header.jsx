import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Header = ({ onLocationData }) => {
  const [searchData, setSearchData] = useState("");

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      if (searchData.trim() !== "") {
        onLocationData(searchData);
        setSearchData("");
      }
    }
  };

  return (
    <div className='px-4 sm:px-6 md:px-20 flex justify-between items-center w-full h-16 bg-[#0F3C59]'>
      <h1 className='font-extrabold text-lg text-white'>Weather</h1>
      <div className='bg-white w-52 h-10 rounded-lg relative'>
        <input
          type='text'
          placeholder='Search'
          className='w-full h-full pl-2 pr-9 outline-none rounded-full'
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          onKeyDown={handleSearch}
        />
        <button className='absolute top-0 right-0 bottom-0 w-9 h-full bg-transparent border-none' onClick={handleSearch}>
          <IoSearch className='text-gray-400 cursor-pointer' size={25} />
        </button>
      </div>
    </div>
  );
};

export default Header;
