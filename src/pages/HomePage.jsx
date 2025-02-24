import { Link } from "react-router";
import { CONTENT } from "../data/constant/content.const";

import { RiFacebookFill, RiGithubFill, RiLinkedinFill } from "@remixicon/react";

import photo from "/photo.jpg";

const HomePage = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-center gap-2">
        <img
          className="border-5 border-main image-container rounded-full"
          src={photo}
          alt="Photo"
          style={{ objectFit: "cover", objectPosition: "top center" }}
        />
        <div
          className="flex flex-col items-start"
          style={{
            width: "450px",
          }}
        >
          <h1 className="font-bold text-lg">{CONTENT.Home.name}</h1>
          <p className="font-normal text-sm">{CONTENT.Home.description}</p>
          <Link to="/about" className="btn mt-2 rounded">
            {CONTENT.Home.buttonLabel}
          </Link>

          <div className="flex flex-row justify-start items-center mt-2 gap-1">
            <a href={CONTENT.Socials.facebook} target="_blank">
              <RiFacebookFill className="icon" />
            </a>
            <a href={CONTENT.Socials.linkedin} target="_blank">
              <RiLinkedinFill className="icon" />
            </a>
            <a href={CONTENT.Socials.github} target="_blank">
              <RiGithubFill className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
