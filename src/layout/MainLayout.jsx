//react router dom import
import { Outlet } from "react-router-dom";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

//props

function MainLayout() {
  return (
    <>
        <Navbar/>
        <main className="site-container">
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default MainLayout