import { FcBullish } from 'react-icons/fc'

export default function Sidebar() {
    return (
        <aside className="flex flex-col bg-neutral-900 p-3 w-60 text-white">
            <div>
                <FcBullish/>
                <span>Open</span>
            </div>
            <div className="flex-1">Top</div>
            <div>Bottom</div>
        </aside>
    )
}
