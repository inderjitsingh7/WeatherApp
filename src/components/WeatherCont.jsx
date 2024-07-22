import React from 'react'
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { IoCloudSharp } from "react-icons/io5";
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import Earth from '../IMG/Earth.png'


function WeatherCont() {

    const { WeatherData, } = useContext(AppContext);

    let date = new Date()
    let Day = date.getDay()
    let d = date.getDate()
    let m = date.getMonth()
    let y = date.getFullYear()

    const Alldays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let Today = Alldays[date.getDay()];


    return (
        <>
            <div className='w-full h-fit flex flex-col'>

                <div className='w-full flex'>

                    <div className='w-[50%] flex flex-col'>
                        {/* Heading */}
                        <h1 className='text-[#325063] font-semibold text-[22px]'> Temperature </h1>

                        {/* Temp */}
                        <div className='w-fit h-fit flex mt-4' >
                            <h1 className='text-4xl font-bold text-[#325063]'>{WeatherData.cod == '404' ? (console.log('temp is not found')) : (WeatherData.cod == '400' ? (console.log('temp is not found')) : (WeatherData.main.temp))}</h1>
                            <h1 className='text-3xl font-bold text-[#325063]' >`C</h1>
                        </div>

                        {/* Location Date */}
                        <div className='w-fit h-fit flex flex-col mt-2'>
                            {/* City */}
                            <h2 className=' font-medium text-[#325063]' >{WeatherData.name}</h2>

                            {/* Date */}
                            <h2 className=' font-medium text-[#325063]' >{Today+' ' + d + ' -' + m + '-' + y}</h2>
                        </div>
                    </div>

                    {/* Weather IMG */}
                    <div className='w-[50%] flex justify-center items-center'>
                        <img className='size-24' src={Earth} alt="" />
                    </div>
                </div>




                {/* Some Info */}

                <div className='w-full flex flex-col mt-6 gap-4'>

                    <div className='w-full h-[70px] flex  bg-[#FFFFFF]'>

                        {/* icon */}
                        <div className='w-[20%] h-[70px] bg-[#325063] flex justify-center items-center'>
                            <WiHumidity className='text-[40px] text-white' />
                        </div>

                        {/* Name */}
                        <div className='w-[60%] h-[70px] flex justify-center items-center'>
                            <h2 className=' font-semibold text-[#325063]' > Humidity</h2>
                        </div>

                        {/* Data */}
                        <div className='w-[20%] h-[70px] flex justify-center items-center font-semibold text-[#325063]'>
                            {
                                WeatherData.cod == '404' ? (console.log('Humidity is not found')) : (WeatherData.cod == null ? (console.log('Data Null')) : (WeatherData.cod == '400' ? (console.log('temp is not found')) : (WeatherData.main.humidity + '%')))

                            }
                        </div>

                    </div>

                    <div className='w-full h-[70px] flex  bg-[#FFFFFF]'>

                        {/* icon */}
                        <div className='w-[20%] h-[70px] bg-[#325063] flex justify-center items-center'>
                            <FiWind className='text-[30px] text-white' />
                        </div>

                        {/* Name */}
                        <div className='w-[60%] h-[70px] flex justify-center items-center'>
                            <h2 className=' font-semibold text-[#325063]' > Wind Speed</h2>
                        </div>

                        {/* Data */}
                        <div className='w-[20%] h-[70px] flex justify-center items-center font-semibold text-[#325063]'>
                            {
                                WeatherData.cod == '404' ? (console.log('Wind Data is not found')) : (WeatherData.cod == null ? (console.log('Data Null')) : (WeatherData.cod == '400' ? (console.log('temp is not found')) : (WeatherData.wind.speed + ' kmh')))

                            }
                        </div>

                    </div>

                    <div className='w-full h-[70px] flex  bg-[#FFFFFF]'>

                        {/* icon */}
                        <div className='w-[20%] h-[70px] bg-[#325063] flex justify-center items-center'>
                            <IoCloudSharp className='text-[30px] text-white' />
                        </div>

                        {/* Name */}
                        <div className='w-[60%] h-[70px] flex justify-center items-center'>
                            <h2 className=' font-semibold text-[#325063]' > Clouds</h2>
                        </div>

                        {/* Data */}
                        <div className='w-[20%] h-[70px] flex justify-center items-center font-semibold text-[#325063] '>
                            {
                                WeatherData.cod == '404' ? (console.log('Cloud Data is not found')) : (WeatherData.cod == null ? (console.log('Data Null')) : (WeatherData.cod == '400' ? (console.log('temp is not found')) : (WeatherData.clouds.all + '%')))

                            }
                        </div>

                    </div>



                </div>

            </div>
        </>
    )
}

export default WeatherCont;