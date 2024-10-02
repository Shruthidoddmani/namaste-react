import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Body from './component/Body';
import About from './component/About';
import Contact from './component/Contact';
import Error from './component/Error';
import RestaurantMenu from './component/RestaurantMenu'

import '/index.scss';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

/*

Header - 
    logo,
    nav items
body - 
    search,     
    restaurantContainer 
        -restaurant card
            -Img
            -Name of Res, Star rating, cuisine, delivery time
footer - 
    copyright, 
    links,
    address, 
    contact info
*/





const App = () => {
    return (
        <div>
            <Header></Header>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,

            },
            {
                path: '/contact/:resId',
                element: <RestaurantMenu />,

            }
        ],
        errorElement: <Error />
    },

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);