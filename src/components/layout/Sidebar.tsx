import { FC } from 'react'

import GetIcon from "@/components/common/GetIcon"
import { INFO } from "@/data/constants/info.const"

const Sidebar: FC = () => {
    const shows = ['phone', 'location'] // You can add more to show like email, role, location, etc.

    return (
        <div className="w-full max-w-full md:max-w-[300px] bg-neutral-800 border border-neutral-600 rounded-2xl py-7 px-5 md:px-8 flex flex-col items-center justify-start">
            <img src={INFO.image} alt={INFO.name} className="size-60 rounded-xl" />

            <div className="w-auto text-center text-white mt-6">
                <h1 className="text-2xl font-bold">{INFO.name}</h1>
                <p className="mt-1 text-sm py-1 bg-neutral-700 rounded-md">{INFO.role}</p>
            </div>

            <hr className="hidden md:block w-full h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 border-none rounded-full my-6" />

            <div className="w-full text-white flex flex-col gap-5">
                {shows.map((value) => (
                    <div key={value} className="w-full flex gap-2 md:gap-4 items-center justify-start">
                        <div className="size-10 bg-neutral-700 rounded-md grid place-items-center">
                            <GetIcon icon={value} className="text-amber-400" />
                        </div>
                        <div className="flex-1">
                            <h6 className="text-sm uppercase font-bold text-white/90">{value}</h6>
                            <p className="text-xs">{INFO[value as keyof typeof INFO]}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar