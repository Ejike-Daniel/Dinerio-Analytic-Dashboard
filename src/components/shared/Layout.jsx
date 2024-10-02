import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Layout() {
    return (
        <section className="flex bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar />
            <div>
                <header className="bg-teal-400  p-3">header</header>
                <div>{<Outlet />}</div>
            </div>
        </section>
    )
}
