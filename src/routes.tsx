import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/home/index'
import { Details } from './pages/details'
import { NotFound } from './pages/notfound'
import { Layout } from './components/layout'


const routes = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/detail/:cripto',
                element: <Details/>
            },
            {
                path:'*',
                element: <NotFound/>
            }
        ]
    }
])


export { routes }