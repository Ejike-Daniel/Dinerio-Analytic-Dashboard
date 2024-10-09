import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverPanel,
    Transition
} from '@headlessui/react'
import { Fragment } from 'react'
import classNames from 'classnames'
import profile from '../../assets/profile.jpg'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()
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
                <Popover className={'relative'}>
                    {({ open }) => (
                        <>
                            <PopoverButton
                                className={classNames(
                                    open && 'bg-gray-100',
                                    'p-1.5 rounded-full inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                                )}
                            >
                                <HiOutlineBell fontSize={24} />
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
                                        <strong className="text-gray-700 font-medium">Notifications</strong>
                                        <div className="mt-2 py-1 text-sm">This is notifications panel.</div>
                                    </div>
                                </PopoverPanel>
                            </Transition>
                        </>
                    )}
                </Popover>

                <Menu as={'div'} className="relative ">
                    <MenuButton className="ml-2 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                        <span className="sr-only">Dinerio User Menu</span>
                        <div
                            className="h-10 w-10 bg-sky-500 bg-cover bg-no-repeat bg-center rounded-full"
                            style={{ backgroundImage: `url(${profile})` }}
                        >
                            <span className="sr-only">Mark Dinerio</span>
                        </div>
                    </MenuButton>
                    <MenuItems
                        transition
                        anchor="bottom end"
                        className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                        <MenuItem>
                            {({ active }) => (
                                <div
                                    onClick={() => navigate('/profile')}
                                    className={classNames(
                                        active && 'bg-gray-100',
                                        'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                                    )}
                                >
                                    Your Profile
                                </div>
                            )}
                        </MenuItem>
                        <MenuItem>
                            {({ active }) => (
                                <div
                                    onClick={() => navigate('/settings')}
                                    className={classNames(
                                        active && 'bg-gray-100',
                                        'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                                    )}
                                >
                                    Settings
                                </div>
                            )}
                        </MenuItem>
                        <MenuItem>
                            {({ active }) => (
                                <div
                                    className={classNames(
                                        active && 'bg-gray-100',
                                        'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                                    )}
                                >
                                    Sign out
                                </div>
                            )}
                        </MenuItem>
                    </MenuItems>
                </Menu>
            </div>
        </header>
    )
}
