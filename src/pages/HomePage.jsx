import { RiFacebookFill, RiGithubFill, RiLinkedinFill } from "@remixicon/react";

import photo from "/photo.jpg";
import { Link } from "react-router";

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
          <h1 className="font-bold text-lg">Aldrian Samson</h1>
          <p className="font-normal text-sm">
            I am a passionate and driven aspiring website developer with a heart
            full of dreams and determination. My mission is to transform
            real-world challenges into elegant digital solutions through the
            power of code.
          </p>
          <Link to="/about" className="btn mt-2 rounded">
            Learn more about me
          </Link>

          <div className="flex flex-row justify-start items-center mt-2 gap-1">
            <a href="#" target="_blank">
              <RiFacebookFill className="icon" />
            </a>
            <a href="#" target="_blank">
              <RiLinkedinFill className="icon" />
            </a>
            <a href="#" target="_blank">
              <RiGithubFill className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
