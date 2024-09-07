import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Onboardingone from './components/Onboardingone/Onboardingone.jsx'
import Onboardingtwo from './components/Onboardingtwo/Onboardingtwo.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/Onboardingone', element: <Onboardingone/>},
  {path: '/Onboardingtwo', element: <Onboardingtwo/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
