import { FC, useState } from 'react'
import { Link, useLocation } from "react-router"
import GetIcon from "@/components/common/GetIcon"
import { INFO } from "@/data/constants/info.const"

const MobileSidebar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const shows = ['phone', 'location', 'email'];
    const { pathname } = useLocation();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative z-50 lg:hidden">
            {/* Hamburger Button - Fixed at the top */}
            <button
                onClick={toggleSidebar}
                className="flex fixed top-4 right-4 z-50 justify-center items-center w-10 h-10 rounded-md border shadow-lg bg-neutral-800 border-neutral-600"
                aria-label="Toggle sidebar"
            >
                <div className="flex flex-col gap-1 justify-center items-center w-6 h-6">
                    <span className={`block w-5 h-0.5 bg-amber-400 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-5 h-0.5 bg-amber-400 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block w-5 h-0.5 bg-amber-400 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
            </button>

            {/* Dropdown Sidebar */}
            <div className={`fixed top-0 left-0 w-full bg-neutral-900/90 backdrop-blur-sm transition-all duration-500 z-40 ${isOpen ? 'h-auto opacity-100' : 'h-0 opacity-0 pointer-events-none'} overflow-hidden`}>
                <div className="p-4 pt-16 pb-6 border-b bg-neutral-800 border-neutral-600">
                    {/* Navigation Links */}
                    <div className="py-2 mb-6 w-full rounded-lg bg-neutral-700/50">
                        <nav className="grid grid-cols-1 gap-1 px-2 py-1">
                            <Link
                                to="/"
                                onClick={closeSidebar}
                                className={`px-4 py-2 rounded-md font-title font-medium text-sm
                                           ${pathname === "/" ? "bg-neutral-800 text-amber-400" : "text-white hover:bg-neutral-800/70"}`}
                            >
                                About
                            </Link>
                            <Link
                                to="/education"
                                onClick={closeSidebar}
                                className={`px-4 py-2 rounded-md font-title font-medium text-sm
                                           ${pathname === "/education" ? "bg-neutral-800 text-amber-400" : "text-white hover:bg-neutral-800/70"}`}
                            >
                                Education
                            </Link>
                            <Link
                                to="/experiences"
                                onClick={closeSidebar}
                                className={`px-4 py-2 rounded-md font-title font-medium text-sm
                                           ${pathname === "/experiences" ? "bg-neutral-800 text-amber-400" : "text-white hover:bg-neutral-800/70"}`}
                            >
                                Experiences
                            </Link>
                            <Link
                                to="/projects"
                                onClick={closeSidebar}
                                className={`px-4 py-2 rounded-md font-title font-medium text-sm
                                           ${pathname.startsWith("/projects") ? "bg-neutral-800 text-amber-400" : "text-white hover:bg-neutral-800/70"}`}
                            >
                                Projects
                            </Link>
                            <Link
                                to="/certifications"
                                onClick={closeSidebar}
                                className={`px-4 py-2 rounded-md font-title font-medium text-sm
                                           ${pathname === "/certifications" ? "bg-neutral-800 text-amber-400" : "text-white hover:bg-neutral-800/70"}`}
                            >
                                Certifications
                            </Link>
                            <Link
                                to="/feedbacks"
                                onClick={closeSidebar}
                                className={`px-4 py-2 rounded-md font-title font-medium text-sm
                                           ${pathname === "/feedbacks" ? "bg-neutral-800 text-amber-400" : "text-white hover:bg-neutral-800/70"}`}
                            >
                                Feedbacks
                            </Link>
                            <Link
                                to="/blogs"
                                onClick={closeSidebar}
                                className={`px-4 py-2 rounded-md font-title font-medium text-sm
                                           ${pathname.startsWith("/blogs") ? "bg-neutral-800 text-amber-400" : "text-white hover:bg-neutral-800/70"}`}
                            >
                                Blogs
                            </Link>
                            <Link
                                to="/contact"
                                onClick={closeSidebar}
                                className={`px-4 py-2 rounded-md font-title font-medium text-sm
                                           ${pathname === "/contact" ? "bg-neutral-800 text-amber-400" : "text-white hover:bg-neutral-800/70"}`}
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                        {/* Profile Image */}
                        <img
                            src={INFO.image}
                            alt={INFO.name}
                            className="object-cover w-16 h-16 rounded-xl border border-neutral-600"
                        />
                        <div>
                            <h1 className="text-lg font-bold text-white font-title">{INFO.name}</h1>
                            <p className="px-2 py-1 text-xs text-white rounded-md bg-neutral-700 font-body w-fit">{INFO.role}</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 rounded-full my-4"></div>

                    {/* Contact Information */}
                    <div className="grid grid-cols-1 gap-3 w-full text-white">
                        {shows.map((value) => (
                            <div key={value} className="flex gap-3 items-center">
                                <div className="min-w-[32px] w-8 h-8 bg-neutral-700 rounded-md grid place-items-center">
                                    <GetIcon icon={value} className="text-amber-400" />
                                </div>
                                <div className="overflow-hidden">
                                    <h6 className="text-xs font-bold uppercase truncate text-white/90 font-title">{value}</h6>
                                    <p className="text-xs truncate font-body">{INFO[value as keyof typeof INFO]}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6 justify-center items-center mt-4 w-full">
                        {INFO.facebook && (
                            <a href={INFO.facebook} target="_blank" rel="noopener noreferrer" className="text-white transition-colors hover:text-amber-400">
                                <GetIcon icon="facebook" className="text-xl" />
                            </a>
                        )}
                        {INFO.linkedin && (
                            <a href={INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-white transition-colors hover:text-amber-400">
                                <GetIcon icon="linkedin" className="text-xl" />
                            </a>
                        )}
                        {INFO.github && (
                            <a href={INFO.github} target="_blank" rel="noopener noreferrer" className="text-white transition-colors hover:text-amber-400">
                                <GetIcon icon="github" className="text-xl" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileSidebar; 