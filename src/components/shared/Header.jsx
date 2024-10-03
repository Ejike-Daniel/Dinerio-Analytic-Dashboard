import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import classNames from 'classnames'

export default function Header() {
    return (
        <header className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
            <div className="relative">
                <HiOutlineSearch fontSize={20} className="absolute top-1/2 -translate-y-1/2 text-gray-300 left-3" />
                <input
                    type="search"
                    placeholder="Search"
                    className=" border border-gray-300 rounded-sm focus:outline-none pl-11 pr-4 h-10 w-[24rem] active:outline-none text-sm "
                />
            </div>
            <div className="flex items-center gap-2 mr-2">
                <Popover className={'relative'}>
                    {({ open }) => (
                        <>
                            <PopoverButton
                                className={classNames(
                                    open && 'bg-gray-100',
                                    'p-1.5 rounded-full inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                                )}
                            >
                                <HiOutlineChatAlt fontSize={24} />
                            </PopoverButton>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <PopoverPanel className="absolute right-0 z-10 mt-2.5 transform w-80">
                                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                        <strong className="text-gray-700 font-medium">Messages</strong>
                                        <div className="mt-2 py-1 text-sm">This is messages panel.</div>
                                    </div>
                                </PopoverPanel>
                            </Transition>
                        </>
                    )}
                </Popover>

                <HiOutlineBell fontSize={24} />
            </div>
        </header>
    )
}
