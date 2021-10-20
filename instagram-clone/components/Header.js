import Image from "next/image"
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    HomeIcon,
} from "@heroicons/react/solid"

function Header() {
    return (
        <div>
            <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto">
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
                    <PaperAirplaneIcon className='navButton' />
                </div>


            </div>
        </div>
    )
}

export default Header
