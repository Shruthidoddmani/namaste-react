import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Body from './component/Body';
import About from './component/About';
import Contact from './component/Contact';
import Error from './component/Error';

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
                errorElement: <Error />
            },
            {
                path: '/about',
                element: <About />,
                errorElement: <Error />
            },
            {
                path: '/contact',
                element: <Contact />,

            }
        ],
        errorElement: <Error />
    },

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);