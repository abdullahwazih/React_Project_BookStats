import React from 'react'
import NavBar from '../../components/header/nav_bar.jsx'
import Footer from '../../components/footer/footer.jsx'
import { Outlet } from 'react-router'
import '../../css/main.css'

const Root = () => {
    return (
        <>

            

            <div className="main w-full h-screen bg-white text-black">
                <NavBar />
                <Outlet />
                <Footer />
            </div>


        </>
    )
}

export default Root
