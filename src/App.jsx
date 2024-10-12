import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './components/Dashboard'
import Products from './components/Products'
import ErrorPage from './components/ErrorPage'
import HelpAndSupport from './components/Help&Support'
import Messages from './components/Messages'
import Orders from './components/Orders'
import Customers from './components/Customers'
import Transactions from './components/Transactions'
import Settings from './components/Settings'
import Login from './components/Login'

function App() {
    return (
        <>
            <RouterProvider
                router={createBrowserRouter([
                    {
                        path: '/',
                        element: <Layout />,
                        errorElement: <ErrorPage />,
                        children: [
                            {
                                index: true,
                                element: <Dashboard />
                            },
                            {
                                path: 'products',
                                element: <Products />
                            },
                            {
                                path: 'orders',
                                element: <Orders />
                            },
                            {
                                path: 'customers',
                                element: <Customers />
                            },
                            {
                                path: 'transactions',
                                element: <Transactions />
                            },
                            {
                                path: 'messages',
                                element: <Messages />
                            },
                            {
                                path: 'settings',
                                element: <Settings />
                            },
                            {
                                path: 'support',
                                element: <HelpAndSupport />
                            }
                        ]
                    },
                    {
                        path: 'login',
                        element: <Login />
                    }
                ])}
            />
        </>
    )
}

export default App
