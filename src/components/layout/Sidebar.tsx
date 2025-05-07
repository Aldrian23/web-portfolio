import { FC } from 'react'
import { Link, useLocation } from "react-router"

import GetIcon from "@/components/common/GetIcon"
import { INFO } from "@/data/constants/info.const"

const Sidebar: FC = () => {
    const shows = ['phone', 'location', 'email'] // You can add more to show like email, role, location, etc.
    const { pathname } = useLocation();

    return (
        <div className="hidden lg:flex w-full max-w-full lg:max-w-[300px] bg-neutral-800 border border-neutral-600 rounded-2xl py-5 md:py-7 px-4 md:px-8 flex-col items-center justify-start">
            {/* Profile Image */}
            <img
                src={INFO.image}
                alt={INFO.name}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-xl object-cover"
            />

            {/* Name and Role */}
            <div className="w-full text-center text-white mt-4 md:mt-6">
                <h1 className="text-xl md:text-2xl font-bold font-title">{INFO.name}</h1>
                <p className="mt-1 text-xs md:text-sm py-1 px-2 bg-neutral-700 rounded-md font-body">{INFO.role}</p>
            </div>

            {/* Divider */}
            <div className="w-full h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 rounded-full my-4 md:my-6"></div>

            {/* Contact Information */}
            <div className="w-full text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3 md:gap-5">
                {shows.map((value) => (
                    <div key={value} className="flex items-center gap-2 md:gap-4">
                        <div className="min-w-[32px] w-8 h-8 md:min-w-[40px] md:w-10 md:h-10 bg-neutral-700 rounded-md grid place-items-center">
                            <GetIcon icon={value} className="text-amber-400" />
                        </div>
                        <div className="overflow-hidden">
                            <h6 className="text-xs md:text-sm uppercase font-bold text-white/90 font-title truncate">{value}</h6>
                            <p className="text-xs font-body truncate">{INFO[value as keyof typeof INFO]}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Contact Button */}
            <Link
                to="/contact"
                className={`w-full mt-6 py-2 px-4 text-center rounded-lg transition-colors duration-300 font-title text-sm font-medium flex items-center justify-center gap-2
                           ${pathname === "/contact" ? "bg-amber-500 text-white" : "bg-neutral-700 text-white hover:bg-amber-500/80"}`}
            >
                <GetIcon icon="contact" className="text-current" />
                Contact Me
            </Link>

            {/* Social Links */}
            <div className="w-full flex justify-center items-center gap-4 mt-4 md:mt-6">
                {INFO.facebook && (
                    <a href={INFO.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-400 transition-colors">
                        <GetIcon icon="facebook" className="text-xl md:text-2xl" />
                    </a>
                )}
                {INFO.linkedin && (
                    <a href={INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-400 transition-colors">
                        <GetIcon icon="linkedin" className="text-xl md:text-2xl" />
                    </a>
                )}
                {INFO.github && (
                    <a href={INFO.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-400 transition-colors">
                        <GetIcon icon="github" className="text-xl md:text-2xl" />
                    </a>
                )}
            </div>
        </div>
    )
}

export default Sidebar