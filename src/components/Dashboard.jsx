import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
            <p> Dashboard </p>
            <Link to={'products'} className='text-purple-500'>Go to the product page </Link>
        </div>
    )
}
