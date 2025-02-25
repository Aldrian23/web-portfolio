import { FC } from 'react'

import { INFO } from "@/data/constants/info.const"

const About: FC = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">About</h1>
        <hr className="max-w-[120px] h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 border-none rounded-full mt-2 mb-5" />
        <div className="space-y-6">
          {INFO.description.map((value) => (
            <p key={value}>{value}</p>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-col space-y-6 pb-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-wide mb-3">Technologies</h1>
          <div className="flex flex-wrap gap-3">
            {INFO.stacks.map((value) => (
              <span key={value} className="mt-1 text-sm py-1 bg-neutral-700 rounded-md px-4">{value}</span>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-wide mb-3">Softwares</h1>
          <div className="flex flex-wrap gap-3">
            {INFO.softwares.map((value) => (
              <span key={value} className="mt-1 text-sm py-1 bg-neutral-700 rounded-md px-4">{value}</span>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-wide mb-3">Personal Interests</h1>
          <div className="flex flex-wrap gap-3">
            {INFO.interests.map((value) => (
              <span key={value} className="mt-1 text-sm py-1 bg-neutral-700 rounded-md px-4">{value}</span>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default About