import { INFO } from "@/data/constants/info.const"
import { RiFacebookCircleFill, RiGithubFill, RiLinkedinFill } from "@remixicon/react"
import { FC } from 'react'

const Contact: FC = () => {
  return (
    <div className="flex flex-col space-y-4 pt-4 md:pt-6">
      <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide font-title">Contact</h1>
        <div className="max-w-[120px] h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mt-2 mb-3 md:mb-5"></div>
        <p className="text-sm md:text-base font-body">Let's connect! Whether you have inquiries, collaboration opportunities, or just want to say hello, feel free to reach out. I'm always open to discussing ideas and working on exciting projects.</p>
      </div>

      <div className="mt-2">
        <form className="flex flex-col gap-3 md:gap-4">
          <textarea
            autoFocus
            placeholder="Your message here..."
            className="w-full h-[80px] md:h-[100px] rounded-md p-3 md:p-4 bg-neutral-700 text-white text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-amber-400 font-body"
          ></textarea>
          <button
            type="button"
            className="transition-all duration-300 md:self-end bg-amber-500 hover:bg-amber-500/80 text-white px-4 md:px-8 py-2 rounded-md cursor-pointer text-xs md:text-sm font-title"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="my-3 md:my-5 space-y-3 md:space-y-4">
        <p className="text-center text-sm md:text-base font-body">You can also contact me through</p>

        <div className="flex items-center justify-center gap-5 md:gap-6">
          <a href={INFO.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-400 transition-colors">
            <RiGithubFill className="h-6 w-6 md:h-8 md:w-8" />
          </a>
          <a href={INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-400 transition-colors">
            <RiLinkedinFill className="h-6 w-6 md:h-8 md:w-8" />
          </a>
          <a href={INFO.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-400 transition-colors">
            <RiFacebookCircleFill className="h-6 w-6 md:h-8 md:w-8" />
          </a>
          {/* <a href={INFO.instagram} target="_blank" rel="noopener noreferrer">
            <RiInstagramFill className="h-8 w-8" />
          </a>
          <a href={INFO.tiktok} target="_blank" rel="noopener noreferrer">
            <RiTiktokFill className="h-8 w-8" />
          </a>
          <a href={INFO.youtube} target="_blank" rel="noopener noreferrer">
            <RiYoutubeFill className="h-8 w-8" />
          </a> */}
        </div>
      </div>
    </div>
  )
}

export default Contact