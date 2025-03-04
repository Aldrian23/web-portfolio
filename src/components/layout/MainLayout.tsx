
import { FC } from 'react'
import { Link, Outlet, useLocation } from "react-router"

import Sidebar from "./Sidebar"

const MainLayout: FC = () => {
    const { pathname } = useLocation();
    return (
        <div className="max-w-[1080px] mx-auto min-h-screen py-12">
            <div className="w-full flex flex-row items-start gap-5">
                {/* Sidebar */}
                <Sidebar />

                {/* Content */}
                <div className="flex-1 bg-neutral-800 border border-neutral-600 rounded-2xl py-6 px-5 md:px-8 relative">
                    <div className="h-16 absolute top-0 right-0 inline-flex items-center px-6 space-x-4 bg-neutral-700 border border-b-neutral-500 border-t-neutral-700 border-l-neutral-500 border-r-neutral-700 rounded-tr-2xl rounded-bl-2xl overflow-y-auto">
                        <Link to="/" className={"h-full px-4 cursor-pointer inline-flex items-center transition-colors duration-500" + (pathname === "/" ? " text-amber-400 hover:text-amber-400/60" : " text-white hover:text-white/60")}>
                            About
                        </Link>
                        <Link to="/education" className={"h-full px-4 cursor-pointer inline-flex items-center transition-colors duration-500" + (pathname === "/projects" ? " text-amber-400 hover:text-amber-400/60" : " text-white hover:text-white/60")}>
                            Education
                        </Link>
                        <Link to="/feedbacks" className={"h-full px-4 cursor-pointer inline-flex items-center transition-colors duration-500" + (pathname === "/feedbacks" ? " text-amber-400 hover:text-amber-400/60" : " text-white hover:text-white/60")}>
                            Feedbacks
                        </Link>
                        <Link to="/contact" className={"h-full px-4 cursor-pointer inline-flex items-center transition-colors duration-500" + (pathname === "/contact" ? " text-amber-400 hover:text-amber-400/60" : " text-white hover:text-white/60")}>
                            Contact
                        </Link>
                    </div>
                    <Outlet />
                </div>

            </div>
        </div>
    )
}

export default MainLayout