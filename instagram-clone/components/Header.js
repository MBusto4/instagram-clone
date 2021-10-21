import Image from "next/image"
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    HomeIcon,
} from "@heroicons/react/outline"

function Header() {
    return (
        <div className='shadow-md border-b'>
            <div className="flex justify-between bg-white sticky top-0 z-1 max-w-6xl mx-5 lg:mx-auto">
                <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
                    <Image
                        src='https://links.papareact.com/ocw'
                        objectFit="contain"
                        layout='fill'
                    />
                </div>
                <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer mt-'>
                    <Image
                        src='https://links.papareact.com/jjm'
                        objectFit="contain"
                        layout='fill'
                    />
                </div>
                {/* Center */}
                <div className='max-w-xs'>
                    <div className='relative mt-1 p-3 rounded-md'>
                        <div className='absolute inset-y-0 pl-3 flex items-center 
                    pointer-events-none'>
                            <SearchIcon className='h-5 w-5 text-gray-500' />
                        </div>
                        <input
                            className='bg-gray-100 block w-full pl-10 sm:text-sm 
                    border-gray-300 focus:ring-black focus:border-black rounded-md'
                            type="text" p
                            laceholder='Search' />
                    </div>
                </div>

                {/* Right */}

                <div className='flex items-center justify-end space-x-4'>
                    <HomeIcon className='navButton' />
                    <MenuIcon className='h-6 md:hidden cursor-pointer' />
                    <div className='relative navButton'>
                        <PaperAirplaneIcon className='navButton rotate-45 pb-0.5' />
                        <div className='absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500
                        rounded-full flex items-center justify-center animate-pulse text-white' >3</div>
                    </div>
                    <PlusCircleIcon className='navButton' />
                    <UserGroupIcon className='navButton' />
                    <HeartIcon className='navButton' />
                    <img
                        className='h-10 rounded-full cursor-pointer'
                        src="https://media-exp1.licdn.com/dms/image/C4E03AQG5LSCpjfG0jA/profile-displayphoto-shrink_200_200/0/1615845650471?e=1634774400&v=beta&t=RR_qNwmKQ8uGymldmunIkXZZsO4SOZ3Gf1YyvYbEsbQ" alt="" />

                </div>


            </div>
        </div>
    )
}

export default Header
