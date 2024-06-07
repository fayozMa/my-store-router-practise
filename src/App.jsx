import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
function App() {
  const routes = createBrowserRouter([
    {
      path:"/",
      element: <MainLayout/>,
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
    }
  ])
  return <RouterProvider router={routes} />
}
export default App
