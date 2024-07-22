import React from "react";
import { NavLink } from "react-router-dom";
import '../components/All.css'

function Switch() {
    return (
        <>
            <div className="w-full h-fit py-[2.5vh] flex justify-center items-center">
                <div className=" shadow-md Switch-Cont select-none cursor-pointer h-fit w-fit flex p-1 py-1 rounded-full gap-2 justify-center items-center bg-[#EAF5FC]">
                    <NavLink to={'/'}>
                        <div className="w-fit h-fit flex py-2 px-4 text-[1rem] font-medium">
                            Your Weather
                        </div>
                    </NavLink>
                    <NavLink to={'/SearchWeather'} >
                        <div className="w-fit h-fit flex py-2 px-4 text-[1rem] font-medium" >
                            Search Weather
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Switch;