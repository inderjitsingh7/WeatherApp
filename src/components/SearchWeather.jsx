import React from 'react';
import { FaMicrophone } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import WeatherCont from './WeatherCont';
import Loder from './Loder';
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import Error from './Error';


function SearchWeather() {


    const { ValueChange, ErrorPageSW, SetErrorPageSW, SetValueChange, WeatherData, GetWeatherData, LoadingSW, AllDataSW, SetAllDataSW } = useContext(AppContext)

    function SWChangeHandel(e) {
        SetValueChange(e.target.value)
        SetAllDataSW(false)
        SetErrorPageSW(false)
    }

   


    return (
        <>
            <div className='max-sm:w-full max-sm:bg-transparent w-[500px] p-6  bg-[#EAF5FC] relative'>
                <h2 className=' font-semibold text-[#325063] text-[22px]'>Search Weather</h2>

                {/* Input */}
                <div className='w-full h-fit flex justify-center mt-3 items-center gap-5 '>

                    <div className='w-[75%] h-fit flex justify-end relative'>
                        <input onChange={SWChangeHandel} type="text" className='h-[45px] rounded-full w-[100%] shadow-md px-2' />

                        {/* Search */}
                        <div onClick={() => GetWeatherData(ValueChange )} className=' cursor-pointer  absolute w-[70px] h-full bg-[#3C5B6F] rounded-r-full flex justify-center items-center'>
                            <IoSearch className='text-[27px] text-white' />
                        </div>
                    </div>


                </div>
                <hr className="h-full my-6 border-[0.3px] border-[#3C5B6F] opacity-70" />


                {/* Weather Show */}
                {ErrorPageSW == true &&
                    <Error />
                }
                {LoadingSW == true &&
                    <Loder />
                }
                {AllDataSW == true &&
                    <WeatherCont />
                }



            </div>

        </>
    )
}

export default SearchWeather;