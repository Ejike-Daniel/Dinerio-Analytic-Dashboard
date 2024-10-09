import { IoBagHandle } from 'react-icons/io5'
import { FaCartShopping, FaChartPie, FaUsers } from 'react-icons/fa6'

export default function DashboardStatsGrid() {
    return (
        <section className="flex gap-4 w-full">
            <BoxWrapper>
                <div className=" flex items-center justify-center bg-sky-500 rounded-full w-12 h-12">
                    <IoBagHandle className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className=" text-sm text-gray-500 font-light">Total Sales</span>
                    <div className="flex items-center">
                        <strong className="text-xl font-semibold">$54232</strong>
                        <span className="text-sm text-green-500 pl-2">+343</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className=" flex items-center justify-center bg-orange-600 rounded-full w-12 h-12">
                    <FaChartPie className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className=" text-sm text-gray-500 font-light">Total Expenses</span>
                    <div className="flex items-center">
                        <strong className="text-xl font-semibold">$23232</strong>
                        <span className="text-sm text-red-500 pl-2">-234</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className=" flex items-center justify-center bg-yellow-400 rounded-full w-12 h-12">
                    <FaUsers className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className=" text-sm text-gray-500 font-light">Total Customers</span>
                    <div className="flex items-center">
                        <strong className="text-xl font-semibold">232</strong>
                        <span className="text-sm text-green-500 pl-2">+43</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className=" flex items-center justify-center bg-green-600 rounded-full w-12 h-12">
                    <FaCartShopping className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className=" text-sm text-gray-500 font-light">Total Orders</span>
                    <div className="flex items-center">
                        <strong className="text-xl font-semibold">4232</strong>
                        <span className="text-sm text-red-500 pl-2">-343</span>
                    </div>
                </div>
            </BoxWrapper>
        </section>
    )
}

function BoxWrapper({ children }) {
    return <div className="bg-white rounded-sm p-4 flex-1 flex items-center border border-gray-400">{children}</div>
}
