import React from 'react'
import err from '../IMG/Error.png'

function Error() {
    return (
        <>
            <div className='mt-8 w-[100%] h-fit flex justify-center items-center '>
                <img className='size-20' src={err} alt="" />
            </div>
        </>
    )
}

export default Error;