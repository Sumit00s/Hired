import React from 'react'
import { Button } from './components/ui/button'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/landing-page'
import Onboarding from './pages/Onboarding'
import JobListing from './pages/job-listing'
import JobPage from './pages/job'
import SavedJobs from './pages/saved-job'
import MyJobs from './pages/my-jobs'
import PostJobs from './pages/post-jobs'

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>
      },
      {
        path:'/onboarding',
        element:<Onboarding/>
      },
      {
        path:'/jobs',
        element:<JobListing/>
      },
      {
        path:'/job/:id',
        element:<JobPage/>
      },
      {
        path:'/post-job',
        element:<PostJobs/>
      },
      {
        path:'/saved-job',
        element:<SavedJobs/>
      },
      {
        path:'/my-jobs',
        element:<MyJobs/>
      },
    ]
  }
])

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  )
}

export default App