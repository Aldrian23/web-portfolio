import { FC } from 'react'

import GetIcon from "@/components/common/GetIcon"
import { INFO } from "@/data/constants/info.const"

const Sidebar: FC = () => {
    const shows = ['phone', 'location'] // You can add more to show like email, role, location, etc.

    return (
        <div className="w-full max-w-full md:max-w-[300px] bg-neutral-800 border border-neutral-600 rounded-2xl py-5 md:py-7 px-4 md:px-8 flex flex-col items-center justify-start">
            <img src={INFO.image} alt={INFO.name} className="w-40 h-40 md:w-60 md:h-60 rounded-xl object-cover" />

            <div className="w-full text-center text-white mt-4 md:mt-6">
                <h1 className="text-xl md:text-2xl font-bold font-title">{INFO.name}</h1>
                <p className="mt-1 text-xs md:text-sm py-1 px-2 bg-neutral-700 rounded-md font-body">{INFO.role}</p>
            </div>

            <div className="w-full h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 rounded-full my-4 md:my-6"></div>

            <div className="w-full text-white flex flex-row md:flex-col flex-wrap justify-center gap-3 md:gap-5">
                {shows.map((value) => (
                    <div key={value} className="flex-1 min-w-[48%] md:min-w-full flex gap-2 md:gap-4 items-center justify-start">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-neutral-700 rounded-md grid place-items-center">
                            <GetIcon icon={value} className="text-amber-400" />
                        </div>
                        <div className="flex-1">
                            <h6 className="text-xs md:text-sm uppercase font-bold text-white/90 font-title">{value}</h6>
                            <p className="text-xs font-body">{INFO[value as keyof typeof INFO]}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Social Links */}
            <div className="w-full flex justify-center items-center gap-4 mt-4 md:mt-6">
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
    )
}

export default Sidebar