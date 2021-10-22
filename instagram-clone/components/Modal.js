import { Fragment } from 'react'
import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom"
import { Dialog, Transition } from "@headlessui/react"


function Modal() {

    const [open, setOpen] = useRecoilState(modalState)


    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as='div'
                className='fixed z-10 inset-0 overscroll-y-auto'
                onClose={setOpen}
            >
                <div className='flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration 500ms'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration 300ms'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
                    </Transition.Child>


                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Modal
