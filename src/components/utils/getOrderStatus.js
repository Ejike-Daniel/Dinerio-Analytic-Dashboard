export function getOrderStatus(status) {
    const baseClasses = 'capitalize py-1 px-2 rounded-md text-xs text-nowrap'
    const formattedStatus = status.replaceAll('_', ' ').toLowerCase()

    switch (status) {
        case 'PLACED':
            return <span className={`${baseClasses} text-sky-600 bg-sky-100`}>{formattedStatus}</span>
        case 'CONFIRMED':
            return <span className={`${baseClasses} text-orange-600 bg-orange-100`}>{formattedStatus}</span>
        case 'SHIPPED':
            return <span className={`${baseClasses} text-teal-600 bg-teal-100`}>{formattedStatus}</span>
        case 'OUT_FOR_DELIVERY':
            return <span className={`${baseClasses} text-yellow-600 bg-yellow-100`}>{formattedStatus}</span>
        case 'DELIVERED':
            return <span className={`${baseClasses} text-green-600 bg-green-100`}>{formattedStatus}</span>
        default:
            return <span className={`${baseClasses} text-gray-600 bg-gray-100`}>{formattedStatus}</span>
    }
}
