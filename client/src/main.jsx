import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from "./Pages/Home/Home.jsx"
import Signup from "./Pages/Singup/Signup.jsx"
import Login from './Pages/Login/Login.jsx'
import Layout from './Layout.jsx'
import AddLocation from './Pages/Addlocation/Addlocation.jsx'
import LocationPage from './Pages/LocationPage/LocationPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='signup' element={<Signup />} />
      <Route path='login' element={<Login />} />
      <Route path='addyours' element={<AddLocation />}/>
      <Route path="location/:id" element={<LocationPage />} />
      <Route path='*' element={<h1 className='text-center text-3xl text-bold'>Not Found</h1>} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)