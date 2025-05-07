import { FC } from 'react'

import { EXPERIENCES } from "@/data/constants/experiences.const"

const Experiences: FC = () => {
    return (
        <div className="flex flex-col space-y-4 pt-4 md:pt-6">
            <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide font-title">Experiences</h1>
                <div className="max-w-[120px] h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mt-2 mb-3 md:mb-5"></div>
                <div className="space-y-4 md:space-y-6 text-sm md:text-base font-body">
                    {EXPERIENCES.description.map((value, index) => (
                        <p key={index} className="font-body">{value}</p>
                    ))}
                </div>
            </div>
            <div className="mt-0 flex flex-col space-y-4 md:space-y-6 pb-6">
                {EXPERIENCES.list.map((obj) => (
                    <div key={obj.position} className="bg-neutral-800/50 hover:bg-neutral-800 transition-colors duration-300 rounded-lg p-3 md:p-4">
                        <h1 className="text-lg md:text-2xl font-semibold tracking-wide mb-1 md:mb-2 font-title">{obj.company}</h1>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                            <span className="text-xs md:text-sm py-1 bg-neutral-700 rounded-md px-3 md:px-4 inline-block w-fit font-body">📍 {obj.location}</span>
                            <span className="text-xs md:text-sm py-1 bg-neutral-700/50 rounded-md px-3 md:px-4 inline-block w-fit font-body">{obj.position}</span>
                            <span className="text-xs md:text-sm py-1 bg-neutral-700/50 rounded-md px-3 md:px-4 inline-block w-fit font-body">⏱️ {obj.duration}</span>
                        </div>
                        <p className="mt-2 text-sm md:text-base font-body">{obj.details}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experiences 