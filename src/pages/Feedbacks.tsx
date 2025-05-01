import { FC } from 'react'

import { FEEDBACKS } from "@/data/constants/feedbacks.const"
import moment from "moment"

const Feedbacks: FC = () => {
  return (
    <div className="flex flex-col space-y-4 pt-4 md:pt-6">
      <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide font-title">Feedbacks</h1>
        <div className="max-w-[120px] h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mt-2 mb-3 md:mb-5"></div>
        <div className="space-y-4 md:space-y-6 text-sm md:text-base font-body">
          {FEEDBACKS.description.map((value, index) => (
            <p key={index} className="font-body">{value}</p>
          ))}
        </div>
      </div>

      <div className="mt-0 flex flex-col space-y-4 md:space-y-6 pb-6">
        {FEEDBACKS.list.map((obj) => (
          <div key={obj.name} className="bg-neutral-700/20 hover:bg-neutral-700/30 transition-colors duration-300 rounded-lg p-3 md:p-4">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <h1 className="text-lg md:text-2xl font-semibold tracking-wide font-title">{obj.name}</h1>
              <span className="text-xs md:text-sm py-1 bg-neutral-700 rounded-md px-3 md:px-4 inline-block font-body">🕛 {moment(obj.createdAt).fromNow()}</span>
            </div>
            <p className="mt-2 text-sm md:text-base font-body">{obj.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Feedbacks