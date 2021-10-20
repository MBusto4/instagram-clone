import React from 'react'
import Image from "next/image"

function Header() {
    return (
        <div>
            <h1>I am the header Comp</h1>

            {/* Left */}
            <div>
                <Image
                    src='https://links.papareact.com/ocw'
                    layout='fill'
                />
            </div>
            {/* Center */}
            {/* Right */}
        </div>
    )
}

export default Header
