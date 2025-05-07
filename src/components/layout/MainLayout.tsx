import { FC } from 'react'
import { Link, Outlet, useLocation } from "react-router"

import Sidebar from "./Sidebar"
import MobileSidebar from "./MobileSidebar"

const MainLayout: FC = () => {
    const { pathname } = useLocation();
    return (
        <div className="max-w-[1080px] mx-auto min-h-screen py-6 lg:py-12 px-5">
            <div className="flex flex-col gap-0 items-center w-full md:flex-row md:items-start md:gap-5">
                {/* Sidebar for Desktop */}
                <Sidebar />

                {/* Mobile Sidebar */}
                <MobileSidebar />

                {/* Content */}
                <div className="relative flex-1 px-4 py-6 mt-12 w-full rounded-2xl border bg-neutral-800 border-neutral-600 md:px-8 lg:mt-0">
                    {/* Navigation Links - Redesigned for better mobile responsiveness */}
                    <div className="hidden top-0 right-0 flex-col gap-1 justify-center items-center p-2 mb-4 w-full rounded-xl border lg:flex md:w-auto md:absolute sm:flex-row sm:flex-wrap sm:justify-end sm:gap-1 md:gap-1 sm:px-3 md:px-4 sm:py-1 sm:mb-6 md:mb-0 bg-neutral-700 border-neutral-600 md:rounded-tr-2xl md:rounded-bl-2xl md:rounded-tl-none md:rounded-br-none">
                        <Link to="/" className={`w-full sm:w-auto px-3 py-1 sm:py-1 text-center cursor-pointer transition-colors duration-500 font-title text-xs md:text-sm 
                                             ${pathname === "/" ? "text-amber-400 bg-neutral-800/50 rounded-lg" : "text-white hover:bg-neutral-800/30 rounded-lg"}`}>
                            About
                        </Link>
                        <Link to="/experiences" className={`w-full sm:w-auto px-3 py-1 sm:py-1 text-center cursor-pointer transition-colors duration-500 font-title text-xs md:text-sm 
                                                 ${pathname === "/experiences" ? "text-amber-400 bg-neutral-800/50 rounded-lg" : "text-white hover:bg-neutral-800/30 rounded-lg"}`}>
                            Experiences
                        </Link>
                        <Link to="/projects" className={`w-full sm:w-auto px-3 py-1 sm:py-1 text-center cursor-pointer transition-colors duration-500 font-title text-xs md:text-sm 
                                                ${pathname.startsWith("/projects") ? "text-amber-400 bg-neutral-800/50 rounded-lg" : "text-white hover:bg-neutral-800/30 rounded-lg"}`}>
                            Projects
                        </Link>
                        <Link to="/certifications" className={`w-full sm:w-auto px-3 py-1 sm:py-1 text-center cursor-pointer transition-colors duration-500 font-title text-xs md:text-sm 
                                                ${pathname === "/certifications" ? "text-amber-400 bg-neutral-800/50 rounded-lg" : "text-white hover:bg-neutral-800/30 rounded-lg"}`}>
                            Certifications
                        </Link>
                        <Link to="/blogs" className={`w-full sm:w-auto px-3 py-1 sm:py-1 text-center cursor-pointer transition-colors duration-500 font-title text-xs md:text-sm 
                                             ${pathname.startsWith("/blogs") ? "text-amber-400 bg-neutral-800/50 rounded-lg" : "text-white hover:bg-neutral-800/30 rounded-lg"}`}>
                            Blogs
                        </Link>
                        <Link to="/education" className={`w-full sm:w-auto px-3 py-1 sm:py-1 text-center cursor-pointer transition-colors duration-500 font-title text-xs md:text-sm 
                                                 ${pathname === "/education" ? "text-amber-400 bg-neutral-800/50 rounded-lg" : "text-white hover:bg-neutral-800/30 rounded-lg"}`}>
                            Education
                        </Link>
                        <Link to="/feedbacks" className={`w-full sm:w-auto px-3 py-1 sm:py-1 text-center cursor-pointer transition-colors duration-500 font-title text-xs md:text-sm 
                                                ${pathname === "/feedbacks" ? "text-amber-400 bg-neutral-800/50 rounded-lg" : "text-white hover:bg-neutral-800/30 rounded-lg"}`}>
                            Feedbacks
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