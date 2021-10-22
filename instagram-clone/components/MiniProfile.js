import React from 'react'

function MiniProfile() {
    return (
        <div className='flex items-center justify-between m-14 ml-10'>

            <img className='rounded-full border p-[2px] w-16 h-16' src="https://pkimgcdn.peekyou.com/aa27a6431e751f6deaf283dd7551f015.jpeg" alt="" />

            <div className='flex-1 mx-4'>
                <h2 className='font-bold'>hello</h2>
                <h3 className='text-sm text-gray-400'>welcome</h3>
            </div>

            <button className='text-blue-400 text-sm font-semibold'>Sign Out</button>
        </div>
    )
}

export default MiniProfile
