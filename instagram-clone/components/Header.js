import React from 'react'
import Image from "next/image"

function Header() {
    return (
        <div>
            <div className="flex justify-between bg-white max-w-6xl">
                <div className='relative hidden lg:inline-grid h-24 w-24'>
                    <Image
                        src='https://links.papareact.com/ocw'
                        objectFit="contain"
                        layout='fill'
                    />
                </div>
                <div className='relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer'>
                    <Image
                        src='https://links.papareact.com/jjm'
                        objectFit="contain"
                        layout='fill'
                    />
                </div>
                {/* Center */}
                {/* Right */}

            </div>
        </div>
    )
}

export default Header
