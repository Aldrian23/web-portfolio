import React from 'react'
import { Outlet } from "react-router"

const MainLayout = () => {
    return (
        <main className="h-screen overflow-x-hidden">
            <Outlet />
        </main>
    )
}

export default MainLayout