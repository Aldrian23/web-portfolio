import { FC } from 'react'

const Contact: FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">Contact</h1>
        <hr className="max-w-[120px] h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 border-none rounded-full mt-2 mb-5" />
      </div>
    </div>
  )
}

export default Contact