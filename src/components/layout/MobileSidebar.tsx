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
                className="fixed top-4 right-4 z-50 w-10 h-10 bg-neutral-800 border border-neutral-600 rounded-md flex items-center justify-center shadow-lg"
                aria-label="Toggle sidebar"
            >
                <div className="w-6 h-6 flex flex-col justify-center items-center gap-1">
                    <span className={`block w-5 h-0.5 bg-amber-400 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-5 h-0.5 bg-amber-400 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block w-5 h-0.5 bg-amber-400 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
            </button>

            {/* Dropdown Sidebar */}
            <div className={`fixed top-0 left-0 w-full bg-neutral-900/90 backdrop-blur-sm transition-all duration-500 z-40 ${isOpen ? 'h-auto opacity-100' : 'h-0 opacity-0 pointer-events-none'} overflow-hidden`}>
                <div className="bg-neutral-800 border-b border-neutral-600 p-4 pt-16 pb-6">
                    {/* Navigation Links */}
                    <div className="w-full mb-6 py-2 bg-neutral-700/50 rounded-lg">
                        <nav className="grid grid-cols-1 gap-1 px-2 py-1">
                            <Link
                                to="/"
                                onClick={closeSidebar}
                                className={`px-4 py-2 rounded-md font-title font-medium text-sm flex items-center gap-3
                                           ${pathname === "/" ? "bg-neutral-800 text-amber-400" : "text-white hover:bg-neutral-800/70"}`}
                            >
                                About
                            </Link>
                            <Link
                                to="/education"
                                onClick={closeSidebar}
                                className={`px-4 py-2 rounded-md font-title font-medium text-sm flex items-center gap-3
                                           ${pathname === "/education" ? "bg-neutral-800 text-amber-400" : "text-white hover:bg-neutral-800/70"}`}
                            >
                                <GetIcon icon="education" className={pathname === "/education" ? "text-amber-400" : "text-white"} />
                                Education
                            </Link>
                            <Link
                                to="/feedbacks"
                                onClick={closeSidebar}
                                className={`px-4 py-2 rounded-md font-title font-medium text-sm flex items-center gap-3
                                           ${pathname === "/feedbacks" ? "bg-neutral-800 text-amber-400" : "text-white hover:bg-neutral-800/70"}`}
                            >
                                <GetIcon icon="feedback" className={pathname === "/feedbacks" ? "text-amber-400" : "text-white"} />
                                Feedbacks
                            </Link>
                            <Link
                                to="/blogs"
                                onClick={closeSidebar}
                                className={`px-4 py-2 rounded-md font-title font-medium text-sm flex items-center gap-3
                                           ${pathname.startsWith("/blogs") ? "bg-neutral-800 text-amber-400" : "text-white hover:bg-neutral-800/70"}`}
                            >
                                <GetIcon icon="blog" className={pathname.startsWith("/blogs") ? "text-amber-400" : "text-white"} />
                                Blogs
                            </Link>
                            <Link
                                to="/contact"
                                onClick={closeSidebar}
                                className={`px-4 py-2 rounded-md font-title font-medium text-sm flex items-center gap-3
                                           ${pathname === "/contact" ? "bg-neutral-800 text-amber-400" : "text-white hover:bg-neutral-800/70"}`}
                            >
                                <GetIcon icon="contact" className={pathname === "/contact" ? "text-amber-400" : "text-white"} />
                                Contact
                            </Link>
                        </nav>
                    </div>

                    <div className="flex flex-row items-center gap-4">
                        {/* Profile Image */}
                        <img
                            src={INFO.image}
                            alt={INFO.name}
                            className="w-16 h-16 rounded-xl object-cover border border-neutral-600"
                        />
                        <div>
                            <h1 className="text-lg font-bold font-title text-white">{INFO.name}</h1>
                            <p className="text-xs py-1 px-2 bg-neutral-700 rounded-md font-body w-fit text-white">{INFO.role}</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 rounded-full my-4"></div>

                    {/* Contact Information */}
                    <div className="w-full text-white grid grid-cols-1 gap-3">
                        {shows.map((value) => (
                            <div key={value} className="flex items-center gap-3">
                                <div className="min-w-[32px] w-8 h-8 bg-neutral-700 rounded-md grid place-items-center">
                                    <GetIcon icon={value} className="text-amber-400" />
                                </div>
                                <div className="overflow-hidden">
                                    <h6 className="text-xs uppercase font-bold text-white/90 font-title truncate">{value}</h6>
                                    <p className="text-xs font-body truncate">{INFO[value as keyof typeof INFO]}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="w-full flex justify-center items-center gap-6 mt-4">
                        {INFO.facebook && (
                            <a href={INFO.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-400 transition-colors">
                                <GetIcon icon="facebook" className="text-xl" />
                            </a>
                        )}
                        {INFO.linkedin && (
                            <a href={INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-400 transition-colors">
                                <GetIcon icon="linkedin" className="text-xl" />
                            </a>
                        )}
                        {INFO.github && (
                            <a href={INFO.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-400 transition-colors">
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