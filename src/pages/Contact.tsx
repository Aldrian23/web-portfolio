import { INFO } from "@/data/constants/info.const"
import { RiFacebookCircleFill, RiGithubFill, RiLinkedinFill } from "@remixicon/react"
import { FC } from 'react'

const Contact: FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">Contact</h1>
        <hr className="max-w-[120px] h-[2px] bg-gradient-to-r from-amber-400 to-amber-500 border-none rounded-full mt-2 mb-5" />
        <p>Let's connect! Whether you have inquiries, collaboration opportunities, or just want to say hello, feel free to reach out. I'm always open to discussing ideas and working on exciting projects.</p>
      </div>

      <div>
        <form className="flex flex-col gap-4">
          <textarea autoFocus placeholder="Your message here..." className="w-full h-[100px] rounded-md p-4 bg-neutral-700 text-white focus:outline-none focus:border-none"></textarea>
          <button type="button" className="transition-all duration-300 md:self-end bg-amber-500 hover:bg-amber-500/60 text-white px-6 md:px-8 py-2 rounded-md cursor-pointer text-sm">Send Message</button>
        </form>
      </div>

      <div className="my-5 space-y-4">
        <p className="text-center">You can also contact me through</p>

        <div className="flex items-center justify-center gap-6">
          <a href={INFO.github} target="_blank" rel="noopener noreferrer">
            <RiGithubFill className="h-8 w-8" />
          </a>
          <a href={INFO.linkedin} target="_blank" rel="noopener noreferrer">
            <RiLinkedinFill className="h-8 w-8" />
          </a>
          <a href={INFO.facebook} target="_blank" rel="noopener noreferrer">
            <RiFacebookCircleFill className="h-8 w-8" />
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