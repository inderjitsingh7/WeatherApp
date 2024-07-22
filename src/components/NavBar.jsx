import React from 'react';
import { IoInformationOutline } from "react-icons/io5";

function NavBar() {
    return (
        <>
            <div className='w-full h-[70px] bg-[#3C5B6F] flex items-center justify-between px-[3vw]'>
                <h1 className='text-white font-semibold text-[1.5rem]'>Weather App</h1>

                <div className='w-[35px] h-[35px] rounded-full border-[2px] flex justify-center items-center'>
                    <IoInformationOutline className='text-white text-[22px] font-bold' />
                </div>
            </div>
        </>
    )
}
export default NavBar;