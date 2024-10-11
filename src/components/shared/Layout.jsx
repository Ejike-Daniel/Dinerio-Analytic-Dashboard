import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout() {
    return (
        <section className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
            <Sidebar />
            <div className="flex-1 flex flex-col ">
                <Header />
                <div className="flex-1 p-4 min-h-0 overflow-auto">{<Outlet />}</div>
            </div>
        </section>
    )
}
