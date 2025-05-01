import { FC } from 'react'

import { INFO } from "@/data/constants/info.const"

const About: FC = () => {
  return (
    <div className="pt-4 md:pt-6">
      <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide font-title">About</h1>
        <div className="max-w-[120px] h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mt-2 mb-5"></div>
        <div className="space-y-4 md:space-y-6 text-sm md:text-base font-body">
          {INFO.description.map((value, index) => (
            <p key={index} className="font-body">{value}</p>
          ))}
        </div>
      </div>

      <div className="mt-4 md:mt-6 flex flex-col space-y-4 md:space-y-6 pb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold tracking-wide mb-2 md:mb-3 font-title">Technologies</h1>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {INFO.stacks.map((value) => (
              <span key={value} className="text-xs md:text-sm py-1 bg-neutral-700 rounded-md px-3 md:px-4 font-body">{value}</span>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-semibold tracking-wide mb-2 md:mb-3 font-title">Softwares</h1>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {INFO.softwares.map((value) => (
              <span key={value} className="text-xs md:text-sm py-1 bg-neutral-700 rounded-md px-3 md:px-4 font-body">{value}</span>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-semibold tracking-wide mb-2 md:mb-3 font-title">Personal Interests</h1>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {INFO.interests.map((value) => (
              <span key={value} className="text-xs md:text-sm py-1 bg-neutral-700 rounded-md px-3 md:px-4 font-body">{value}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About