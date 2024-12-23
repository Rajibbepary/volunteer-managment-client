import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'
import ErrorPage from '../pages/ErrorPage'
import PrivateRoute from './PrivateRoute'
import BidRequests from '../pages/BidRequests'
import Allvolunteer from '../pages/Allvolunteer'
import Addvolunteer from '../pages/Addvolunteer'
import MyPostedVolunteer from '../pages/MyPostedVolunteer'
import UpdateVolunteer from '../pages/UpdateVolunteer'
import VolunteerDetails from '../pages/VolunteerDetails'
import MyVolunter from '../pages/MyVolunter'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/volunteer',
        element: <Allvolunteer/>
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Register />,
      },
      {
        path: '/volunter/:id',
        element: (
          <PrivateRoute>
           <VolunteerDetails/>
          </PrivateRoute>
        ),
      },
      {
        path: '/update/:id',
        element: (
          <PrivateRoute>
            <UpdateVolunteer/>
          </PrivateRoute>
        ),
      },
      {
        path: '/add-volunteer',
        element: (
          <PrivateRoute>
            <Addvolunteer/>
          </PrivateRoute>
        ),
      },
      {
        path: '/my-volunteer',
        element: (
          <PrivateRoute>
            <MyVolunter/>
          </PrivateRoute>
        ),
      },
      {
        path: '/my-posted-volunteer',
        element: (
          <PrivateRoute>
            <MyPostedVolunteer/>
          </PrivateRoute>
        ),
      },
      {
        path: '/bid-requests',
        element: (
          <PrivateRoute>
            <BidRequests />
          </PrivateRoute>
        ),
      },
    ],
  },
])

export default router
