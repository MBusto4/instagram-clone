import React from 'react'
import { signOut, useSession } from "next-auth/react"

function MiniProfile() {
    const { data: sessionData } = useSession()
    console.log('This is your SessionData--->', sessionData)
    return (
        <div className='flex items-center justify-between m-14 ml-10'>

            <img className='rounded-full border p-[2px] w-16 h-16' src={sessionData?.user?.image} alt="" />

            <div className='flex-1 mx-4'>
                <h2 className='font-bold'>{sessionData?.user?.username}</h2>
                <h3 className='text-sm text-gray-400'>welcome</h3>
            </div>

            <button onClick={signOut} className='text-blue-400 text-sm font-semibold'>Sign Out</button>
        </div>
    )
}

export default MiniProfile
