import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Nav from "./components/Nav"
import { createBrowserRouter , RouterProvider, Outlet } from 'react-router-dom'
import Restaurent from './components/Restaurant'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import { Provider } from 'react-redux'
import store from './assets/store'
import Cart from './components/Cart'
const AppLayout = () => {
  return (
    <Provider store={store} >
    <React.Fragment>
      <Nav />
      <Outlet />
    </React.Fragment>
    </Provider>
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
    {
      path:'/cart',
      element:<Cart />
    },

  ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
