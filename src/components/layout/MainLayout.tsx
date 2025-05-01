import { FC } from 'react'
import { Link, Outlet, useLocation } from "react-router"

import Sidebar from "./Sidebar"

const MainLayout: FC = () => {
    const { pathname } = useLocation();
    return (
        <div className="max-w-[1080px] mx-auto min-h-screen py-6 md:py-12 px-4 md:px-0">
            <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-0 md:gap-5">
                {/* Sidebar */}
                <Sidebar />

                {/* Content */}
                <div className="flex-1 w-full bg-neutral-800 border border-neutral-600 rounded-2xl py-6 px-4 md:px-8 relative mt-6 md:mt-0">
                    <div className="h-auto md:h-16 absolute top-0 right-0 flex flex-wrap md:inline-flex items-center px-2 md:px-6 py-2 space-x-1 md:space-x-4 bg-neutral-700 border border-b-neutral-500 border-t-neutral-700 border-l-neutral-500 border-r-neutral-700 rounded-tr-2xl rounded-bl-2xl overflow-auto">
                        <Link to="/" className={`px-2 md:px-4 py-1 cursor-pointer inline-flex items-center transition-colors duration-500 font-title ${pathname === "/" ? "text-amber-400 hover:text-amber-400/60" : "text-white hover:text-white/60"}`}>
                            About
                        </Link>
                        <Link to="/education" className={`px-2 md:px-4 py-1 cursor-pointer inline-flex items-center transition-colors duration-500 font-title ${pathname === "/education" ? "text-amber-400 hover:text-amber-400/60" : "text-white hover:text-white/60"}`}>
                            Education
                        </Link>
                        <Link to="/feedbacks" className={`px-2 md:px-4 py-1 cursor-pointer inline-flex items-center transition-colors duration-500 font-title ${pathname === "/feedbacks" ? "text-amber-400 hover:text-amber-400/60" : "text-white hover:text-white/60"}`}>
                            Feedbacks
                        </Link>
                        <Link to="/blogs" className={`px-2 md:px-4 py-1 cursor-pointer inline-flex items-center transition-colors duration-500 font-title ${pathname.startsWith("/blogs") ? "text-amber-400 hover:text-amber-400/60" : "text-white hover:text-white/60"}`}>
                            Blogs
                        </Link>
                        <Link to="/contact" className={`px-2 md:px-4 py-1 cursor-pointer inline-flex items-center transition-colors duration-500 font-title ${pathname === "/contact" ? "text-amber-400 hover:text-amber-400/60" : "text-white hover:text-white/60"}`}>
                            Contact
                        </Link>
                    </div>
                    <div className="pt-6 sm:pt-14 lg:pt-0">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainLayout