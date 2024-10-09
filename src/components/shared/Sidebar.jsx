import { FcBullish } from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from './Lib/constants/Navigation'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'

const linkClasses =
    'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
    return (
        <aside className="flex flex-col bg-neutral-900 p-3 w-60 text-white">
            <div className="flex items-center gap-2 px-1 py-3">
                <FcBullish fontSize={24} />           <span className="text-neutral-100 text-lg">Dinerio</span>
            </div>
            <div className="flex-1 gap-0.5 flex flex-col py-8">
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
            </div>
            <div className="flex flex-col gap-0.5 pt-2 border-neutral-700 border-t">
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
                <div className={classNames('text-red-500 cursor-pointer ', linkClasses)}>
                    <span className="text-xl">
                        <HiOutlineLogout />
                    </span>
                    Logout
                </div>
            </div>
        </aside>
    )
}

function SidebarLink({ item }) {
    const { pathname } = useLocation()
    return (
        <Link
            to={item.path}
            className={classNames(
                pathname === item.path ? 'text-white bg-neutral-700' : 'text-neutral-400',
                linkClasses
            )}
        >
            <span className="text-xl">{item.icon}</span>
            {item.label}
        </Link>
    )
}
