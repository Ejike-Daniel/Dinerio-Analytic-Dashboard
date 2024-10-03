import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'
import { Popover, PopoverButton } from '@headlessui/react'

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
                            <PopoverButton className={''}>
                                <HiOutlineChatAlt fontSize={24} />
                            </PopoverButton>
                        </>
                    )}
                </Popover>

                <HiOutlineBell fontSize={24} />
            </div>
        </header>
    )
}
