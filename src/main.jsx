import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Nav from "./components/Nav"
import { createBrowserRouter , RouterProvider, Outlet } from 'react-router-dom'
import Restaurent from './components/Restaurant'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'

const AppLayout = () => {
  return (
    <React.Fragment>
      <Nav />
      <Outlet />
    </React.Fragment>
  )
}

const approuter = createBrowserRouter([
  {
  path:'/',
  element: <AppLayout />,
  errorElement: <Error />,
  children:[
    {
      path: '/',
      element : <Restaurent />
    },
    {
      path:'/restaurant/:id',
      element: <RestaurantMenu />
    },

  ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
