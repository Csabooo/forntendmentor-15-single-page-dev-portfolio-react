import React from "react";
import project_1_small from "../assets/thumbnail-project-1-small.webp";
import project_2_small from "../assets/thumbnail-project-2-small.webp";
import project_3_small from "../assets/thumbnail-project-3-small.webp";
import project_4_small from "../assets/thumbnail-project-4-small.webp";
import project_5_small from "../assets/thumbnail-project-5-small.webp";
import project_6_small from "../assets/thumbnail-project-6-small.webp";

import project_1_large from "../assets/thumbnail-project-1-large.webp";
import project_2_large from "../assets/thumbnail-project-2-large.webp";
import project_3_large from "../assets/thumbnail-project-3-large.webp";
import project_4_large from "../assets/thumbnail-project-4-large.webp";
import project_5_large from "../assets/thumbnail-project-5-large.webp";
import project_6_large from "../assets/thumbnail-project-6-large.webp";

function Projects() {
  return (
    <div className="relative">
      <svg
        className="absolute -top-16 -right-[360px]"
        xmlns="http://www.w3.org/2000/svg"
        width="530"
        height="129">
        <g fill="none" fillRule="evenodd" stroke="#FFF" opacity=".25">
          <ellipse cx="265" cy="40" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="52" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="65" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="77" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="89" rx="264.5" ry="39.5" />
        </g>
      </svg>
      <div className="flex justify-between pt-20 pb-8">
        <h1 className="text-left ">Projects</h1>
        <a href="#contact" className="block px-0">
          <p className="relative top-6 text-white tracking-[2.29px] decoration_underline">
            CONTACT ME
          </p>
        </a>
      </div>
      {/*-----------------------DESIGN PORTFOILO----------------------*/}
      <div className="md:grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <img
            className="pb-6 block md:hidden"
            src={project_1_small}
            alt="thumbnail-project-1-small"></img>
          <img
            className="pb-6 hidden md:block"
            src={project_1_large}
            alt="thumbnail-project-1-large"></img>
          <div className="flex flex-col text-left">
            <div>
              <h3 className="pb-2">DESIGN PORTFOLIO</h3>
              <div className="pb-4">
                <span className="inline">HTML</span>
                <span className="inline pl-5">CSS</span>
              </div>

              <div className="pb-14">
                <button href="#">
                  <p className="inline text-white tracking-[2.29px] decoration_underline ">
                    VIEW PROJECT
                  </p>
                </button>
                <button href="#">
                  <p className="inline pl-7 text-white tracking-[2.29px] decoration_underline">
                    VIEW CODE
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*-----------------------E-LEARNING LANDING PAGE---------------------*/}
        <div className="flex flex-col justify-center">
          <img
            className="pb-6 block md:hidden"
            src={project_2_small}
            alt="thumbnail-project-2-small"></img>
          <img
            className="pb-6 hidden md:block"
            src={project_2_large}
            alt="thumbnail-project-2-large"></img>
          <div className="flex flex-col text-left">
            <div>
              <h3 className="pb-2">E-LEARNING LANDING PAGE</h3>
              <div className="pb-4">
                <span className="inline">HTML</span>
                <span className="inline pl-5">CSS</span>
              </div>

              <div className="pb-14">
                <button href="#">
                  <p className="inline text-white tracking-[2.29px] decoration_underline ">
                    VIEW PROJECT
                  </p>
                </button>
                <button href="#">
                  <p className="inline pl-7 text-white tracking-[2.29px] decoration_underline">
                    VIEW CODE
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*-----------------------TODO WEB APP---------------------*/}
        <div className="flex flex-col justify-center">
          <img
            className="pb-6 block md:hidden"
            src={project_3_small}
            alt="thumbnail-project-3-small"></img>
          <img
            className="pb-6 hidden md:block"
            src={project_3_large}
            alt="thumbnail-project-3-large"></img>
          <div className="flex flex-col text-left">
            <div>
              <h3 className="pb-2">TODO WEB APP</h3>
              <div className="pb-4">
                <span className="inline">HTML</span>
                <span className="inline pl-5">CSS</span>
                <span className="inline pl-5">JAVASCRIPT</span>
              </div>

              <div className="pb-14">
                <button href="#">
                  <p className="inline text-white tracking-[2.29px] decoration_underline ">
                    VIEW PROJECT
                  </p>
                </button>
                <button href="#">
                  <p className="inline pl-7 text-white tracking-[2.29px] decoration_underline">
                    VIEW CODE
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*-----------------------ENTERTAINMENT WEB APP---------------------*/}
        <div className="flex flex-col justify-center">
          <img
            className="pb-6 block md:hidden"
            src={project_4_small}
            alt="thumbnail-project-4-small"></img>
          <img
            className="pb-6 hidden md:block"
            src={project_4_large}
            alt="thumbnail-project-4-large"></img>
          <div className="flex flex-col text-left">
            <div>
              <h3 className="pb-2">ENTERTAINMENT WEB APP</h3>
              <div className="pb-4">
                <span className="inline">HTML</span>
                <span className="inline pl-5">CSS</span>
                <span className="inline pl-5">JAVASCRIPT</span>
              </div>

              <div className="pb-14">
                <button href="#">
                  <p className="inline text-white tracking-[2.29px] decoration_underline ">
                    VIEW PROJECT
                  </p>
                </button>
                <button href="#">
                  <p className="inline pl-7 text-white tracking-[2.29px] decoration_underline">
                    VIEW CODE
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*-----------------------MEMORY GAME---------------------*/}
        <div className="flex flex-col justify-center">
          <img
            className="pb-6 block md:hidden"
            src={project_5_small}
            alt="thumbnail-project-5-small"></img>
          <img
            className="pb-6 hidden md:block"
            src={project_5_large}
            alt="thumbnail-project-5-large"></img>
          <div className="flex flex-col text-left">
            <div>
              <h3 className="pb-2">MEMORY GAME</h3>
              <div className="pb-4">
                <span className="inline">HTML</span>
                <span className="inline pl-5">CSS</span>
                <span className="inline pl-5">JAVASCRIPT</span>
              </div>

              <div className="pb-14">
                <button href="#">
                  <p className="inline text-white tracking-[2.29px] decoration_underline ">
                    VIEW PROJECT
                  </p>
                </button>
                <button href="#">
                  <p className="inline pl-7 text-white tracking-[2.29px] decoration_underline">
                    VIEW CODE
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*-----------------------ART GALLERY SHOWCASE---------------------*/}
        <div className="flex flex-col justify-center">
          <img
            className="pb-6 block md:hidden"
            src={project_6_small}
            alt="thumbnail-project-6-small"></img>
          <img
            className="pb-6 hidden md:block"
            src={project_6_large}
            alt="thumbnail-project-6-large"></img>
          <div className="flex flex-col text-left">
            <div>
              <h3 className="pb-2">ART GALLERY SHOWCASE</h3>
              <div className="pb-4">
                <span className="inline">HTML</span>
                <span className="inline pl-5">CSS</span>
                <span className="inline pl-5">JAVASCRIPT</span>
              </div>

              <div className="pb-14">
                <button href="#">
                  <p className="inline text-white tracking-[2.29px] decoration_underline ">
                    VIEW PROJECT
                  </p>
                </button>
                <button href="#">
                  <p className="inline pl-7 text-white tracking-[2.29px] decoration_underline">
                    VIEW CODE
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
