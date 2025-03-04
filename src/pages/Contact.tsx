import { FC } from 'react'

const Contact: FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">Contact</h1>
        <hr className="max-w-[120px] h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 border-none rounded-full mt-2 mb-5" />
        <p>Let's connect! Whether you have inquiries, collaboration opportunities, or just want to say hello, feel free to reach out. I'm always open to discussing ideas and working on exciting projects.</p>
      </div>
    </div>
  )
}

export default Contact