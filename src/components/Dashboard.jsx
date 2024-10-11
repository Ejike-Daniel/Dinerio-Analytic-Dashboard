import BuyProfileChart from './BuyProfileChart'
import DashboardStatsGrid from './DashboardStatsGrid'
import PopularProducts from './PopularProducts'
import RecentOrders from './RecentOrders'
import TransactionChart from './TransactionChart'

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-4">
            <DashboardStatsGrid />
            <div className="flex w-full gap-4">
                <TransactionChart />
                <BuyProfileChart />
            </div>
            <div className="flex w-full gap-4">
                <RecentOrders />
                <PopularProducts />
            </div>
        </div>
    )
}
