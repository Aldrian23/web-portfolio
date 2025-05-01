import { FC } from 'react'
import { Link, Outlet, useLocation } from "react-router"

import Sidebar from "./Sidebar"
import MobileSidebar from "./MobileSidebar"

const MainLayout: FC = () => {
    const { pathname } = useLocation();
    return (
        <div className="max-w-[1080px] mx-auto min-h-screen py-6 lg:py-12 px-5">
            <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-0 md:gap-5">
                {/* Sidebar for Desktop */}
                <Sidebar />

                {/* Mobile Sidebar */}
                <MobileSidebar />

                {/* Content */}
                <div className="flex-1 w-full bg-neutral-800 border border-neutral-600 rounded-2xl py-6 px-4 md:px-8 relative mt-12 lg:mt-0">
                    {/* Navigation Links - Redesigned for better mobile responsiveness */}
                    <div className="hidden lg:flex w-full md:w-auto md:absolute top-0 right-0  flex-col sm:flex-row sm:flex-wrap justify-center sm:justify-end items-center 
                                   gap-2 sm:gap-1 md:gap-2 p-3 sm:px-4 md:px-6 sm:py-2 mb-4 sm:mb-6 md:mb-0
                                   bg-neutral-700 border border-neutral-600 rounded-xl md:rounded-tr-2xl md:rounded-bl-2xl md:rounded-tl-none md:rounded-br-none">
                        <Link to="/" className={`w-full sm:w-auto px-4 py-2 sm:py-1 text-center cursor-pointer transition-colors duration-500 font-title text-sm md:text-base 
                                             ${pathname === "/" ? "text-amber-400 bg-neutral-800/50 rounded-lg" : "text-white hover:bg-neutral-800/30 rounded-lg"}`}>
                            About
                        </Link>
                        <Link to="/education" className={`w-full sm:w-auto px-4 py-2 sm:py-1 text-center cursor-pointer transition-colors duration-500 font-title text-sm md:text-base 
                                                 ${pathname === "/education" ? "text-amber-400 bg-neutral-800/50 rounded-lg" : "text-white hover:bg-neutral-800/30 rounded-lg"}`}>
                            Education
                        </Link>
                        <Link to="/feedbacks" className={`w-full sm:w-auto px-4 py-2 sm:py-1 text-center cursor-pointer transition-colors duration-500 font-title text-sm md:text-base 
                                                ${pathname === "/feedbacks" ? "text-amber-400 bg-neutral-800/50 rounded-lg" : "text-white hover:bg-neutral-800/30 rounded-lg"}`}>
                            Feedbacks
                        </Link>
                        <Link to="/blogs" className={`w-full sm:w-auto px-4 py-2 sm:py-1 text-center cursor-pointer transition-colors duration-500 font-title text-sm md:text-base 
                                             ${pathname.startsWith("/blogs") ? "text-amber-400 bg-neutral-800/50 rounded-lg" : "text-white hover:bg-neutral-800/30 rounded-lg"}`}>
                            Blogs
                        </Link>
                        <Link to="/contact" className={`w-full sm:w-auto px-4 py-2 sm:py-1 text-center cursor-pointer transition-colors duration-500 font-title text-sm md:text-base 
                                              ${pathname === "/contact" ? "text-amber-400 bg-neutral-800/50 rounded-lg" : "text-white hover:bg-neutral-800/30 rounded-lg"}`}>
                            Contact
                        </Link>
                    </div>

                    {/* Page Content */}
                    <div className="pt-0 lg:pt-6">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainLayout