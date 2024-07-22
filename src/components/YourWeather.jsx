import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import Error from "./Error";
import WeatherCont from "./WeatherCont";
import Loder from "./Loder";
import map from '../IMG/map.png'

function YourWeather() {

    const { GrantBtn, latitude, longitude, AllDataYW, ErrorPageYW, LoadingYW ,getUserData} = useContext(AppContext)

    useEffect(()=>{
        getUserData( latitude ,longitude,)
    },[longitude])


    

    return (
        <>
            {
                longitude == null ? (<div className="w-full h-fit flex flex-col justify-center items-center">

                    <img className="size-28 mt-8" src={map} alt="" />

                    <h1 className=" mt-4 text-lg font-semibold text-[#283d4b]">Grant Location Access</h1>
                    <p className="mt-1 ">
                        Allow Access To Get Weather Information
                    </p>

                    <div onClick={() => GrantBtn()}  className=" cursor-pointer mt-4 relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#4e7691] rounded-lg group">
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#3C5B6F] rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                        <span className="relative">Grant Access</span>
                    </div>
                </div>) :
                    (
                        <div className='max-sm:w-full max-sm:bg-transparent w-[500px] p-6  bg-[#EAF5FC]'>
                            {
                                ErrorPageYW == true &&
                                <Error />
                            }
                            {LoadingYW == true &&
                                <Loder />
                            }
                            {
                                AllDataYW == true &&
                                <WeatherCont />
                            }
                        </div>
                    )

            }
        </>
    )
}

export default YourWeather;