import { FC } from 'react'

import { EDUCATION } from "@/data/constants/education.const"

const Education: FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">Education</h1>
        <hr className="max-w-[120px] h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 border-none rounded-full mt-2 mb-5" />
        <div className="space-y-6">
          {EDUCATION.description.map((value) => (
            <p key={value}>{value}</p>
          ))}
        </div>
      </div>
      <div className="mt-0 flex flex-col space-y-6 pb-6">
        {EDUCATION.list.map((obj) => (
          <div key={obj.level}>
            <h1 className="text-2xl font-semibold tracking-wide mb-2">{obj.school}</h1>
            <span className="text-sm py-1 bg-neutral-700 rounded-md px-4">📍 {obj.address}</span>
            <p className="mt-2">{obj.details}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education