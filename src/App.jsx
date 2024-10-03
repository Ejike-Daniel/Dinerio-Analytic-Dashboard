import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './components/Dashboard'
import Products from './components/Products'
import ErrorPage from './components/ErrorPage'

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
                            }
                        ]
                    },
                    {
                        path: 'login',
                        element: <login />
                    }
                ])}
            />
        </>
    )
}

export default App
