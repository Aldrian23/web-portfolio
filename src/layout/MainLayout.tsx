import React from 'react'
import { Outlet } from "react-router"
import Navbar from "../components/Navbar"

const MainLayout = () => {
    return (
        <main className="relative h-screen overflow-x-hidden">
            <Outlet />
            <Navbar />
        </main>
    )
}

export default MainLayout