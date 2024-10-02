import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './components/Dashboard'
import Products from './components/Products'

function App() {
    return (
        <>
            <RouterProvider
                router={createBrowserRouter([
                    {
                        path: '/',
                        element: <Layout />,
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
