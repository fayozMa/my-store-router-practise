//routers
import {Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
//components
import ProtectedRoutes from './components/ProtectedRoutes'
//pages
import MainLayout from './layout/MainLayout'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Login from './pages/Login'
import Register from './pages/Register'
//context
import { useContext } from 'react'
import { GlobalContext } from './context/GlobalContext'
function App() {
  const {user} = useContext(GlobalContext)
  const routes = createBrowserRouter([
    {
      path:"/",
      element: <ProtectedRoutes user={user}>
        <MainLayout/>
      </ProtectedRoutes>,
      children: [
        {
          element: <Home/>,
          index: true
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/product/:id",
          element: <Product/>
        }
      ]
    },
    {
      path:"/login",
      element: user ? <Navigate to="/"/> : <Login/>
    },
    {
      path:"/register",
      element: user ? <Navigate to="/"/> : <Register/>
    }
  ])
  return <RouterProvider router={routes} />
}
export default App
