import React, { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem"; // Adj meg a helyes elérési útvonalat

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
  const [isWindowVisible, setWindowVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        // Csak az "xl" breakpoint felett változtassuk az ablak láthatóságát
        setWindowVisible((prevIsVisible) => prevIsVisible); // Ne változtassuk meg az állapotot
      } else {
        setWindowVisible(false); // "xl" breakpoint alatt az ablak láthatóságát állítsuk hamisra
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Első alkalommal is ellenőrizze az ablak láthatóságát
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <hr className="md:hidden block" />
      <svg
        className="relative -top-16 -right-[400px] md:-top-24 md:-right-[900px] xl:-right-[900px] xl:-top-[250px]"
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
      <div className="flex justify-between pt-20 pb-8 md:pb-16 xl:pt-0 xl:pb-24">
        <h1 className="text-left ">Projects</h1>
        <a href="#contact" className="block px-0">
          <p className="relative text-white tracking-[2.29px] decoration_underline md:pt-4">
            CONTACT ME
          </p>
        </a>
      </div>

      <div className="md:grid grid-cols-2 gap-8">
        <div>
          <ProjectItem
            smallImage={project_1_small}
            largeImage={project_1_large}
            title="DESIGN PORTFOLIO"
            technologies={["HTML", "CSS"]}
          />
        </div>
        <div>
          <ProjectItem
            smallImage={project_2_small}
            largeImage={project_2_large}
            title="E-LEARNING LANDING PAGE"
            technologies={["HTML", "CSS"]}
          />
        </div>
        <div>
          <ProjectItem
            smallImage={project_3_small}
            largeImage={project_3_large}
            title="TODO WEB APP"
            technologies={["HTML", "CSS", "JAVASCRIPT "]}
          />
        </div>
        <div>
          <ProjectItem
            smallImage={project_4_small}
            largeImage={project_4_large}
            title="ENTERTAINMENT WEB APP"
            technologies={["HTML", "CSS", "JAVASCRIPT "]}
          />
        </div>
        <div>
          <ProjectItem
            smallImage={project_5_small}
            largeImage={project_5_large}
            title="MEMORY GAME"
            technologies={["HTML", "CSS", "JAVASCRIPT "]}
          />
        </div>
        <div>
          <ProjectItem
            smallImage={project_6_small}
            largeImage={project_6_large}
            title="ART GALLERY SHOWCASE"
            technologies={["HTML", "CSS", "JAVASCRIPT "]}
          />
        </div>
        {/* ... és így tovább minden projekt elemre ... */}
      </div>
    </div>
  );
}

export default Projects;
