import { FC } from 'react'

import { FEEDBACKS } from "@/data/constants/feedbacks.const"

const Feedbacks: FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">Feedbacks</h1>
        <hr className="max-w-[120px] h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 border-none rounded-full mt-2 mb-5" />
        <div className="space-y-6">
          {FEEDBACKS.description.map((value) => (
            <p key={value}>{value}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Feedbacks