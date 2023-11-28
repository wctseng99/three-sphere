import React from "react";
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaMedium } from "react-icons/fa6";

function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <h1 className="font-bold text-4xl z-10 text-zinc-950">
          <a href="/">w.c. tseng</a>
        </h1>

        <div className="absolute z-10 left-10 bottom-20">
        <ul className="ml-1 mt-8 flex items-center">
          <li className="mr-5 text-2xl">
            <a
              className="block hover:text-blue-700"
              href="https://github.com/wctseng99"
              target="_blank"
              rel="noopener"
            >
              <BsGithub />
            </a>
          </li>
          <li className="mr-5 text-2xl">
            <a
              className="block hover:text-blue-700"
              href="https://www.linkedin.com/in/wctseng/"
              target="_blank"
              rel="noopener"
            >
              <BsLinkedin />
            </a>
          </li>
          <li className="mr-5 text-2xl">
            <a
              className="block hover:text-blue-700"
              href="https://medium.com/@wctseng99"
              target="_blank"
              rel="noopener"
            >
              <FaMedium />
            </a>
          </li>
          <li className="mr-5 text-2xl">
            <a
              className="block hover:text-blue-700"
              href="https://www.facebook.com/weijun.tseng/"
              target="_blank"
              rel="noopener"
            >
              <BsFacebook />
            </a>
          </li>
          <li className="mr-5 text-2xl">
            <a
              className="block hover:text-blue-700 "
              href="https://www.instagram.com/tseeng10/"
              target="_blank"
              rel="noopener"
            >
              <BsInstagram />
            </a>
          </li>
        </ul>
      </div>
      </div>

    </>
  );
}

export default Home;
