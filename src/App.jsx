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
import { useContext, useEffect } from 'react'
import { GlobalContext } from './context/GlobalContext'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebaseConfig'
//action
import { action as RegisterAction } from './pages/Register'
function App() {
  const {user,dispatch, isAuthChange} = useContext(GlobalContext)
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
      element: user ? <Navigate to="/"/> : <Register/>,
      action: RegisterAction
    }
  ])

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      dispatch({type:"LOG_IN", payload: user})
      dispatch({type:"AUTH_CHANGE"})
    })
  },[])
  return <>{isAuthChange && <RouterProvider router={routes} />}</>
}
export default App
