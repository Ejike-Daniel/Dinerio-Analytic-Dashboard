// import { Link } from 'react-router-dom'
import BuyProfileChart from './BuyProfileChart'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-4">
            <DashboardStatsGrid />
            <div className="flex w-full gap-4">
                <TransactionChart />
                <BuyProfileChart />
            </div>
        </div>
    )
}
